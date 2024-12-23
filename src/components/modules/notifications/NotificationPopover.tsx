import { useGetColors } from '@nabiq-ui';
import { Inbox } from '@novu/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiNotificationIcon } from 'src/components/Icons';
import { useAppSelector } from 'src/store/hooks';

export const NotificationPopover: FC = () => {
  const navigate = useNavigate();
  const { gray500 } = useGetColors();
  const { resourceId: companyId } = useAppSelector((state) => state.company);

  const appearance = {
    elements: {
      notification: 'bg-white mx-2 my-1 rounded-lg hover:bg-gray-100',
    },
  };

  return (
    <div className='mt-1'>
      <Inbox
        renderBell={(unreadCount) => (
          <div className='relative p-1 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-300 text-gray-500'>
            {unreadCount ? (
              <div className='absolute top-1 right-1 w-2 h-2 bg-red-600 border border-gray-50 rounded-full'></div>
            ) : null}
            <FiNotificationIcon size={20} color={gray500} />
          </div>
        )}
        applicationIdentifier={import.meta.env.VITE_NOTIFICATION_APP_ID}
        subscriberId={companyId}
        routerPush={(path: string) => navigate(path)}
        appearance={appearance}
        localization={{
          // @ts-expect-error: This is necessary because the type definition is not compatible
          'inbox.title': 'Notifications',
          'inbox.filters.labels.default': 'Notifications',
          'notifications.emptyNotice': 'No notifications',
        }}
      />
    </div>
  );
};
