import {
  // Checkbox,
  DatePickerInput,
  Group,
  Select,
  Stack,
  Text,
} from '@nabiq-ui';
import moment from 'moment-timezone';
import { useDispatch } from 'react-redux';
import { CampaignInterface } from 'src/interfaces/campaign.interface';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

export const CampaignTiming = () => {
  const dispatch = useDispatch();
  const { campaign } = useAppSelector((state) => state);
  const handleChange = (field: keyof CampaignInterface, value) => {
    dispatch(
      setCampaign({
        [field]: value,
      }),
    );
  };

  return (
    <Stack gap={32} w={960} className='mx-auto'>
      <Stack gap={20}>
        <Group grow className='justify-between'>
          <DatePickerInput
            dropdownType='modal'
            label='Campaign starts on'
            allowDeselect
            value={new Date(campaign?.startDate)}
            onChange={(value) => handleChange('startDate', moment(value).format('YYYY-MM-DD'))}
            placeholder='Select date'
          />

          <Select
            label='Time'
            placeholder='Select time'
            data={[
              '00:00',
              '01:00',
              '02:00',
              '03:00',
              '04:00',
              '05:00',
              '06:00',
              '07:00',
              '08:00',
              '09:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
            ]}
            value={campaign?.time}
            onChange={(value) => handleChange('time', value)}
          />
        </Group>

        {/* <Checkbox label="Same time for all steps" /> */}
      </Stack>

      <Stack gap={20}>
        <Select
          label='What is the maximum no. of steps you want for this campaign?'
          value={String(campaign?.stepCount)}
          onChange={(value) => handleChange('stepCount', Number(value))}
          data={['1', '2', '3', '4', '5', '6']}
          placeholder='Select steps'
        />

        <Text size='14px' className='text-gray-600'>
          Interval at which each step will be generated
        </Text>
      </Stack>

      <Stack gap={20}>
        <Select
          label='What should be the minimum delay between each step?'
          value={String(campaign?.stepDelay)}
          data={['1', '2', '3', '4', '5', '6']}
          placeholder='Select steps'
          onChange={(value) => handleChange('stepDelay', Number(value))}
        />

        <Text size='14px' className='text-gray-600'>
          Interval at which each step will be generated
        </Text>
      </Stack>

      <DatePickerInput
        dropdownType='modal'
        label='Campaign ends on'
        allowDeselect
        value={new Date(campaign?.endDate)}
        onChange={(value) => handleChange('endDate', moment(value).format('YYYY-MM-DD'))}
        placeholder='Select date'
      />
    </Stack>
  );
};
