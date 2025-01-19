import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo, Modal, Select, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetZohoRegionsQuery,
  useSaveZohoRegionMutation,
} from 'src/store/integrations/data-sources.api';
import { getOAuthUrl } from 'src/utils/auth';

const ModalBody = () => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data, isLoading } = useGetZohoRegionsQuery();
  const [region, setRegion] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [saveZohoRegion, { isLoading: isSaving }] = useSaveZohoRegionMutation();

  const regions =
    (data?.data || []).map((_region) => ({
      label: `${_region.name} (${_region.region})`,
      value: _region.region,
    })) || [];

  const handleSaveZohoRegion = async (_region: string) => {
    const res = await saveZohoRegion({ brandId, region }).unwrap();
    if (res.success) {
      setIsRedirecting(true);
      window.location.href = await getOAuthUrl('/zoho/oauth', {
        brandId,
        redirectUri: window.location.href,
      });
    }
  };

  return (
    <Stack className='p-8'>
      <Stack gap={20}>
        <GatewayLogo app='zoho' width={32} />
        <Stack gap={4}>
          <p className='text-2xl font-semibold text-gray-900'>{t('integrations.integrate_zoho')}</p>
          <p className='text-gray-600'>{t('integrations.choose_zoho_region')}</p>
        </Stack>
      </Stack>

      <Select
        placeholder={t('integrations.select_region')}
        disabled={isLoading}
        data={regions}
        onChange={(value) => setRegion(value)}
      />
      <Stack>
        <Button
          fullWidth
          disabled={isLoading || !region || isRedirecting}
          loading={isSaving}
          onClick={() => handleSaveZohoRegion(region)}
        >
          {t('home_page.confirm')}
        </Button>
        <Button variant='secondary' fullWidth disabled={isLoading || isSaving || isRedirecting}>
          {t('settings.cancel')}
        </Button>
      </Stack>
    </Stack>
  );
};

export const ZohoRegionModal = () => {
  const { t } = useTranslation();
  return (
    <Modal withNoHeader withCustomClose size='sm' body={() => <ModalBody />}>
      {({ setOpened }) => (
        <Button
          className='!w-36'
          leadingIcon={<FiZap fill='white' size={22} />}
          onClick={() => {
            setOpened(true);
          }}
        >
          {t('integrations.integrate')}
        </Button>
      )}
    </Modal>
  );
};
