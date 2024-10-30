import { FiCheckVerified01, FiHelpCircle, FiHourglass03 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { HowDoesFeedbackWorkModal, Published, Queued } from 'src/components/modules/control-room';
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

const ContentSamples = () => {
  const [category, _setCategory] = useState<'queued' | 'published'>('queued');
  const [showHowDoesFeedbackModal, setShowHowDoesFeedbackModal] = useState<boolean>(false);

  const { data, isLoading } = useGetConfigsQuery({ type: category, limit: 10, page: 1 });

  const configs: IControlRoomConfig[] = data?.data?.configs || [];

  return (
    <>
      <HowDoesFeedbackWorkModal
        showModal={showHowDoesFeedbackModal}
        setShowModal={setShowHowDoesFeedbackModal}
      />

      <Stack gap={20}>
        <Breadcrumbs />

        <Stack gap={64}>
          <Group justify='space-between'>
            <Stack gap={4}>
              <p className='text-gray-900 text-3xl font-semibold'>
                ‘Unveil the Wonders of Thailand’ sample contents
              </p>
              <p className='text-gray-600 text-base font-normal'>
                View and give feedback on sample funnel contents.
              </p>
            </Stack>

            <Button
              onClick={() => setShowHowDoesFeedbackModal(true)}
              variant='link'
              leadingIcon={<FiHelpCircle size={20} />}
            >
              How does feedback work?
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
      </Stack>
    </>
  );
};

export default ContentSamples;
