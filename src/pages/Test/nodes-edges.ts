const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
    {
        id: "discover_bali",
        type: "DiscoverBali",
        position,
        data: { value: 123 },
        dragHandle: ".custom-drag-handle",
    },
    {
        id: "cohort_1",
        type: "Cohort1",
        position,
        data: { value: 123 },
        dragHandle: ".custom-drag-handle",
    },
    {
        id: "cohort_2",
        type: "Cohort2",
        position,
        data: { value: 123 },
        dragHandle: ".custom-drag-handle",
    },
    {
        id: "cohort_3",
        type: "Cohort3",
        position,
        data: { value: 123 },
        dragHandle: ".custom-drag-handle",
    },
    {
        id: "cohort_4",
        type: "Cohort4",
        position,
        data: { value: 123 },
        dragHandle: ".custom-drag-handle",
    },
    // {
    //   id: "platform",
    //   type: "Platform",
    //   position,
    //   data: { value: 123 },
    //   dragHandle: ".custom-drag-handle",
    // },
];

export const initialEdges = [
    {
        id: "edge_1",
        source: "discover_bali",
        target: "cohort_1",
        sourceHandle: "a",
        style: { stroke: "#9AA4B2" },
        edgeType
    },
    {
        id: "edge_2",
        source: "discover_bali",
        target: "cohort_2",
        targetPosition: "right",
        sourceHandle: "a",
        style: { stroke: "#9AA4B2" },
        edgeType
    },
    {
        id: "edge_3",
        source: "discover_bali",
        target: "cohort_3",
        sourceHandle: "a",
        style: { stroke: "#9AA4B2" },
        edgeType
    },
    {
        id: "edge_4",
        source: "discover_bali",
        target: "cohort_4",
        sourceHandle: "a",
        style: { stroke: "#9AA4B2" },
        edgeType
    },
    {
        id: "edge_5",
        source: "cohort_2",
        target: "platform",
        sourceHandle: "",
        style: { stroke: "#9AA4B2" },
        edgeType
    },
];