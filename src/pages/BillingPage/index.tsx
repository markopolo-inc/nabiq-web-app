import { Stack } from '@nabiq-ui';
import { BillingDetailsCard, PaymentMethodCard } from 'components/modules/billing';

const BillingPage = () => {
  return (
    <Stack gap={24}>
      <PaymentMethodCard />
      <BillingDetailsCard />
    </Stack>
  );
};

export default BillingPage;
