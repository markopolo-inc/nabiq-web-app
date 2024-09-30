import { FiCrossX, FiFileUpload, FiPlatformIcon } from '@nabiq-icons';
import { Group, Select, Stack, Text, TextArea, TextInput } from '@nabiq-ui';
import CampaignAdsModal from 'components/Features/Campaigns/CampaignAdsModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CampaignInterface } from 'src/interfaces/campaign.interface';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

const CampaignDetailsForm = () => {
  const dispatch = useDispatch();
  const { campaign } = useAppSelector((state) => state);
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  const handleChange = (field: keyof CampaignInterface, value) => {
    dispatch(
      setCampaign({
        [field]: value,
      }),
    );
  };

  const handleRemoveAd = ({ value }) => {
    const selectedAdsList = campaign?.content?.filter((item) => item?.id !== value);
    dispatch(
      setCampaign({
        content: selectedAdsList,
      }),
    );
  };

  return (
    <>
      <CampaignAdsModal showModal={showGoalModal} setShowModal={setShowGoalModal} />

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
          <Text size='14px' className='text-gray-700' weight={500}>
            Import ads
          </Text>

          <Stack
            gap={12}
            align='center'
            className='py-4 px-6 rounded-lg border border-[#EAECF0] cursor-pointer'
            onClick={() => setShowGoalModal(true)}
          >
            <div className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 shadow-custom-xs p-2.5'>
              <FiFileUpload color='#364152' size={20} strokeWidth={1.5} />
            </div>

            <Stack gap={4} align='center'>
              <Text size='14px' className='text-primary-600' weight={600}>
                Import ads from your connected platforms
              </Text>
              <Text size='12px' className='text-gray-600'>
                Ad accounts/Apps need to be connected
              </Text>
            </Stack>
          </Stack>
        </Stack>

        {campaign?.content?.length ? (
          <Stack gap={12}>
            {campaign?.content?.map((item) => (
              <Group
                key={item?.id}
                align='start'
                justify='space-between'
                className='p-4 rounded-lg border border-[#EAECF0]'
              >
                <Group gap={8} align='start'>
                  <FiPlatformIcon platform={item?.platform} size={20} />
                  <Stack gap={2}>
                    <Text size='14px' className='text-gray-700' weight={500}>
                      {item?.title}
                    </Text>
                    <Text size='14px' className='text-gray-600'>
                      {item?.type}
                    </Text>
                  </Stack>
                </Group>

                <FiCrossX
                  size={10}
                  color='#9AA4B2'
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveAd({ value: item?.id })}
                />
              </Group>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};

export default CampaignDetailsForm;
