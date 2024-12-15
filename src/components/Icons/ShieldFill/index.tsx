import { CSSProperties, MouseEventHandler } from 'react';

const ShieldFill = ({ size = 28, onClick, style }: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 28 28'
      fill='none'
    >
      <g clip-path='url(#clip0_571_11896)'>
        <g filter='url(#filter0_dii_571_11896)'>
          <path
            d='M4.4135 3.29699L14 1.16666L23.5865 3.29699C23.8456 3.35458 24.0773 3.49878 24.2433 3.7058C24.4094 3.91281 24.5 4.17026 24.5 4.43566V16.0872C24.4999 17.2395 24.2153 18.374 23.6715 19.39C23.1277 20.406 22.3415 21.272 21.3827 21.9112L14 26.8333L6.61733 21.9112C5.65865 21.2721 4.87254 20.4063 4.32874 19.3905C3.78494 18.3748 3.50028 17.2405 3.5 16.0883V4.43566C3.50005 4.17026 3.59058 3.91281 3.75665 3.7058C3.92273 3.49878 4.15443 3.35458 4.4135 3.29699Z'
            fill='url(#paint0_linear_571_11896)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_dii_571_11896'
          x='-5.38889'
          y='-3.27779'
          width='38.7778'
          height='43.4444'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4.44444' />
          <feGaussianBlur stdDeviation='4.44444' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0953161 0 0 0 0 0.0704941 0 0 0 0 0.194604 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_571_11896' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_571_11896'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1.66914' />
          <feGaussianBlur stdDeviation='0.834568' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.580475 0 0 0 0 0.429309 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_571_11896' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-1.66914' />
          <feGaussianBlur stdDeviation='0.834568' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.346712 0 0 0 0 0.256422 0 0 0 0 0.707872 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_571_11896'
            result='effect3_innerShadow_571_11896'
          />
        </filter>
        <linearGradient
          id='paint0_linear_571_11896'
          x1='14'
          y1='1.16666'
          x2='14'
          y2='26.8333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#8D69FF' />
          <stop offset='1' stop-color='#5F46C2' />
        </linearGradient>
        <clipPath id='clip0_571_11896'>
          <rect width='28' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShieldFill;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
