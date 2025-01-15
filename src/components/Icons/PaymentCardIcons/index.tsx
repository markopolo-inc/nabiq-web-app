import Amex from './Amex.svg';
import DinersClub from './DinersClub.svg';
import Discover from './Discover.svg';
import JCB from './JCB.svg';
import Mastercard from './Master.svg';
import UnionPay from './UnionPay.svg';
import Visa from './Visa.svg';

export type TCardBrand =
  | 'Visa'
  | 'Mastercard'
  | 'American Express'
  | 'Discover'
  | 'Diners Club'
  | 'JCB'
  | 'UnionPay';

const getIcon = (brand: TCardBrand) => {
  switch (brand) {
    case 'Visa':
      return Visa;
    case 'Mastercard':
      return Mastercard;
    case 'American Express':
      return Amex;
    case 'Discover':
      return Discover;
    case 'Diners Club':
      return DinersClub;
    case 'JCB':
      return JCB;
    case 'UnionPay':
      return UnionPay;
    default:
      return null;
  }
};

export const PaymentCardIcons = ({ brand, size }: { brand: TCardBrand; size: number }) => {
  return <img src={getIcon(brand)} alt={brand} style={{ width: size }} />;
};
