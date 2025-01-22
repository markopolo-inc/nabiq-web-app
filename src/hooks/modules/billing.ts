import moment from 'moment-timezone';
import { monthlyActiveUser } from 'src/lib/billing';
import { useAppSelector } from 'src/store/hooks';
import { getDateDifference } from 'src/utils/date.uitils';

export const useBillingDetails = () => {
  const { payment } = useAppSelector((state) => state.company);

  const trialDaysLeft = getDateDifference(payment?.subscriptionEndDate, moment().toISOString());
  const plan = monthlyActiveUser.find((p) => payment.plan?.includes(p.plan));
  const isMonthly = payment?.plan?.includes('monthly');
  const subscriptionFee = isMonthly ? plan?.monthly : plan?.yearly;

  return {
    trialDaysLeft,
    paymentPlan: payment?.plan,
    isMonthly,
    subscriptionFee,
    availableWhatsAppMessages: payment?.whatsapp?.availableMessages || 0,
    hasPaymentMethod: Boolean(!!payment?.paymentMethodId),
    subscriptionStartDate: moment(payment?.subscriptionStartDate).format('DD MMM YYYY'),
    subscriptionEndDate: moment(payment?.subscriptionEndDate).format('DD MMM YYYY'),
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
