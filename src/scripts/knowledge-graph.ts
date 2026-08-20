type RoadmapRecord = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  stages: Array<{ id: string; title: string; description?: string; skills: string[] }>;
};

type SkillRecord = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  prerequisites: string[];
  subtopics: string[];
};

type GraphData = { roadmaps: RoadmapRecord[]; skills: SkillRecord[] };
type NodeKind = 'root' | 'roadmap' | 'stage' | 'skill' | 'topic';
type GraphNode = {
  id: string;
  label: string;
  kind: NodeKind;
  category: string;
  description: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  linkId?: string;
  fixed?: boolean;
};
type GraphEdge = { source: GraphNode; target: GraphNode; kind: 'hierarchy' | 'prerequisite'; length: number };

const canvas = document.querySelector<HTMLCanvasElement>('#knowledge-graph');
const dataElement = document.querySelector<HTMLScriptElement>('#graph-data');
const search = document.querySelector<HTMLInputElement>('#graph-search');
const tooltip = document.querySelector<HTMLDivElement>('#graph-tooltip');
const status = document.querySelector<HTMLDivElement>('#graph-status');
const zoomIn = document.querySelector<HTMLButtonElement>('#zoom-in');
const zoomOut = document.querySelector<HTMLButtonElement>('#zoom-out');
const fitButton = document.querySelector<HTMLButtonElement>('#fit-graph');

