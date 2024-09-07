import {
  ConnectionLineType,
  Edge,
  Node,
  NodeProps,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { ComponentType, useCallback } from 'react';

type HorizontalFlowPropsType = {
  initialNodes?: Node[];
  initialEdges?: Edge[];
  nodeTypes?: Record<string, ComponentType<NodeProps>>;
};

const styles = {
  width: '100%',
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 262;
const nodeHeight = 80;

const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: 'left',
      sourcePosition: 'right',
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

const HorizontalFlow = ({ initialEdges, initialNodes, nodeTypes }: HorizontalFlowPropsType) => {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges,
  );

  const [nodes, _, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds),
      ),
    [],
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        style={styles}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        zoomOnDoubleClick={false}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        elementsSelectable={false}
        nodesConnectable={false}
        connectionLineType={ConnectionLineType.SmoothStep}
      />
    </ReactFlowProvider>
  );
};

export default HorizontalFlow;
