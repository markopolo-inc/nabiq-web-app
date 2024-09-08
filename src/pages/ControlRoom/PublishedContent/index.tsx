import { FiDot, FiThumbsDown, FiThumbsUp } from '@nabiq-icons';
import { Badge, Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';
import GatewayLogo from 'src/components/UI/GatewayLogo';
import { IControlRoomConfigCohortContent } from 'src/interfaces/controlRoom.interface';
import {
  useGetConfigContentPublishedQuery,
  useReactConfigContentMutation,
} from 'src/store/controlRoom/controlRoom.api';

const PublishedContent = () => {
  const { configId } = useParams();
  const navigate = useNavigate();
  const [reactContent, { isLoading }] = useReactConfigContentMutation();

  const { data } = useGetConfigContentPublishedQuery(configId);
  const configData: IControlRoomConfigCohortContent = data?.data || {};
  const contents = configData?.contents || [];

  const handleReactContent = async (contentId, reaction: 'liked' | 'disliked') => {
    await reactContent({ configId, payload: { id: contentId, reaction } }).unwrap();
  };

  return (
    <Stack>
      <Breadcrumbs />

      <Group justify='space-between' className='mt-[20px] mb-16'>
        <Stack gap={4}>
          <p className='text-gray-900 font-semibold text-3xl'>
            '{configData?.configName}' sample contents
          </p>
          <p className='text-gray-600 font-normal'>
            View and give feedback on sample funnel contents.
          </p>
        </Stack>
        <Group>
          <Button onClick={() => navigate('/control-room')}>Go back</Button>
        </Group>
      </Group>

      <Stack align='center' gap={32}>
        {contents?.map((content, idx) => (
          <Stack key={idx} className='rounded-xl border-gray-200 border p-6 max-w-[744px]' gap={24}>
            <Group justify='space-between'>
              <Group>
                <GatewayLogo width={32} app={content.gateway} />
                <p className='text-gray-900 font-semibold text-lg'>{capitalize(content.channel)}</p>
              </Group>
              <Group>
                <Badge color='gray' size='sm'>
                  Step {content.step}
                </Badge>
                <Badge color='success' size='sm'>
                  <FiDot size={8} /> Sent on{' '}
                  {moment(content.sentOn).format('MMM DD, YYYY at h:mm A')}
                </Badge>
              </Group>
            </Group>
            <Stack className='font-medium text-[12px] text-gray-600'>
              <p>Subject: {content?.subject}</p>
              <p>{content?.content}</p>
            </Stack>
            <Group></Group>
            <Group justify='flex-start'>
              <Button
                disabled={isLoading}
                size='sm'
                onClick={() => handleReactContent(content?.id, 'liked')}
              >
                <Group gap={8} wrap='nowrap'>
                  <FiThumbsUp size={18} /> {content?.reaction === 'liked' && 'Liked'}
                </Group>
              </Button>
              <Button
                disabled={isLoading}
                variant='secondary'
                size='sm'
                onClick={() => handleReactContent(content?.id, 'disliked')}
              >
                <Group gap={8} wrap='nowrap'>
                  <FiThumbsDown size={18} />
                  {content?.reaction === 'disliked' && 'Disliked'}
                </Group>
              </Button>
            </Group>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default PublishedContent;
