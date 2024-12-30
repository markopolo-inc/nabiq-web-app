export type TOptionTab =
  | 'email'
  | 'sms'
  | 'push-notification'
  | 'data-sources'
  | 'whatsapp'
  | 'ecommerce';

export interface IIntegrationCard {
  id: number;
  name: string;
  gateway: string;
}
