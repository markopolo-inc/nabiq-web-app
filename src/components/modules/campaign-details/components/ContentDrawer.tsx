import { FiDot } from '@nabiq-icons';
import { Badge, Drawer, DrawerBody, DrawerHeader, GatewayLogo, Group } from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment';

const ContentDrawer = ({
  opened,
  onClose,
  selectedContent,
}: {
  opened: boolean;
  onClose: () => void;
  selectedContent: any;
}) => {
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
          <Badge color='gray'>Step {selectedContent?.step}</Badge>
        </Group>

        <p className='text-gray-600 text-sm font-medium'>
          Sent on {moment(selectedContent?.sentOn).format('MMM D, YYYY')} at{' '}
          {moment(selectedContent?.sentOn).format('h:mm a')}
        </p>
      </DrawerHeader>
      <DrawerBody>
        <div className='border border-gray-200 rounded-lg p-8'>
          <Group justify='space-between'>
            <Group>
              <GatewayLogo app={selectedContent?.platform} width={32} />
              <p className='text-gray-900 text-lg font-semibold'>
                {capitalize(selectedContent?.channel || 'Email')}
              </p>
            </Group>
            <Badge color='success'>
              <FiDot size={8} />
              Sent on {moment(selectedContent?.sentOn).format('MMM D, YYYY')} at{' '}
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
