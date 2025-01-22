import { ComboboxItem } from '@mantine/core';
import { Button, GatewayLogo, Group, Modal, Select, Stack } from '@nabiq-ui';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { countryData, whatsAppUnitList } from 'src/lib/billing';
import { useBuyWhatsAppAddOnMutation } from 'src/store/billing/payment.api';
import { useAppSelector } from 'src/store/hooks';

interface TOption extends ComboboxItem {
  price: number;
}

const ModalBody = ({ setOpened }) => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.company);
  const [unit, setUnit] = useState('1');
  const [country, setCountry] = useState('AR');
  const [perUnitPrice, setPerUnitPrice] = useState(61.8);
  const [buyWhatsAppAddOn, { isLoading }] = useBuyWhatsAppAddOnMutation();

  const navigate = useNavigate();
  const { totalConversionCost, processingFee } = useMemo(() => {
    const _totalConversionCost = perUnitPrice * Number(unit);
    const _processingFee = _totalConversionCost * 0.1;
    return {
      totalConversionCost: _totalConversionCost,
      processingFee: _processingFee,
    };
  }, [perUnitPrice, unit]);

  return (
    <Stack gap={48} className='p-8'>
      <Stack gap={8}>
        <GatewayLogo app='whatsapp' width={28} />
        <p className='text-2xl text-gray-900 font-semibold'>
          {t('billing_page.add_payment_method')}
        </p>
        <p className='text-sm text-gray-600 font-normal'>
          {t('billing_page.no_charge_until_plan')}
        </p>
      </Stack>
      <div className='grid grid-cols-2 gap-16'>
        <Stack>
          <Select
            label={t('billing_page.your_country')}
            placeholder={t('billing_page.select_country')}
            data={countryData}
            value={country}
            onChange={(value, options: TOption) => {
              setCountry(value);
              setPerUnitPrice(options.price);
            }}
          />
          <Select
            data={whatsAppUnitList}
            label={t('billing_page.quantity_of_messages_monthly')}
            placeholder={t('billing_page.quantity_of_messages')}
            value={unit}
            onChange={(value) => setUnit(value)}
          />
        </Stack>
        <Stack gap={24} className='border border-gray-200 bg-gray-50 rounded-xl p-6'>
          <Group justify='space-between' className='border-b border-gray-300 pb-6'>
            <p className='text-sm text-gray-900 font-semibold'>Total conversion cost</p>
            <p className='text-sm text-gray-900 font-semibold'>
              ${totalConversionCost.toFixed(2)}/month
            </p>
          </Group>
          <Stack className='border-b border-gray-300 pb-6' gap={24}>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Price per 1,000 messages</p>
              <p className='text-sm text-gray-600'>${perUnitPrice.toFixed(2)}</p>
            </Group>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Processing Fee (10% of total cost)</p>
              <p className='text-sm text-gray-600'>${processingFee.toFixed(2)}</p>
            </Group>
            <Group justify='space-between'>
              <p className='text-sm text-gray-600'>Total conversion cost</p>
              <p className='text-sm text-gray-600'>${totalConversionCost.toFixed(2)}</p>
            </Group>
          </Stack>
          <p className='text-sm text-gray-600'>
            *Subjects, participants and timestamps will be visible to your team, Content won’t be
            visible unless shared.
          </p>
          <Button
            fullWidth
            variant='secondary-black'
            loading={isLoading}
            onClick={async () => {
              const res = await buyWhatsAppAddOn({
                companyId: brandId,
                countryCode: country,
                units: Number(unit),
              }).unwrap();
              if (res.success) {
                setOpened(false);
                navigate('/billing');
              }
            }}
          >
            Confirm WhatsApp add-on
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export const WhatsAppAddOnModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (opened: boolean) => void;
}) => {
  return (
    <Modal
      withCustomClose
      withNoHeader
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      size='90%'
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
