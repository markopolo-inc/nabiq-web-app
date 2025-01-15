import { FiMail01, FiPaymentCardIcons } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import { TCardBrand } from 'src/components/Icons/PaymentCardIcons';
import { useAppSelector } from 'src/store/hooks';

export const CardDetails = ({ setShowModal }: { setShowModal: (showModal: boolean) => void }) => {
  const { payment } = useAppSelector((state) => state.company);
  return (
    <Stack gap={24}>
      <div className='grid grid-cols-2 gap-4'>
        <Group>
          <FiPaymentCardIcons brand={payment?.card.brand as TCardBrand} size={58} />
          <Stack gap={0}>
            <p className='text-sm text-gray-500 font-medium'>
              {payment?.card.brand} ending in {payment?.card.last4Digits}
            </p>
            <p className='text-sm text-gray-600'>Expiry {payment?.card.expiry}</p>
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
        Edit
      </Button>
    </Stack>
  );
};
