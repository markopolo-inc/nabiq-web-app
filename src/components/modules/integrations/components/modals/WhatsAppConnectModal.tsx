import { ComboboxItem } from '@mantine/core';
import { Button, GatewayLogo, Loader, Modal, Select } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
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
      waData?.data?.forEach((account) => {
        numbers.push(
          ...account?.phone_numbers?.data?.map((num) => ({
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
      <div className='text-xl font-semibold text-gray-900'>Select business account</div>
      <Select
        data={businessAccounts}
        label='Select facebook business account'
        placeholder='Select account'
        onChange={setAccountId}
      />
      <Select
        leftSection={isLoading ? <Loader size='xs' /> : null}
        disabled={isLoading || !accountId}
        data={waNumbers}
        label='Select whatsapp number'
        placeholder='Whatsapp number'
        nothingFoundMessage={isLoading ? 'Loading...' : 'No whatsapp numbers found.'}
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
          Done
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
            Configure
          </Button>
        ) : null
      }
    </Modal>
  );
};
