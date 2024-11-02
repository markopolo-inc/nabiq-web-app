import { FiHelpCircle } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { ConfigCard, LearnMoreControlRoomModal } from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';

const _configs: IControlRoomConfig[] = [
  {
    id: '797d7ab1-578a-4f07-a290-f3d829b70882',
    step: 3,
    name: 'Discover Bali ',
    detail: 'premium and trendy summer t -shirts for young men ',
    timeLeft: '30 minutes',
    progress: 10,
    status: 'processing',
    scheduledFor: '2024-10-04T00:00:00.000Z',
    hasFeedBack: false,
    startDate: '',
    queuedAt: `${new Date()}`,
    type: 'Discover Bali',
    identifiedIndividuals: 125,
  },
  {
    id: '797d7ab1-578a-4f07-a290-f3d829b70889',
    step: 3,
    name: 'Unveil the Wonders of Thailand',
    detail: 'premium and trendy summer t -shirts for young men ',
    timeLeft: '120 minutes',
    progress: 100,
    status: 'published',
    scheduledFor: '2024-10-04T00:00:00.000Z',
    hasFeedBack: false,
    startDate: '',
    queuedAt: '2024-11-02T00:00:00.000Z',
    type: 'Unveil the Wonders of Thailand',
    identifiedIndividuals: 274,
  },
  {
    id: '797d7ab1-578a-4f07-a290-f3d829b70889',
    step: 3,
    name: 'Explore Singapore',
    detail: 'premium and trendy summer t -shirts for young men ',
    timeLeft: '120 minutes',
    progress: 100,
    status: 'published',
    scheduledFor: '2024-10-04T00:00:00.000Z',
    hasFeedBack: true,
    startDate: '',
    queuedAt: '2024-11-01T00:00:00.000Z',
    type: 'Explore Singapore',
    identifiedIndividuals: 120,
  },
];

const ControlRoom = () => {
  const [showLearnMoreControlRoomModal, setLearnMoreControlRoomModal] = useState<boolean>(false);

  return (
    <>
      <LearnMoreControlRoomModal
        showModal={showLearnMoreControlRoomModal}
        setShowModal={setLearnMoreControlRoomModal}
      />
      <Stack gap={64}>
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Control room</p>
            <p className='text-gray-600 text-base font-normal'>
              View launched campaigns and give feedback to content samples.
            </p>
          </Stack>
          <Button
            onClick={() => setLearnMoreControlRoomModal(true)}
            variant='link'
            leadingIcon={<FiHelpCircle size={20} />}
          >
            What is control room?
          </Button>
        </Group>

        <Stack align='center'>
          <Stack gap={32}>
            {_configs.map((item, idx) => (
              <ConfigCard config={item} key={idx} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ControlRoom;
