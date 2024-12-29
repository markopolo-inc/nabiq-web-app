import { FiBell02 } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { Inbox } from '@novu/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';

export const NotificationPopover: FC = () => {
  const navigate = useNavigate();
  const { whiteBase } = useGetColors();
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
          <Button variant='secondary-black' size='sm' className='relative !rounded-full'>
            {unreadCount ? (
              <div className='absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-gray-50 rounded-full'></div>
            ) : null}
            <FiBell02 size={20} color={whiteBase} />
          </Button>
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
