import { FiMail01, FiPaymentCardIcons } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { TCardBrand } from 'src/components/Icons/PaymentCardIcons';
import { useAppSelector } from 'src/store/hooks';

export const CardDetails = ({ setShowModal }: { setShowModal: (showModal: boolean) => void }) => {
  const { t } = useTranslation();
  const { payment } = useAppSelector((state) => state.company);
  return (
    <Stack gap={24}>
      <p className='text-lg font-semibold text-gray-900'>{t('billing_page.payment_method')}</p>
      <div className='grid grid-cols-2 gap-4'>
        <Group>
          <FiPaymentCardIcons brand={payment?.card.brand as TCardBrand} size={58} />
          <Stack gap={0}>
            <p className='text-sm text-gray-500 font-medium'>
              {t('billing_page.card_brand', {
                brand: payment?.card.brand,
                lastDigit: payment?.card.last4Digits,
              })}
            </p>
            <p className='text-sm text-gray-600'>
              {t('billing_page.expiry_date_display', {
                date: payment?.card.expiry,
              })}
            </p>
          </Stack>
        </Group>

        <Stack>
          <Group gap={4}>
            <FiMail01 color='#98A2b3' size={16} />
            <p className='text-sm text-gray-600'>{payment?.card.email}</p>
          </Group>
        </Stack>
      </div>
      <Button variant='secondary' onClick={() => setShowModal(true)}>
        {t('billing_page.edit')}
      </Button>
    </Stack>
  );
};
