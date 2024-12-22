import {
  FiApps2AiFill,
  FiBarChartBoxAiFill,
  FiChatSmileAiFill,
  FiEquilizer2Fill,
  FiHomeFill,
  FiMegaphoneFill,
  FiQuestionFill,
  FiSettings3Fill,
} from '@nabiq-icons';

export const sideBarCategories = [
  {
    title: null,
    options: [
      {
        title: 'Home',
        Icon: FiHomeFill,
        to: '/',
        menuRegex: new RegExp(/^\/$/, 'i'),
      },
    ],
  },
  {
    title: 'Engage',
    options: [
      {
        title: 'Campaigns',
        Icon: FiMegaphoneFill,
        to: '/campaigns',
        menuRegex: new RegExp(/^\/campaigns/, 'i'),
      },
      {
        title: 'Control room',
        Icon: FiEquilizer2Fill,
        to: '/control-room',
        menuRegex: new RegExp(/^\/control-room/, 'i'),
      },
      {
        title: 'Monitoring',
        Icon: FiBarChartBoxAiFill,
        to: '/monitoring',
        menuRegex: new RegExp(/^\/monitoring/, 'i'),
      },
    ],
  },
  {
    title: 'Explore',
    options: [
      {
        title: 'Integrations',
        Icon: FiApps2AiFill,
        to: '/integrations',
        menuRegex: new RegExp(/^\/integrations/, 'i'),
      },
      {
        title: 'Acquisition chatbot',
        Icon: FiChatSmileAiFill,
        to: '/acquisition-chatbot',
        menuRegex: new RegExp(/^\/acquisition-chatbot/, 'i'),
      },
    ],
  },
];

export const sidebarOptions = [];

export const lowerPartOptions = [
  {
    title: 'Settings',
    Icon: FiSettings3Fill,
    to: '/settings',
    menuRegex: new RegExp(/^\/settings/, 'i'),
  },
  {
    title: 'Support',
    Icon: FiQuestionFill,
    to: '#',
    menuRegex: new RegExp(/^\/help/, 'i'),
  },
];
