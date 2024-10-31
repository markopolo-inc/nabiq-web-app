import { FiCheck, FiCrossX, FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Badge, Breadcrumbs, Button, Group, OptionTabs, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HowDoesFeedbackWorkModal } from 'src/components/modules/control-room';
import { IControlRoomConfigCohortContent } from 'src/interfaces/controlRoom.interface';
import {
  useGetConfigContentQuery,
  useMarkConfigContentMutation,
} from 'src/store/controlRoom/controlRoom.api';

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

  const { configId } = useParams();
  const [markConfig, { isLoading }] = useMarkConfigContentMutation();

  const { data } = useGetConfigContentQuery(configId);
  const configData: IControlRoomConfigCohortContent = data?.data || {};
  const contents = configData?.contents || [];

  const handleMarkConfig = async (contentId: string, status: 'irrelevant' | 'relevant') => {
    await markConfig({ configId, payload: { id: contentId, status } }).unwrap();
  };

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

          {/*{isLoading ? (*/}
          {/*  <ContentLoader />*/}
          {/*) : (*/}
          {/*  <Stack align='center'>*/}
          {/*    {category === 'queued' && <Queued configs={configs} />}*/}
          {/*    {category === 'published' && <Published configs={configs} />}*/}
          {/*  </Stack>*/}
          {/*)}*/}

          <Stack align='center' gap={32}>
            {contents?.map((content, idx) => (
              <Stack
                key={idx}
                className='rounded-xl border-gray-200 border p-6 max-w-[744px]'
                gap={24}
              >
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
      </Stack>
    </>
  );
};

export default ContentSamples;
