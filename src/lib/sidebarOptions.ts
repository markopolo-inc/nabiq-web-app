import {
  // FiDataFlow02,
  FiAnnouncement01,
  FiHomeLine,
  FiPuzzlePiece02,
  FiSettings01, // FiSliders01,
  // FiLineChartUp05,
} from '@nabiq-icons';

// console.log("hlleo");

export const sidebarOptions = [
  {
    title: 'Home',
    Icon: FiHomeLine,
    to: '/',
    menuRegex: new RegExp(/^\/$/, 'i'),
  },
  // {
  //   title: "Co-Pilot",
  //   Icon: FiDataFlow02,
  //   to: "/co-pilot",
  //   menuRegex: new RegExp(/^\/co-pilot/, "i"),
  // },
  {
    title: 'Campaigns',
    Icon: FiAnnouncement01,
    to: '/campaigns',
    menuRegex: new RegExp(/^\/campaigns/, 'i'),
  },
  // {
  //   title: "Monitoring",
  //   Icon: FiLineChartUp05,
  //   to: "/monitoring",
  //   menuRegex: new RegExp(/^\/monitoring/, "i"),
  // },
  {
    title: 'Integrations',
    Icon: FiPuzzlePiece02,
    to: '/integrations',
    menuRegex: new RegExp(/^\/integrations/, 'i'),
  },
  // {
  //   title: "Control room",
  //   Icon: FiSliders01,
  //   to: "/control-room",
  //   menuRegex: new RegExp(/^\/control-room/, "i"),
  // },
];

export const lowerPartOptions = [
  {
    title: 'Settings',
    Icon: FiSettings01,
    to: '/settings',
    menuRegex: new RegExp(/^\/settings/, 'i'),
  },
];
