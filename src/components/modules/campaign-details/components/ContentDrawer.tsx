import { FiDot } from '@nabiq-icons';
import { Badge, Drawer, DrawerBody, DrawerHeader, GatewayLogo, Group } from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const ContentDrawer = ({
  opened,
  onClose,
  selectedContent,
}: {
  opened: boolean;
  onClose: () => void;
  selectedContent: any;
}) => {
  const { t } = useTranslation();
  return (
    <Drawer
      opened={opened}
      onClose={() => {
        onClose();
      }}
      position='right'
      size='lg'
    >
      <DrawerHeader>
        <Group>
          <p className='text-gray-900 text-lg font-semibold'>{selectedContent?.email}</p>
          <Badge color='gray'>
            {t('campaign_details.step')} {selectedContent?.step}
          </Badge>
        </Group>

        <p className='text-gray-600 text-sm font-medium'>
          {t('campaign_details.sent_on', {
            time: moment(selectedContent?.sentOn).format('MMM D, YYYY'),
          })}
          {moment(selectedContent?.sentOn).format('h:mm a')}
        </p>
      </DrawerHeader>
      <DrawerBody>
        <div className='border border-gray-200 rounded-lg p-8'>
          <Group justify='space-between'>
            <Group>
              <GatewayLogo app={selectedContent?.platform} width={32} />
              <p className='text-gray-900 text-lg font-semibold'>
                {capitalize(selectedContent?.channel || t('home_page.channel_email'))}
              </p>
            </Group>
            <Badge color='success'>
              <FiDot size={8} />
              {t('campaign_details.sent_on', {
                time: moment(selectedContent?.sentOn).format('MMM D, YYYY'),
              })}
              {moment(selectedContent?.sentOn).format('h:mm a')}
            </Badge>
          </Group>
          <pre className='text-gray-600 text-xs font-medium mt-8 leading-6 whitespace-pre-wrap'>
            {selectedContent?.content}
          </pre>
        </div>
      </DrawerBody>
    </Drawer>
  );
};

export default ContentDrawer;
