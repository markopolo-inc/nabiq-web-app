const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

const dragHandle = '.custom-drag-handle';
export const initialNodes = [
  {
    id: '1',
    type: 'DiscoverBali',
    position,
    data: {},
    dragHandle,
  },
  {
    id: '2',
    type: 'Cohort1',
    position,
    data: {
      platformId: '6',
    },
    dragHandle,
  },
  {
    id: '3',
    type: 'Cohort2',
    position,
    data: {},
    dragHandle,
  },
  {
    id: '4',
    type: 'Cohort3',
    position,
    data: {},
    dragHandle,
  },
  {
    id: '5',
    type: 'Cohort4',
    position,
    data: {
      platformId: '7',
    },
    dragHandle,
  },
  {
    id: '6',
    type: 'Platform',
    position,
    data: {},
    dragHandle,
    hidden: true,
  },
  {
    id: '7',
    type: 'Platform2',
    position,
    data: {},
    dragHandle,
    hidden: true,
  },
];

const edgeStyles = { stroke: '#9AA4B2' };
export const initialEdges = [
  {
    id: 'e1_2',
    source: '1',
    target: '2',
    style: edgeStyles,
    edgeType,
  },
  {
    id: 'e1_3',
    source: '1',
    target: '3',
    targetPosition: ['2', '3', '4', '5'],
    style: edgeStyles,
    edgeType,
  },
  {
    id: 'e1_4',
    source: '1',
    target: '4',
    style: edgeStyles,
    edgeType,
  },
  {
    id: 'e1_5',
    source: '1',
    target: '5',
    style: edgeStyles,
    edgeType,
  },
  {
    id: 'e1_6',
    source: '2',
    target: '6',
    style: edgeStyles,
    sourceHandle: '2',
    edgeType,
    hidden: true,
  },
  {
    id: 'e1_7',
    source: '5',
    target: '7',
    sourceHandle: '5',
    style: edgeStyles,
    edgeType,
    hidden: true,
  },
];
