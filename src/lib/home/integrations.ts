import { IIntegrationCard } from 'src/interfaces/modules/integrations';

export const integrations: IIntegrationCard[] = [
  {
    id: 1,
    name: 'Klaviyo',
    gateway: 'klaviyo',
  },
  {
    id: 2,
    name: 'Postmark',
    gateway: 'postmark',
  },
  {
    id: 3,
    name: 'SendGrid',
    gateway: 'sendgrid',
  },
  {
    id: 4,
    name: 'Twilio',
    gateway: 'twilio',
  },
  {
    id: 5,
    name: 'Click Send',
    gateway: 'clicksend',
  },
];
