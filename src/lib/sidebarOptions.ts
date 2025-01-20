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
        title: 'navigation.nav_home',
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
        title: 'navigation.nav_campaigns',
        Icon: FiMegaphoneFill,
        to: '/campaigns',
        menuRegex: new RegExp(/^\/campaigns/, 'i'),
      },
      {
        title: 'navigation.nav_control_room',
        Icon: FiEquilizer2Fill,
        to: '/control-room',
        menuRegex: new RegExp(/^\/control-room/, 'i'),
      },
      {
        title: 'navigation.nav_monitoring',
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
        title: 'navigation.nav_integrations',
        Icon: FiApps2AiFill,
        to: '/integrations',
        menuRegex: new RegExp(/^\/integrations/, 'i'),
      },
      {
        title: 'navigation.nav_chatbot',
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
    title: 'navigation.nav_settings',
    Icon: FiSettings3Fill,
    to: '/settings',
    menuRegex: new RegExp(/^\/settings/, 'i'),
  },
  {
    title: 'navigation.nav_support',
    Icon: FiQuestionFill,
    to: '#',
    menuRegex: new RegExp(/^\/help/, 'i'),
  },
];
