import { FiNotificationMessage } from '@nabiq-icons';
import { GatewayLogo, Group, Select, Text } from '@nabiq-ui';
import { capitalize } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { GatewayType } from 'src/interfaces/brand.interface';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

export const ChannelPushNotification = () => {
  const { t } = useTranslation();
  const { pushIntegrations } = useAppSelector((state) => state.brand);
  const { campaign } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className='w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 '>
      <div className='flex gap-4'>
        <FiNotificationMessage size={24} color='#9AA4B2' />
        <Text size='18px' color='#121926' weight={900} className='leading-7'>
          {t('create_campaign.push_notification')}
        </Text>
      </div>
      <Select
        value={
          (campaign?.channels || []).find((item) => item.channel === 'push-notification')?.platform
        }
        placeholder={t('create_campaign.no_platform_selected')}
        data={Object.keys(pushIntegrations || {})?.map((item) => ({
          label: capitalize(item),
          value: item,
        }))}
        leftSection={
          <GatewayLogo
            width={18}
            app={
              (campaign?.channels || []).find((item) => item.channel === 'push-notification')
                ?.platform as GatewayType
            }
          />
        }
        renderOption={(option) => (
          <Group>
            <GatewayLogo width={18} app={option.option.value as GatewayType} />
            <p className='text-grey-900 font-medium'>{option.option.label}</p>
          </Group>
        )}
        onChange={(value) => {
          const channels =
            campaign?.channels?.filter((item) => item.channel !== 'push-notification') || [];
          channels.push({
            channel: 'push-notification',
            platform: value as GatewayType,
          });
          dispatch(
            setCampaign({
              channels,
            }),
          );
        }}
      />
    </div>
  );
};
