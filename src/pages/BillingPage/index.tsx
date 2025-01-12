import { Stack } from '@nabiq-ui';
import { BillingDetailsCard, PaymentMethodCard } from 'components/modules/billing';

const BillingPage = () => {
  return (
    <Stack gap={24} maw={768} mx='auto'>
      <PaymentMethodCard />
      <BillingDetailsCard />
    </Stack>
  );
};

export default BillingPage;
