import { CSSProperties, MouseEventHandler } from 'react';

export interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
