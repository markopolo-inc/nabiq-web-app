import { FiHelpCircle } from '@nabiq-icons';
import { Button, ContentLoader, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { ConfigCard, LearnMoreControlRoomModal } from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { useGetConfigsQuery } from 'src/store/controlRoom/controlRoom.api.ts';

const ControlRoom = () => {
  const [showLearnMoreControlRoomModal, setLearnMoreControlRoomModal] = useState<boolean>(false);

  const { data, isLoading } = useGetConfigsQuery({ limit: 10, page: 1 });
  const configs: IControlRoomConfig[] = data?.data?.configs || [];

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

        {isLoading ? (
          <ContentLoader />
        ) : (
          <Stack align='center'>
            <Stack gap={32}>
              {configs.map((item, idx) => (
                <ConfigCard config={item} key={idx} />
              ))}
            </Stack>
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
        )}
      </Stack>
    </>
  );
};

export default ControlRoom;
