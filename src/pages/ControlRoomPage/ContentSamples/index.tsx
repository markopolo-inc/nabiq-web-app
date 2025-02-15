import { FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, OptionTabs, Stack } from '@nabiq-ui';
import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BlockedByAI,
  HowDoesFeedbackWorkModal,
  Samples,
} from 'src/components/modules/control-room';
import { usePosthogParams } from 'src/hooks/modules/usePosthogParams';
import { IContentSampleType, IMarkContentOperation } from 'src/interfaces/controlRoom.interface.ts';
import {
  useGetContentSamplesQuery,
  useMarkApprovedConfigContentMutation,
  useMarkConfigContentMutation,
} from 'src/store/controlRoom/controlRoom.api.ts';

export const APPCategories = () => {
  const { t } = useTranslation();

  return [
    {
      value: 'content',
      label: t('content_samples.samples'), // Translated string
    },
    {
      value: 'blocked-content',
      label: () => (
        <div className='flex gap-2 items-center'>
          <SlashCircle01 size={20} />
          {t('content_samples.blocked_by_ai')} {/* Translated string */}
        </div>
      ),
    },
  ];
};

const ContentSamples = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [category, setCategory] = useState<'content' | 'blocked-content'>('content');
  const [showHowDoesFeedbackModal, setShowHowDoesFeedbackModal] = useState<boolean>(false);
  const [addMarks, { isLoading }] = useMarkConfigContentMutation();
  const [addBlockedMark, { isLoading: isMarkApprovedLoading }] =
    useMarkApprovedConfigContentMutation();
  const posthogParams = usePosthogParams();

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
          setHasChanged(true);
          const updatedState = prevState.filter(
            (item: IMarkContentOperation) => item.id !== contentId,
          );
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
      setHasChanged(false);
      navigate(-1);
    }
  };

  useEffect(() => {
    if (!hasChanged) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      event.returnValue = true;
    };

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [hasChanged]);

  const handleApprovedMarkConfig = async (
    contentId: string,
    status: 'approved' | 'blocked',
    content?: string,
  ) => {
    await addBlockedMark({
      configId,
      payload: {
        contentId,
        action: status,
      },
    }).unwrap();
    posthog?.capture('Content_Feedback_Provided', {
      user_id: posthogParams?.email,
      content_id: contentId,
      content: content,
      action: status,
      ...posthogParams,
    });
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
                  {t('content_samples.view_feedback_samples')}
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
                {t('content_samples.how_feedback_works')}
              </Button>

              {category === 'content' && (
                <Button size='md' onClick={saveChanges} variant='primary'>
                  {t('create_campaign.done')}
                </Button>
              )}
            </Group>
          </Group>

          <OptionTabs setActive={setCategory} active={category} options={APPCategories()} />

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
