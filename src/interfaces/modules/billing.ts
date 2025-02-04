export interface IPayment {
  plan: 'trial' | 'pro_4_yearly';
  paymentMethodId: string;
  paymentMethodDetail: string;
  customerId: string;
  subscriptionId: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  nextBillingDate: string;
  allowUsage: boolean;
  awaitingCancellation: boolean;
  whatsapp: {
    availableMessages: number;
    totalMessages: number;
    usedMessages: number;
  };
  card: {
    email: string;
    brand: string;
    last4Digits: string;
    expiry: string;
  };
}
