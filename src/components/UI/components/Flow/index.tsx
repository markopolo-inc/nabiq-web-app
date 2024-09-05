import {
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
import { ComponentType, useCallback } from 'react';

type HorizontalFlowPropsType = {
  initialNodes?: Node[];
  initialEdges?: Edge[];
  nodeTypes?: Record<string, ComponentType<NodeProps>>;
};

const styles = {
  width: '100%',
};

const HorizontalFlow = ({ initialEdges, initialNodes, nodeTypes }: HorizontalFlowPropsType) => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

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
      />
    </ReactFlowProvider>
  );
};

export default HorizontalFlow;
