import { show } from '@intercom/messenger-js-sdk';
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

export const useNavigationItems = () => {
  const sideBarCategories = [
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
      title: 'home_page.engage',
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
      title: 'home_page.explore',
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

  const lowerPartOptions = [
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
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        show();
      },
    },
  ];

  return {
    sideBarCategories,
    lowerPartOptions,
  };
};
