import { FiChevronRight, FiDot } from '@nabiq-icons';
import { Badge, Button, Group, Progress, Stack } from '@nabiq-ui';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import { ControlRoomConfigInterface } from 'src/interfaces/controlRoom.interface';
import { formatTimeAgo } from 'src/utils/date.uitils';

const ConfigCard = ({
  config,
  isPublished = false,
}: {
  config: ControlRoomConfigInterface;
  isPublished?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <Stack gap={8}>
      <p className='text-gray-600 font-normal text-sm'>{formatTimeAgo(config.queuedAt)}</p>
      <Stack className='rounded-xl border-gray-200 border p-6 w-[552px]' gap={32}>
        <Stack gap={20}>
          <Group justify='space-between'>
            <Badge color='gray'>Step {config?.step}</Badge>
            {config?.hasFeedBack && (
              <Badge color='success'>
                <FiDot size={8} color='#17B26A' />
                Feedback given
              </Badge>
            )}
          </Group>

          {!isPublished && (
            <Stack gap={4}>
              <p className='text-gray-900 font-semibold text-lg'>
                '{config?.name}'{' '}
                <span className='font-normal'>
                  {config?.status === 'processing'
                    ? 'funnel is processing...'
                    : 'funnel is ready to view!'}
                </span>
              </p>

              <p className='text-gray-600 font-normal text-sm'>
                {config?.status === 'processing'
                  ? 'Our AI is building you the perfect cohorts and contents within.'
                  : 'View cohorts and give feedback on sample funnel contents.'}
              </p>
            </Stack>
          )}

          {isPublished && (
            <Stack gap={4}>
              <p className='text-gray-900 font-semibold text-lg'>
                '{config?.name}' <span className='font-normal'>email has been published</span>
              </p>

              <p className='text-gray-600 font-normal text-sm'>
                Content has been delivered to your cohorts.
              </p>
            </Stack>
          )}

          {!isPublished && (
            <>
              {config?.status === 'processing' ? (
                <div className='flex flex-nowrap configs-center justify-between'>
                  <div className='w-[75%]'>
                    <Progress value={config?.progress} color='#2972F5' />
                  </div>

                  <span className='text-gray-700 font-sm font-medium'>{config?.timeLeft} left</span>
                </div>
              ) : (
                <Badge color='gray'>
                  Scheduled for {moment(config?.startDate).format('MMM D, YYYY')}
                </Badge>
              )}{' '}
            </>
          )}
        </Stack>

        {isPublished && (
          <Group>
            <Button
              trailingIcon={<FiChevronRight />}
              onClick={() => navigate(`/control-room/published/${config?.id}`)}
            >
              View published content
            </Button>
          </Group>
        )}

        {!isPublished && (
          <>
            {config?.status == 'processing' ? (
              <Group>
                <Button
                  trailingIcon={<FiChevronRight />}
                  onClick={() => navigate(`/control-room/cohort/content/${config?.id}`)}
                >
                  View content sample
                </Button>
                <Button
                  variant='secondary-black'
                  onClick={() => navigate(`/control-room/cohort/${config?.id}`)}
                >
                  View cohort
                </Button>
              </Group>
            ) : (
              <></>
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ConfigCard;
