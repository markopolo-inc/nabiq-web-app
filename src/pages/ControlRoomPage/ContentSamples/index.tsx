import { FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, OptionTabs, Stack } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BlockedByAI,
  HowDoesFeedbackWorkModal,
  Samples,
} from 'src/components/modules/control-room';
import { IContentSampleType, IMarkContentOperation } from 'src/interfaces/controlRoom.interface.ts';
import {
  useGetContentSamplesQuery,
  useMarkApprovedConfigContentMutation,
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
  const [addMarks, { isLoading }] = useMarkConfigContentMutation();
  const [addBlockedMark, { isLoading: isMarkApprovedLoading }] =
    useMarkApprovedConfigContentMutation();

  const { configId } = useParams();

  const { data: contentSamplesData, isLoading: isContentLoading } = useGetContentSamplesQuery({
    configId,
    category,
  });
  const contents = contentSamplesData?.data?.contents || [];

  const [_contents, setContents] = useState(contents);
  const [operations, setOperations] = useState<IMarkContentOperation[] | []>([]);

  const handleMarkConfig = async (contentId: string, status: 'irrelevant' | 'relevant') => {
    const newContents: IContentSampleType[] = _contents.map((content) => {
      if (content.id === contentId) {
        setOperations((prevState) => {
          const updatedState = prevState.filter((item) => item.id !== contentId);
          return [...updatedState, { id: contentId, status }];
        });

        return { ...content, status };
      } else return content;
    });

    setContents(newContents);
  };

  const saveChanges = async () => {
    const response = await addMarks({ configId, payload: operations }).unwrap();
    if (response?.status) {
      navigate(-1);
    }
  };

  const handleApprovedMarkConfig = async (contentId: string, status: 'approved' | 'blocked') => {
    await addBlockedMark({
      configId,
      payload: {
        contentId,
        action: status,
      },
    }).unwrap();
  };

  useEffect(() => {
    if (!!contentSamplesData?.data?.contents) setContents(contents);
  }, [contents]);

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

              <Button size='md' onClick={saveChanges} variant='primary'>
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
                  contents={_contents}
                  handleMarkContent={handleMarkConfig}
                  isLoading={isLoading}
                />
              )}
              {category === 'blocked-content' && (
                <BlockedByAI
                  contents={_contents}
                  handleMarkContent={handleApprovedMarkConfig}
                  isLoading={isMarkApprovedLoading}
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
