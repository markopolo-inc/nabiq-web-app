import { useCallback, useMemo } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Node,
    Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

type HorizontalFlowPropsType = {
    initialNodes: Node[],
    initialEdges: Edge[]
}

const styles = {
    width: '100%',
};

const HorizontalFlow = ({ initialEdges, initialNodes }: HorizontalFlowPropsType) => {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params) => setEdges((els) => addEdge(params, els)),
        [],
    );

    return (
        <ReactFlow
            style={styles}
            panOnDrag={false}
            zoomOnScroll={false}
            draggable={false}
            zoomOnDoubleClick={false}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        />

    );
};

export default HorizontalFlow;
