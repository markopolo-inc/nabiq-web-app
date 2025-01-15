import moment from 'moment-timezone';
import { useAppSelector } from 'src/store/hooks';
import { getDateDifference } from 'src/utils/date.uitils';

export const usePaymentDetails = () => {
  const { payment } = useAppSelector((state) => state.company);

  const trialDaysLeft = getDateDifference(payment?.subscriptionEndDate, moment().toISOString());

  return {
    trialDaysLeft,
    paymentPlan: payment?.plan,
    hasPaymentMethod: Boolean(!!payment?.paymentMethodId),
  };
};
