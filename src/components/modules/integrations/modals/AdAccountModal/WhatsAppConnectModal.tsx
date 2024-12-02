import { Button, GatewayLogo, Loader, Modal, Select } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetFbBusinessAccountsQuery,
  useLazyGetWABusinessAccountsQuery,
  useSaveWANumberMutation,
} from 'src/store/integrations/social-integrations.api';

const ModalBody = ({ setOpened }: { setOpened: (value: boolean) => void }) => {
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data } = useGetFbBusinessAccountsQuery(brandId);
  const [getWABusinessAccounts, { isLoading, data: waData }] = useLazyGetWABusinessAccountsQuery();
  const [saveWANumber, { isLoading: isSaving }] = useSaveWANumberMutation();
  const [accountId, setAccountId] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const waNumbers = useMemo(() => {
    if (!waData) return [];
    const numbers = [];
    if (waData?.data?.length > 0) {
      waData?.data?.forEach((account) => {
        numbers.push(...account?.phone_numbers?.data);
      });
    }
    return numbers?.map((num) => ({
      label: `${num?.verified_name} (${num?.id})`,
      value: num?.id,
      name: num?.verified_name,
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
    const res = await saveWANumber({ brandId, number, name }).unwrap();
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
        onChange={(value) => {
          setNumber(value);
          setName(waNumbers?.find((num) => num?.value === value)?.name);
        }}
      />
      <Button
        className='!w-40'
        disabled={!number || !name || isSaving}
        fullWidth
        loading={isSaving}
        onClick={handleSave}
      >
        Done
      </Button>
    </div>
  );
};

export const WhatsAppConnectModal = ({
  showModal,
  setIsShowModal,
}: {
  showModal: boolean;
  setIsShowModal: (value: boolean) => void;
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
      {({ setOpened }) => (
        <Button className='!w-40' variant='secondary' onClick={() => setOpened(true)}>
          Configure
        </Button>
      )}
    </Modal>
  );
};
