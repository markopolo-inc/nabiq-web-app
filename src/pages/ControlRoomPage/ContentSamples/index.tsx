import { FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, OptionTabs, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HowDoesFeedbackWorkModal, Published, Queued } from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { useGetConfigsQuery } from 'src/store/controlRoom/controlRoom.api';

export const appCategories = [
  {
    value: 'samples',
    label: 'Samples',
    // label: ({ isSelected }: { isSelected: boolean }) => (
    //   <div className='flex gap-2 items-center'>
    //     <FiHourglass03 size={18} color={isSelected ? '#17B26A' : '#9AA4B2'} />
    //     Queued
    //   </div>
    // ),
  },
  {
    value: 'blocked_by_ai',
    label: () => (
      <div className='flex gap-2 items-center'>
        <SlashCircle01 size={20} />
        Blocked by AI
      </div>
    ),
  },
];

const ContentSamples = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<'queued' | 'published'>('queued');
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
            <Group gap={12} align='flex-start'>
              <Klaviyo size={24} />

              <Stack gap={4}>
                <p className='text-gray-900 text-3xl font-semibold'>
                  ‘Unveil the Wonders of Thailand’ sample contents
                </p>
                <p className='text-gray-600 text-base font-normal'>
                  View and give feedback on sample funnel contents.
                </p>
              </Stack>
            </Group>

            <Group justify='space-between' gap={12}>
              <Button
                onClick={() => setShowHowDoesFeedbackModal(true)}
                variant='link'
                leadingIcon={<FiHelpCircle size={20} />}
                className='!px-4'
              >
                How does feedback work?
              </Button>

              <Button onClick={() => navigate(-1)} variant='primary'>
                Done
              </Button>
            </Group>
          </Group>

          <OptionTabs setActive={setCategory} active={category} options={appCategories} />

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
