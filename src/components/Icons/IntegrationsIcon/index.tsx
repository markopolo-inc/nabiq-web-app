import { MouseEventHandler } from 'react';

import ClickSendIcon from './ClickSend';
import KlaviyoIcon from './Klaviyo';
import PostmarkIcon from './Postmark';
import SendGridIcon from './SendGrid';
import TwillioIcon from './Twillio';

const icons = {
  Klaviyo: KlaviyoIcon,
  Postmark: PostmarkIcon,
  SendGrid: SendGridIcon,
  Twillio: TwillioIcon,
  'Click Send': ClickSendIcon,
};

const IntegrationsIcon = ({ size = 32, name, onClick }: PropTypes) => {
  const Icon = icons?.[name];
  return Icon ? <Icon size={size} onClick={onClick} /> : <></>;
};

export default IntegrationsIcon;

interface PropTypes {
  size?: number;
  type?: 'brand' | 'gray' | 'white';
  name: 'Klaviyo' | 'Postmark' | 'SendGrid' | 'Twillio' | 'Click Send' | string;
  onClick?: MouseEventHandler<SVGElement>;
}
