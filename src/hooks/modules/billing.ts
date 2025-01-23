import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const plan = monthlyActiveUser.find((activeUser) => activeUser.value === activeUsers);

  const pricingPlans = [
    {
      id: 'pro',
      name: t('pricing_plan.pro'),
      description: t('pricing_plan.subject_participants_and_timestamps'),
      price: `$${isMonthly ? plan?.monthly : plan?.yearly}`,
      userLimit: t('pricing_plan.active_users_text', { activeUsersInText: plan?.label }),
      range: isMonthly ? t('billing_page.per_month') : t('billing_page.per_year'),
      features: {
        whatsapp: {
          unlimited: false,
        },
      },
    },
    {
      id: 'enterprise',
      name: t('pricing_plan.enterprise'),
      description: t('pricing_plan.subject_participants_and_timestamps'),
      price: t('home_page.custom'),
      userLimit: t('pricing_plan.unlimited_active_users'),
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
