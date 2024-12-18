import { Inbox } from '@novu/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotificationPopover: FC = () => {
  const navigate = useNavigate();

  const appearance = {
    elements: {
      // bellIcon: 'p-4 ',
      notification: 'bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50',
    },
  };

  return (
    <Inbox
      appearance={appearance}
      applicationIdentifier='yeQRCZOPTJrq'
      subscriberId='nabiq-dev' // todo: change this with company id
      routerPush={(path: string) => navigate(path)}
      // localization={{
      //   // @ts-expect-error
      //   'inbox.title': 'Notifications',
      //   'inbox.filters.labels.default': 'Notifications',
      //   'notifications.emptyNotice': 'No notifications',
      // }}
    />
  );
};
