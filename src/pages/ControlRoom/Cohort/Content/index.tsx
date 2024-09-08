import { FiCheck, FiCrossX, FiHelpCircle } from '@nabiq-icons';
import { Badge, Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { useNavigate, useParams } from 'react-router-dom';
import { IControlRoomConfigCohortContent } from 'src/interfaces/controlRoom.interface';
import {
  useGetConfigContentQuery,
  useMarkConfigMutation,
} from 'src/store/controlRoom/controlRoom.api';

const Content = () => {
  const { configId } = useParams();
  const navigate = useNavigate();
  const [markConfig, { isLoading }] = useMarkConfigMutation();

  const { data } = useGetConfigContentQuery(configId);
  // console.log(data);
  const configData: IControlRoomConfigCohortContent = data?.data || {};
  const contents = configData?.contents || [];

  const handleMarkConfig = async (contentId: string, status: 'irrelevant' | 'relevant') => {
    await markConfig({ configId, payload: { id: contentId, status } }).unwrap();
  };

  return (
    <Stack gap={20}>
      <Group justify='space-between'>
        <Breadcrumbs />
      </Group>

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
          <Button size='lg' variant='link' leadingIcon={<FiHelpCircle size={16} />}>
            How does feedback work
          </Button>
          <Button onClick={() => navigate('/control-room')}>Done</Button>
        </Group>
      </Group>

      <Stack align='center' gap={32}>
        {contents?.map((content, idx) => (
          <Stack key={idx} className='rounded-xl border-gray-200 border p-6 max-w-[744px]' gap={24}>
            <Stack className='font-medium text-[12px] text-gray-600'>
              <p>Subject: {content?.subject}</p>
              <p>{content?.content}</p>
            </Stack>
            {!Boolean(content?.status) || content?.status === 'not_marked' ? (
              <Group justify='flex-end'>
                <Button
                  disabled={isLoading}
                  variant='secondary'
                  size='sm'
                  trailingIcon={<FiCrossX color='#4B5565' size={11} />}
                  onClick={() => handleMarkConfig(content?.id, 'irrelevant')}
                >
                  Irrelavant
                </Button>
                <Button
                  disabled={isLoading}
                  variant='secondary-black'
                  size='sm'
                  trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
                  onClick={() => handleMarkConfig(content?.id, 'relevant')}
                >
                  I find this relevant
                </Button>
              </Group>
            ) : (
              <Group justify='flex-end'>
                {content?.status === 'relevant' && (
                  <Badge color='success' size='lg'>
                    <FiCheck size={16} strokeWidth={1} />
                    Relevant
                  </Badge>
                )}

                {content?.status === 'irrelevant' && (
                  <Badge color='warning' size='lg'>
                    <FiCrossX size={10} />
                    Irrelevant
                  </Badge>
                )}
              </Group>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Content;
