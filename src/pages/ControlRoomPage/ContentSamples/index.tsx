import { FiHelpCircle, Klaviyo, SlashCircle01 } from '@nabiq-icons';
import { Breadcrumbs, Button, ContentLoader, Group, OptionTabs, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BlockedByAI,
  HowDoesFeedbackWorkModal,
  Samples,
} from 'src/components/modules/control-room';
import { useMarkConfigContentMutation } from 'src/store/controlRoom/controlRoom.api.ts';

export const appCategories = [
  {
    value: 'samples',
    label: 'Samples',
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

const _contents = [
  {
    id: 'abc1',
    subject: '🌴 50% OFF Bali Getaway – Limited Time Only! 🌴',
    content:
      'Hey there,\n\n' +
      "Ever dreamed of sipping a tropical drink on a stunning beach in Bali? 🌺 Now's your chance! We're excited to offer you an incredible 50% discount on a trip to Bali, Indonesia. But hurry, this exclusive offer is only available until July 31, 2024!\n" +
      "Imagine exploring lush rice terraces, vibrant markets, and breathtaking temples, all while soaking up the sun on Bali's pristine beaches. 🏖️ Whether you're seeking adventure, relaxation, or a bit of both, Bali has something for everyone.\n" +
      '**Why you’ll love this Bali getaway:**\n' +
      '- **50% OFF your trip** – because amazing vacations don’t have to break the bank!\n' +
      '- Exciting excursions and activities to make your trip unforgettable.\n' +
      ' \n' +
      '👉 Claim Your 50% Discount Now! \n' +
      "Don't wait – this deal ends on July 31, 2024, and spots are filling up fast! Treat yourself to the adventure of a lifetime and create memories that will last forever. See you in Bali!",
    status: 'not_marked',
  },
  {
    id: 'abc2',
    subject: '🌴 Limited Time Only – Enjoy 50% OFF Your Dream Bali Getaway! 🌴',
    content:
      'Hey there,\n' +
      "Have you ever dreamt of lounging with a tropical drink on a stunning Bali beach? 🌺 Now’s your chance! We're thrilled to offer an exclusive 50% discount on a trip to Bali, Indonesia, but you have to act fast – this special offer is only available until July 31, 2024!\n" +
      'Picture yourself wandering through lush rice terraces, vibrant markets, and breathtaking temples, all while basking in the sun on Bali’s pristine beaches. 🏖️ Whether you crave adventure, relaxation, or a mix of both, Bali has something perfect for you.\n' +
      "**Why you'll love this Bali getaway:**\n" +
      '- **50% OFF your trip** – because unforgettable vacations don’t have to be expensive!\n' +
      '- Exciting excursions and activities that will make your trip truly memorable.\n' +
      '👉 Claim Your 50% Discount Now!\n' +
      "Don't delay – this deal ends on July 31, 2024, and spots are filling up quickly! Treat yourself to the adventure of a lifetime and create memories that will last forever. See you in Bali!",
    status: 'relevant',
  },
  {
    id: 'abc3',
    subject: '🌴 50% OFF Bali Getaway – Limited Time! 🌴',
    content:
      'Hey there,\n' +
      'Dreaming of a Bali beach escape? 🌺 Now’s your chance! Get 50% off on a Bali trip, but hurry – this offer ends July 31, 2024!\n' +
      'Explore lush rice terraces, vibrant markets, and stunning temples. 🏖️ Whether you want adventure or relaxation, Bali has it all.\n' +
      "**Why you'll love this deal:**\n" +
      '- **50% OFF** – affordable luxury!\n' +
      '- Exciting excursions and activities.\n' +
      '👉 Claim Your 50% Discount Now!\n',
    status: 'not_marked',
  },
];

const ContentSamples = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<'samples' | 'blocked_by_ai'>('samples');
  const [showHowDoesFeedbackModal, setShowHowDoesFeedbackModal] = useState<boolean>(false);

  const { configId } = useParams();
  const [markConfig, { isLoading }] = useMarkConfigContentMutation();

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
              {category === 'samples' && (
                <Samples
                  contents={_contents}
                  handleMarkContent={handleMarkConfig}
                  isLoading={isLoading}
                />
              )}
              {category === 'blocked_by_ai' && (
                <BlockedByAI
                  contents={_contents}
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