if (canvas && dataElement && search && tooltip && status && zoomIn && zoomOut && fitButton) {
  const context = canvas.getContext('2d');
  const data = JSON.parse(dataElement.textContent || '{"roadmaps":[],"skills":[]}') as GraphData;
  const palette: Record<string, string> = {
    'Software Development': '#5378d8',
    Cybersecurity: '#b55aaa',
    Design: '#d7a23d',
    Data: '#7aa52c',
  };
  const nodes: GraphNode[] = [];
  const nodeById = new Map<string, GraphNode>();
  const edges: GraphEdge[] = [];
  const neighbors = new Map<string, Set<string>>();
  let width = 0;
  let height = 0;
  let zoom = .7;
  let panX = 0;
  let panY = 0;
  let query = '';
  let hovered: GraphNode | null = null;
  let selected: GraphNode | null = null;
  let interaction: 'pan' | 'node' | null = null;
  let pointerStart = { x: 0, y: 0 };
  let panStart = { x: 0, y: 0 };
  let moved = false;
  let simulationFrames = 0;
  let initialized = false;

  const hash = (value: string) => {
    let result = 2166136261;
    for (let index = 0; index < value.length; index += 1) result = Math.imul(result ^ value.charCodeAt(index), 16777619);
    return (result >>> 0) / 4294967295;
  };

  const addNode = (node: GraphNode) => {
    const existing = nodeById.get(node.id);
    if (existing) return existing;
    nodes.push(node);
    nodeById.set(node.id, node);
    neighbors.set(node.id, new Set());
    return node;
  };

  const addEdge = (sourceId: string, targetId: string, kind: GraphEdge['kind'], length: number) => {
    const source = nodeById.get(sourceId);
    const target = nodeById.get(targetId);
    if (!source || !target || edges.some((edge) => edge.source === source && edge.target === target)) return;
    edges.push({ source, target, kind, length });
    neighbors.get(sourceId)?.add(targetId);
    neighbors.get(targetId)?.add(sourceId);
  };

  const buildGraph = () => {
    addNode({ id: 'root', label: 'StagePath', kind: 'root', category: '', description: 'The complete StagePath knowledge universe.', x: 0, y: 0, vx: 0, vy: 0, radius: 16, color: '#d7f47a', fixed: true });
    const skillCategory = new Map<string, string>();

    data.roadmaps.forEach((roadmap, roadmapIndex) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * roadmapIndex) / data.roadmaps.length;
      const clusterX = Math.cos(angle) * 430;
      const clusterY = Math.sin(angle) * 430;
      const roadmapId = `roadmap:${roadmap.id}`;
      addNode({ id: roadmapId, label: roadmap.title, kind: 'roadmap', category: roadmap.category, description: roadmap.description, x: clusterX, y: clusterY, vx: 0, vy: 0, radius: 12, color: palette[roadmap.category] || '#d7f47a', linkId: roadmapId });
      addEdge('root', roadmapId, 'hierarchy', 350);

      roadmap.stages.forEach((stage, stageIndex) => {
        const stageAngle = angle + (stageIndex - (roadmap.stages.length - 1) / 2) * .25;
        const stageId = `stage:${roadmap.id}:${stage.id}`;
        addNode({ id: stageId, label: stage.title, kind: 'stage', category: roadmap.category, description: stage.description || `${roadmap.title} learning stage`, x: clusterX + Math.cos(stageAngle) * 105, y: clusterY + Math.sin(stageAngle) * 105, vx: 0, vy: 0, radius: 8, color: palette[roadmap.category] || '#73808e' });
        addEdge(roadmapId, stageId, 'hierarchy', 110);

        stage.skills.forEach((skillId, skillIndex) => {
          if (!skillCategory.has(skillId)) skillCategory.set(skillId, roadmap.category);
          const skill = data.skills.find((item) => item.id === skillId);
          if (!skill) return;
          const graphSkillId = `skill:${skill.id}`;
          const skillAngle = stageAngle + (skillIndex - (stage.skills.length - 1) / 2) * .3;
          addNode({ id: graphSkillId, label: skill.title, kind: 'skill', category: skillCategory.get(skillId) || roadmap.category, description: skill.description, x: clusterX + Math.cos(skillAngle) * 205 + (hash(skillId) - .5) * 35, y: clusterY + Math.sin(skillAngle) * 205 + (hash(`${skillId}-y`) - .5) * 35, vx: 0, vy: 0, radius: 6, color: palette[skillCategory.get(skillId) || roadmap.category] || '#9aa29e', linkId: graphSkillId });
          addEdge(stageId, graphSkillId, 'hierarchy', 95);
        });
      });
    });

    data.skills.forEach((skill) => {
      const skillNode = nodeById.get(`skill:${skill.id}`);
      if (!skillNode) return;
      skill.subtopics.forEach((subtopic, index) => {
        const angle = Math.PI * 2 * (index / Math.max(skill.subtopics.length, 1) + hash(`${skill.id}:${subtopic}`) * .14);
        const topicId = `topic:${skill.id}:${index}`;
        addNode({ id: topicId, label: subtopic, kind: 'topic', category: skillNode.category, description: `Part of ${skill.title}`, x: skillNode.x + Math.cos(angle) * (42 + hash(topicId) * 25), y: skillNode.y + Math.sin(angle) * (42 + hash(`${topicId}:y`) * 25), vx: 0, vy: 0, radius: 3.2, color: skillNode.color });
        addEdge(skillNode.id, topicId, 'hierarchy', 48);
      });
      skill.prerequisites.forEach((prerequisite) => addEdge(`skill:${prerequisite}`, skillNode.id, 'prerequisite', 145));
    });
  };

  const fitGraph = (targets = nodes) => {
    if (!targets.length || !width || !height) return;
    const minX = Math.min(...targets.map((node) => node.x));
    const maxX = Math.max(...targets.map((node) => node.x));
    const minY = Math.min(...targets.map((node) => node.y));
    const maxY = Math.max(...targets.map((node) => node.y));
    const padding = width < 650 ? 75 : 115;
    zoom = Math.max(.18, Math.min(2.4, Math.min((width - padding * 2) / Math.max(maxX - minX, 120), (height - padding * 2) / Math.max(maxY - minY, 120))));
    panX = width / 2 - ((minX + maxX) / 2) * zoom;
    panY = height / 2 - ((minY + maxY) / 2) * zoom;
    updateStatus();
  };

  const screenPoint = (node: GraphNode) => ({ x: node.x * zoom + panX, y: node.y * zoom + panY });
  const worldPoint = (point: { x: number; y: number }) => ({ x: (point.x - panX) / zoom, y: (point.y - panY) / zoom });
  const isMatch = (node: GraphNode) => !query || `${node.label} ${node.category} ${node.description}`.toLowerCase().includes(query);
  const isConnected = (node: GraphNode) => Boolean(hovered && (node === hovered || neighbors.get(hovered.id)?.has(node.id)));

  const draw = () => {
    if (!context) return;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.fillStyle = '#0b0e0d';
    context.fillRect(0, 0, width, height);

    const gridSize = Math.max(22, 42 * zoom);
    const gridOffsetX = ((panX % gridSize) + gridSize) % gridSize;
    const gridOffsetY = ((panY % gridSize) + gridSize) % gridSize;
    context.fillStyle = 'rgba(179,195,187,.055)';
    for (let x = gridOffsetX; x < width; x += gridSize) for (let y = gridOffsetY; y < height; y += gridSize) { context.beginPath(); context.arc(x, y, .75, 0, Math.PI * 2); context.fill(); }

    edges.forEach((edge) => {
      const source = screenPoint(edge.source);
      const target = screenPoint(edge.target);
      const related = hovered && (edge.source === hovered || edge.target === hovered);
      const matched = query && (isMatch(edge.source) || isMatch(edge.target));
      context.beginPath();
      context.moveTo(source.x, source.y);
      context.lineTo(target.x, target.y);
      context.strokeStyle = related ? 'rgba(111,220,225,.82)' : matched ? 'rgba(215,244,122,.7)' : edge.kind === 'prerequisite' ? 'rgba(79,176,185,.2)' : `rgba(165,180,172,${Math.min(.2, .07 + zoom * .08)})`;
      context.lineWidth = related || matched ? 1.25 : edge.kind === 'prerequisite' ? .75 : .55;
      context.stroke();
    });

    nodes.forEach((node) => {
      const point = screenPoint(node);
      if (point.x < -30 || point.x > width + 30 || point.y < -30 || point.y > height + 30) return;
      const matched = isMatch(node);
      const connected = isConnected(node);
      const dimmed = Boolean((query && !matched) || (hovered && !connected));
      const radius = Math.max(node.kind === 'topic' ? 1.5 : 2.2, node.radius * zoom);
      context.globalAlpha = dimmed ? .13 : node.kind === 'topic' ? .78 : 1;
      if (connected || (query && matched)) { context.beginPath(); context.arc(point.x, point.y, radius + 6, 0, Math.PI * 2); context.fillStyle = connected ? 'rgba(82,210,217,.16)' : 'rgba(215,244,122,.16)'; context.fill(); }
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, Math.PI * 2);
      context.fillStyle = node.kind === 'root' ? '#d7f47a' : node.color;
      context.fill();
      if (node.kind === 'root' || node.kind === 'roadmap') { context.strokeStyle = 'rgba(255,255,255,.55)'; context.lineWidth = 1; context.stroke(); }

      const showLabel = node.kind === 'root' || node.kind === 'roadmap' || (node.kind === 'stage' && zoom > .58) || (node.kind === 'skill' && zoom > 1.02) || (node.kind === 'topic' && zoom > 1.8) || connected || (query && matched);
      if (showLabel) {
        const fontSize = node.kind === 'root' ? 12 : node.kind === 'roadmap' ? 10 : node.kind === 'stage' ? 8 : 7;
        context.font = `${node.kind === 'root' || node.kind === 'roadmap' ? 700 : 500} ${fontSize}px system-ui, sans-serif`;
        context.fillStyle = node.kind === 'root' ? '#eff7f1' : connected || (query && matched) ? '#ffffff' : '#b8c2bd';
        context.textAlign = 'left';
        context.textBaseline = 'middle';
        const label = node.label.length > 34 ? `${node.label.slice(0, 33)}…` : node.label;
        context.fillText(label, point.x + radius + 5, point.y);
      }
      context.globalAlpha = 1;
    });
  };

  const simulate = () => {
    if (simulationFrames > 220) return;
    for (let first = 0; first < nodes.length; first += 1) {
      const a = nodes[first];
      if (a.fixed) continue;
      for (let second = first + 1; second < nodes.length; second += 1) {
        const b = nodes[second];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distanceSquared = Math.max(dx * dx + dy * dy, 25);
        if (distanceSquared > 22000) continue;
        const force = (a.kind === 'topic' && b.kind === 'topic' ? 14 : 34) / distanceSquared;
        a.vx -= dx * force;
        a.vy -= dy * force;
        if (!b.fixed) { b.vx += dx * force; b.vy += dy * force; }
      }
    }
    edges.forEach((edge) => {
      const dx = edge.target.x - edge.source.x;
      const dy = edge.target.y - edge.source.y;
      const distance = Math.max(Math.hypot(dx, dy), 1);
      const force = (distance - edge.length) * (edge.kind === 'prerequisite' ? .0015 : .004);
      if (!edge.source.fixed) { edge.source.vx += (dx / distance) * force; edge.source.vy += (dy / distance) * force; }
      if (!edge.target.fixed) { edge.target.vx -= (dx / distance) * force; edge.target.vy -= (dy / distance) * force; }
    });
    nodes.forEach((node) => {
      if (node.fixed || node === selected) return;
      node.vx += -node.x * .00003;
      node.vy += -node.y * .00003;
      node.vx *= .91;
      node.vy *= .91;
      node.x += node.vx;
      node.y += node.vy;
    });
    simulationFrames += 1;
    if (simulationFrames === 90) fitGraph();
    draw();
    requestAnimationFrame(simulate);
  };

  const updateStatus = () => {
    const zoomPercent = Math.round(zoom * 100);
    status.innerHTML = `<b>${nodes.length}</b> nodes · ${zoomPercent}% zoom · drag to explore`;
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    if (!initialized) { fitGraph(); initialized = true; }
    draw();
  };

  const pointerPosition = (event: PointerEvent | WheelEvent) => { const rect = canvas.getBoundingClientRect(); return { x: event.clientX - rect.left, y: event.clientY - rect.top }; };
  const hitNode = (point: { x: number; y: number }) => {
    let closest: GraphNode | null = null;
    let closestDistance = Infinity;
    for (const node of nodes) {
      const screen = screenPoint(node);
      const distance = Math.hypot(point.x - screen.x, point.y - screen.y);
      const targetRadius = Math.max(node.radius * zoom, node.kind === 'topic' ? 5 : 8);
      if (distance <= targetRadius && distance < closestDistance) { closest = node; closestDistance = distance; }
    }
    return closest;
  };

  const applyZoom = (factor: number, anchor = { x: width / 2, y: height / 2 }) => {
    const before = worldPoint(anchor);
    zoom = Math.max(.18, Math.min(3.5, zoom * factor));
    panX = anchor.x - before.x * zoom;
    panY = anchor.y - before.y * zoom;
    updateStatus();
    draw();
  };

  const showTooltip = (node: GraphNode | null, point: { x: number; y: number }) => {
    if (!node) { tooltip.classList.remove('visible'); return; }
    tooltip.textContent = `${node.label} · ${node.kind}${node.linkId ? ' · click to open' : ''}`;
    tooltip.style.left = `${Math.min(point.x, width - 280)}px`;
    tooltip.style.top = `${Math.min(point.y, height - 70)}px`;
    tooltip.classList.add('visible');
  };

  canvas.addEventListener('wheel', (event) => { event.preventDefault(); applyZoom(event.deltaY < 0 ? 1.14 : .88, pointerPosition(event)); }, { passive: false });
  canvas.addEventListener('pointerdown', (event) => {
    const point = pointerPosition(event);
    selected = hitNode(point);
    interaction = selected && selected.kind !== 'root' ? 'node' : 'pan';
    pointerStart = point;
    panStart = { x: panX, y: panY };
    moved = false;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    const point = pointerPosition(event);
    const dx = point.x - pointerStart.x;
    const dy = point.y - pointerStart.y;
    if (interaction) {
      moved ||= Math.hypot(dx, dy) > 3;
      if (interaction === 'pan') { panX = panStart.x + dx; panY = panStart.y + dy; }
      else if (selected) { const world = worldPoint(point); selected.x = world.x; selected.y = world.y; selected.vx = 0; selected.vy = 0; }
    }
    hovered = selected || hitNode(point);
    canvas.style.cursor = interaction ? 'grabbing' : hovered ? 'pointer' : 'grab';
    showTooltip(hovered, point);
    draw();
  });
  canvas.addEventListener('pointerup', (event) => {
    if (selected?.linkId && !moved) document.querySelector<HTMLAnchorElement>(`[data-graph-link="${CSS.escape(selected.linkId)}"]`)?.click();
    selected = null;
    interaction = null;
    canvas.releasePointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointerleave', () => { if (!interaction) { hovered = null; tooltip.classList.remove('visible'); draw(); } });
  canvas.addEventListener('dblclick', (event) => applyZoom(1.5, pointerPosition(event)));
  search.addEventListener('input', () => { query = search.value.trim().toLowerCase(); draw(); });
  search.addEventListener('keydown', (event) => { if (event.key === 'Enter' && query) fitGraph(nodes.filter(isMatch)); });
  zoomIn.addEventListener('click', () => applyZoom(1.3));
  zoomOut.addEventListener('click', () => applyZoom(.76));
  fitButton.addEventListener('click', () => fitGraph());
  new ResizeObserver(resize).observe(canvas);
  buildGraph();
  resize();
  requestAnimationFrame(simulate);
}
