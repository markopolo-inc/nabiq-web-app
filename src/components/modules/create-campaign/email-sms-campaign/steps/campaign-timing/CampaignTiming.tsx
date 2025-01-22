import {
  // Checkbox,
  DatePickerInput,
  Group,
  Select,
  Stack,
  Text,
} from '@nabiq-ui';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
import { ICampaign } from 'src/interfaces/modules/campaign';
import { useCampaignDispatch, useCampaignSelector } from 'src/store/hooks';

export const CampaignTiming = () => {
  const { t } = useTranslation();
  const dispatchCampaign = useCampaignDispatch();
  const campaign = useCampaignSelector();
  const handleChange = (field: keyof ICampaign, value) => {
    dispatchCampaign({
      [field]: value,
    });
  };

  return (
    <Stack gap={32} w={960} className='mx-auto'>
      <Stack gap={20}>
        <Group grow className='justify-between'>
          <DatePickerInput
            dropdownType='modal'
            label={t('create_campaign_form.start_date')}
            allowDeselect
            value={new Date(campaign?.startDate)}
            onChange={(value) => handleChange('startDate', moment(value).format('YYYY-MM-DD'))}
            placeholder={t('create_campaign.select_date')}
            minDate={new Date()}
          />

          <Select
            label={t('create_campaign_form.time')}
            placeholder={t('create_campaign_form.select_time')}
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
          label={t('create_campaign_form.max_steps')}
          value={String(campaign?.stepCount)}
          onChange={(value) => handleChange('stepCount', Number(value))}
          data={['1', '2', '3', '4', '5', '6']}
          placeholder={t('create_campaign_form.select_steps')}
        />

        <Text size='14px' className='text-gray-600'>
          {t('create_campaign_form.step_interval')}{' '}
        </Text>
      </Stack>

      <Stack gap={20}>
        <Select
          label={t('create_campaign_form.min_delay')}
          value={String(campaign?.stepDelay)}
          data={['1', '2', '3', '4', '5', '6']}
          placeholder={t('create_campaign_form.select_steps')}
          onChange={(value) => handleChange('stepDelay', Number(value))}
        />

        <Text size='14px' className='text-gray-600'>
          {t('create_campaign_form.step_interval')}{' '}
        </Text>
      </Stack>

      <DatePickerInput
        dropdownType='modal'
        label={t('create_campaign_form.end_date')}
        allowDeselect
        defaultValue={new Date(campaign?.startDate)}
        value={new Date(campaign?.endDate)}
        onChange={(value) => handleChange('endDate', moment(value).format('YYYY-MM-DD'))}
        placeholder={t('create_campaign_form.select_date')}
        minDate={new Date(campaign?.startDate ? campaign?.startDate : new Date())}
      />
    </Stack>
  );
};
