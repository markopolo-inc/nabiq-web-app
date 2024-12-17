import { CSSProperties, MouseEventHandler } from 'react';

const FlashLight = ({ size = 28, onClick, style }: PropTypes) => {
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
      <g clipPath='url(#clip0_571_11912)'>
        <g filter='url(#filter0_dii_571_11912)'>
          <path
            d='M15.1667 11.6667H23.3334L12.8334 26.8333V16.3333H4.66675L15.1667 1.16666V11.6667Z'
            fill='url(#paint0_linear_571_11912)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_dii_571_11912'
          x='-3.7777'
          y='-3.05557'
          width='35.5556'
          height='42.5555'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4.22222' />
          <feGaussianBlur stdDeviation='4.22222' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.186533 0 0 0 0 0.0550353 0 0 0 0 0.147084 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_571_11912' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_571_11912'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1.60444' />
          <feGaussianBlur stdDeviation='0.802222' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 0.336266 0 0 0 0 0.898683 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_571_11912' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-1.60444' />
          <feGaussianBlur stdDeviation='0.802222' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.673852 0 0 0 0 0.198815 0 0 0 0 0.531341 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_571_11912'
            result='effect3_innerShadow_571_11912'
          />
        </filter>
        <linearGradient
          id='paint0_linear_571_11912'
          x1='14.0001'
          y1='1.16666'
          x2='14.0001'
          y2='26.8333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF52DB' />
          <stop offset='1' stopColor='#B93792' />
        </linearGradient>
        <clipPath id='clip0_571_11912'>
          <rect width='28' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FlashLight;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
