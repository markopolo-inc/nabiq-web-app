import { IIntegrationCard } from 'src/interfaces/modules/integrations';

export const integrations: IIntegrationCard[] = [
  {
    id: 1,
    name: 'home_page.klaviyo',
    gateway: 'klaviyo',
  },
  {
    id: 2,
    name: 'home_page.postmark',
    gateway: 'postmark',
  },
  {
    id: 3,
    name: 'home_page.sendgrid',
    gateway: 'sendgrid',
  },
  {
    id: 4,
    name: 'home_page.twilio',
    gateway: 'twilio',
  },
  {
    id: 5,
    name: 'home_page.click_send',
    gateway: 'clicksend',
  },
];
