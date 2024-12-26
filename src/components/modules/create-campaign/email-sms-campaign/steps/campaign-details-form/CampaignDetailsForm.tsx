// import { FiCrossX, FiPlatformIcon } from '@nabiq-icons';
import { Select, Stack, Text, TextArea, TextInput } from '@nabiq-ui';
import { useDispatch } from 'react-redux';
import { ICampaign } from 'src/interfaces/modules/campaign';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

export const CampaignDetailsForm = () => {
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
          label='Campaign name'
          placeholder='Enter campaign name'
          value={campaign?.name}
          onChange={(e) => handleChange('name', e.currentTarget.value)}
        />

        <Stack gap={6}>
          <TextArea
            label='Campaign details'
            placeholder='Enter campaign details'
            rows={4}
            value={campaign?.details}
            onChange={(e) => handleChange('details', e.currentTarget.value)}
          />
          <Text size='14px' className='text-gray-600'>
            Provide the text of your campaign
          </Text>
        </Stack>

        <Stack gap={6}>
          <TextInput
            label='Campaign link'
            placeholder='www.mywebsite/offer2'
            value={campaign?.link}
            onChange={(e) => handleChange('link', e.currentTarget.value)}
          />
          <Text size='14px' className='text-gray-600'>
            Destination link where you want to redirect users after clicking your campaign
          </Text>
        </Stack>

        <Stack gap={6}>
          <Select
            label='Content tone'
            placeholder='Pick value'
            defaultValue='Content tone'
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
            label='Content language'
            value={campaign?.language}
            onChange={(value) => handleChange('language', value)}
          />
          <Text size='14px' className='text-gray-600'>
            Contents will be generated in the selected language
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
