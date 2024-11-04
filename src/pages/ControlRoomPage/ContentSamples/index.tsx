import { FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, OptionTabs, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BlockedByAI,
  HowDoesFeedbackWorkModal,
  Samples,
} from 'src/components/modules/control-room';
import {
  useGetContentSamplesQuery,
  useMarkConfigContentMutation,
} from 'src/store/controlRoom/controlRoom.api.ts';

export const appCategories = [
  {
    value: 'content',
    label: 'Samples',
  },
  {
    value: 'blocked-content',
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
  const [category, setCategory] = useState<'content' | 'blocked-content'>('content');
  const [showHowDoesFeedbackModal, setShowHowDoesFeedbackModal] = useState<boolean>(false);

  const { configId } = useParams();
  const [markConfig, { isLoading }] = useMarkConfigContentMutation();

  const { data: contentSamplesData, isLoading: isContentLoading } = useGetContentSamplesQuery({
    configId,
    category,
  });
  const contents = contentSamplesData?.data?.contents || [];

  // const { data } = useGetConfigContentQuery(configId);
  // const configData: IControlRoomConfigCohortContent = data?.data || {};
  // const contents = configData?.contents || [];

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
                <p className='text-gray-900 text-xl font-semibold leading-[30px]'>
                  {contentSamplesData?.data?.configDetail}
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

          {isContentLoading ? (
            <ContentLoader />
          ) : (
            <Stack align='center'>
              {category === 'content' && (
                <Samples
                  contents={contents}
                  handleMarkContent={handleMarkConfig}
                  isLoading={isLoading}
                />
              )}
              {category === 'blocked-content' && (
                <BlockedByAI
                  contents={contents}
                  handleMarkContent={handleMarkConfig}
                  isLoading={isLoading}
                />
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default ContentSamples;
