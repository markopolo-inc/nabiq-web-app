import { FiCheckVerified01, FiHelpCircle, FiHourglass03 } from '@nabiq-icons';
import { Button, ContentLoader, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import {
  HowDoesFeedbackWorkModal,
  LearnMoreControlRoomModal,
  Published,
  Queued,
} from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { useGetConfigsQuery } from 'src/store/controlRoom/controlRoom.api';

export const appCategories = [
  {
    value: 'queued',
    label: ({ isSelected }: { isSelected: boolean }) => (
      <div className='flex gap-2 items-center'>
        <FiHourglass03 size={18} color={isSelected ? '#17B26A' : '#9AA4B2'} />
        Queued
      </div>
    ),
  },
  {
    value: 'published',
    label: ({ isSelected }: { isSelected: boolean }) => (
      <div className='flex gap-2 items-center'>
        <FiCheckVerified01 size={18} color={isSelected ? '#17B26A' : '#9AA4B2'} />
        Published
      </div>
    ),
  },
];

const ControlRoom = () => {
  const [category, _setCategory] = useState<'queued' | 'published'>('queued');
  const [showHowDoesFeedbackModal, setShowHowDoesFeedbackModal] = useState<boolean>(false);
  const [showLearnMoreControlRoomModal, setLearnMoreControlRoomModal] = useState<boolean>(false);

  const { data, isLoading } = useGetConfigsQuery({ type: category, limit: 10, page: 1 });

  const configs: IControlRoomConfig[] = data?.data?.configs || [];

  return (
    <>
      <LearnMoreControlRoomModal
        showModal={showLearnMoreControlRoomModal}
        setShowModal={setLearnMoreControlRoomModal}
      />
      <HowDoesFeedbackWorkModal
        showModal={showHowDoesFeedbackModal}
        setShowModal={setShowHowDoesFeedbackModal}
      />
      <Stack gap={64}>
        {/*<Stack gap={64}>*/}
        {/*  <Group justify='space-between'>*/}
        {/*    <Stack gap={4}>*/}
        {/*      <p className='text-gray-900 text-3xl font-semibold'>Control room</p>*/}
        {/*      <p className='text-gray-600 text-base font-normal'>*/}
        {/*        View cohorts and approve content generated for campaigns.*/}
        {/*      </p>*/}
        {/*    </Stack>*/}

        {/*    <Button*/}
        {/*      onClick={() => setLearnMoreControlRoomModal(true)}*/}
        {/*      variant='link'*/}
        {/*      leadingIcon={<FiHelpCircle size={20} />}*/}
        {/*    >*/}
        {/*      What is control room?*/}
        {/*    </Button>*/}
        {/*  </Group>*/}
        {/*  <OptionTabs setActive={setCategory} active={category} options={appCategories} />*/}
        {/*</Stack>*/}
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Control room</p>
            <p className='text-gray-600 text-base font-normal'>
              View cohorts and approve content generated for campaigns.
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
            {category === 'queued' && <Queued configs={configs} />}
            {category === 'published' && <Published configs={configs} />}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default ControlRoom;
