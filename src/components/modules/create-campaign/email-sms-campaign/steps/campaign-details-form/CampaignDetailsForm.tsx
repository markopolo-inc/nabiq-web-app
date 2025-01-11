// import { FiCrossX, FiPlatformIcon } from '@nabiq-icons';
import { Select, Stack, Text, TextArea, TextInput } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ICampaign } from 'src/interfaces/modules/campaign';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

export const CampaignDetailsForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { campaign } = useAppSelector((state) => state);

  const handleChange = (field: keyof ICampaign, value) => {
    dispatch(
      setCampaign({
        [field]: value,
      }),
    );
  };

  return (
    <>
      <Stack gap={32} w={960} className='mx-auto'>
        <TextInput
          label={t('campaigns.name')}
          placeholder='Enter campaign name'
          value={campaign?.name}
          onChange={(e) => handleChange('name', e.currentTarget.value)}
        />

        <Stack gap={6}>
          <TextArea
            label={t('create_campaign_form.details_title')}
            placeholder='Enter campaign details'
            rows={4}
            value={campaign?.details}
            onChange={(e) => handleChange('details', e.currentTarget.value)}
          />
          <Text size='14px' className='text-gray-600'>
            {t('create_campaign_form.text_prompt')}{' '}
          </Text>
        </Stack>

        <Stack gap={6}>
          <TextInput
            label={t('create_campaign_form.campaign_link')}
            placeholder='www.mywebsite/offer2'
            value={campaign?.link}
            onChange={(e) => handleChange('link', e.currentTarget.value)}
          />
          <Text size='14px' className='text-gray-600'>
            {t('create_campaign_form.link_desc')}{' '}
          </Text>
        </Stack>

        <Stack gap={6}>
          <Select
            label={t('create_campaign_form.content_tone')}
            placeholder='Pick value'
            defaultValue={t('create_campaign_form.content_tone')}
            value={campaign?.tone}
            onChange={(value) => handleChange('tone', value)}
            data={[
              { label: 'Formal', value: 'formal' },
              { label: 'Informal', value: 'informal' },
            ]}
          />

          <Text size='14px' className='text-gray-600'>
            The tone of the content that will be utilized for generating different variations of
            your campaign
          </Text>
        </Stack>

        <Stack gap={6}>
          <Select
            data={[
              { label: 'English', value: 'en' },
              { label: 'Arabic', value: 'ar' },
            ]}
            label={t('create_campaign_form.content_language')}
            value={campaign?.language}
            onChange={(value) => handleChange('language', value)}
          />
          <Text size='14px' className='text-gray-600'>
            {t('create_campaign_form.language_desc')}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
