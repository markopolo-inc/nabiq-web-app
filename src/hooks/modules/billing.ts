import moment from 'moment-timezone';
import { monthlyActiveUser } from 'src/lib/billing';
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

export const usePlanDetails = ({
  activeUsers,
  isMonthly = true,
}: {
  activeUsers: number;
  isMonthly: boolean;
}) => {
  const plan = monthlyActiveUser.find((activeUser) => activeUser.value === activeUsers);

  const pricingPlans = [
    {
      id: 'pro',
      name: 'Pro',
      description:
        "Subjects, participants and timestamps will be visible to your team. Content won't be visible unless shared.",
      price: `$${isMonthly ? plan?.monthly : plan?.yearly}`,
      userLimit: `${plan?.label} monthly active users`,
      range: isMonthly ? 'per month' : 'per year',
      features: {
        whatsapp: {
          unlimited: false,
        },
      },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description:
        "Subjects, participants and timestamps will be visible to your team. Content won't be visible unless shared.",
      price: 'Custom',
      userLimit: 'up to unlimited active users',
      range: '',
      features: {
        whatsapp: {
          unlimited: true,
        },
      },
    },
  ];
  return {
    activeUsersInNumber: activeUsers,
    activeUsersInText: plan?.label,
    monthlyPrice: plan?.monthly,
    yearlyPrice: plan?.yearly,
    planId: `${plan?.plan}_${isMonthly ? 'monthly' : 'yearly'}`,
    pricingPlans,
  };
};
