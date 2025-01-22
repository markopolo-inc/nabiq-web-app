import { ComboboxItem } from '@mantine/core';
import { Button, GatewayLogo, Loader, Modal, Select } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetFbBusinessAccountsQuery,
  useLazyGetWABusinessAccountsQuery,
  useSaveWANumberMutation,
} from 'src/store/integrations/social-integrations.api';

interface NumberOption extends ComboboxItem {
  name: string;
  whatsAppBusinessAccountId: string;
}

const ModalBody = ({ setOpened }: { setOpened: (value: boolean) => void }) => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data } = useGetFbBusinessAccountsQuery(brandId);
  const [getWABusinessAccounts, { isLoading, data: waData }] = useLazyGetWABusinessAccountsQuery();
  const [saveWANumber, { isLoading: isSaving }] = useSaveWANumberMutation();
  const [accountId, setAccountId] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [whatsAppBusinessAccountId, setWhatsAppBusinessAccountId] = useState('');

  const waNumbers = useMemo(() => {
    if (!waData) return [];
    const numbers = [];
    if (waData?.data?.length > 0) {
      (waData?.data || [])?.forEach((account) => {
        const phoneNumbers = account?.phone_numbers?.data || [];
        numbers.push(
          ...phoneNumbers?.map((num) => ({
            ...num,
            whatsAppBusinessAccountId: account?.id,
          })),
        );
      });
    }
    return numbers?.map((num) => ({
      label: `${num?.verified_name} (${num?.id})`,
      value: num?.id,
      name: num?.verified_name,
      whatsAppBusinessAccountId: num?.whatsAppBusinessAccountId,
    }));
  }, [waData]);

  useEffect(() => {
    if (accountId) {
      getWABusinessAccounts({ brandId, accountId });
    }
  }, [accountId]);

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const businessAccounts = (data?.data?.data || [])?.map((account) => ({
    label: `${account.name} (${account.id})`,
    value: account.id,
  }));

  const handleSave = async () => {
    const res = await saveWANumber({ brandId, number, name, whatsAppBusinessAccountId }).unwrap();
    if (res?.success) {
      setOpened(false);
    }
  };

  return (
    <div className='p-8 space-y-4'>
      <GatewayLogo app='whatsapp' width={32} />
      <div className='text-xl font-semibold text-gray-900'>
        {t('create_campaign.select_business_account')}
      </div>
      <Select
        data={businessAccounts}
        label={t('create_campaign.select_facebook_account')}
        placeholder={t('create_campaign.select_account')}
        onChange={setAccountId}
      />
      <Select
        leftSection={isLoading ? <Loader size='xs' /> : null}
        disabled={isLoading || !accountId}
        data={waNumbers}
        label={t('create_campaign.select_whatsapp_number')}
        placeholder={t('create_campaign.whatsapp_number')}
        nothingFoundMessage={
          isLoading ? t('create_campaign.loading') : t('integrations.no_whatsapp_numbers')
        }
        onChange={(value, option: NumberOption) => {
          setNumber(value);
          setName(option?.name);
          setWhatsAppBusinessAccountId(option?.whatsAppBusinessAccountId);
        }}
      />
      <div className='mt-4'>
        <Button
          className='!w-40'
          disabled={!number || !name || !whatsAppBusinessAccountId || isSaving}
          fullWidth
          loading={isSaving}
          onClick={handleSave}
        >
          {t('create_campaign.done')}
        </Button>
      </div>
    </div>
  );
};

export const WhatsAppConnectModal = ({
  showModal,
  setIsShowModal,
  showTrigger = true,
}: {
  showModal: boolean;
  setIsShowModal: (value: boolean) => void;
  showTrigger?: boolean;
}) => {
  const { t } = useTranslation();
  const { socialIntegrations } = useAppSelector((state) => state.brand);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const url = new URL(window.location.href);
    if (searchParams.has('success') && socialIntegrations?.socialTokens?.facebook) {
      setIsShowModal(true);
      url.searchParams.delete('success');
      navigate({ search: url.search }, { replace: true });
      toast.success(t('create_campaign.facebook_connected'), {
        id: 'whatsapp-connected',
      });
    }

    if (searchParams.has('error')) {
      toast.error(t('create_campaign.facebook_auth_failed'), {
        id: 'whatsapp-error',
      });
      url.searchParams.delete('error');
      navigate({ search: url.search }, { replace: true });
    }
  }, [searchParams]);

  return (
    <Modal
      size='sm'
      withNoHeader
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setIsShowModal}
      body={() => <ModalBody setOpened={setIsShowModal} />}
      onClose={() => setIsShowModal(false)}
    >
      {({ setOpened }) =>
        showTrigger ? (
          <Button variant='secondary' onClick={() => setOpened(true)}>
            {t('create_campaign.configure')}
          </Button>
        ) : null
      }
    </Modal>
  );
};
