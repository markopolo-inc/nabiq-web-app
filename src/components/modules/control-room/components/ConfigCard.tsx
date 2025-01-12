import { FiChevronRight, FiDot } from '@nabiq-icons';
import { Badge, Button, Group, Progress, Stack } from '@nabiq-ui';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { formatTimeAgo } from 'src/utils/date.uitils';

const statusMessages = {
  processing: 'funnel is processing...',
  IN_REVIEW: 'funnel is ready to view!',
  ACTIVE: 'content samples are ready!',
};

export const ConfigCard = ({
  config,
  isPublished = false,
}: {
  config: IControlRoomConfig;
  isPublished?: boolean;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Stack gap={8}>
      <p className='text-gray-600 font-normal text-sm'>{formatTimeAgo(config.queuedAt)}</p>
      <Stack className='rounded-xl border-gray-200 border p-6 w-[552px]' gap={32}>
        <Stack gap={20}>
          <Group justify='space-between'>
            <Badge color='gray'>{config?.name}</Badge>
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
                <span className='font-normal'>{statusMessages[config?.status]}</span>
              </p>

              <p className='text-gray-600 font-normal text-sm'>
                {config?.status === 'processing'
                  ? t('control_room.ai_building')
                  : t('control_room.cohorts_feedback')}
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
                <div className='flex flex-nowrap items-center justify-between'>
                  <div className='w-[75%]'>
                    <Progress value={config?.progress} color='#2972F5' />
                  </div>

                  <span className='text-gray-700 font-sm font-medium'>{config?.timeLeft} left</span>
                </div>
              ) : (
                <Badge color='gray'>
                  Scheduled for {moment(config?.scheduledFor).format('MMM D, YYYY')}
                </Badge>
              )}{' '}
            </>
          )}
        </Stack>

        {!isPublished && (
          <>
            {config?.status !== 'processing' ? (
              <Group>
                <Button
                  size='sm'
                  trailingIcon={<FiChevronRight />}
                  onClick={() => navigate(`/control-room/content-samples/${config?.id}`)}
                >
                  View content sample
                </Button>
                {/*<Badge size='lg' color='primary'>*/}
                {/*  125 identified individuals*/}
                {/*</Badge>*/}
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
