import { CSSProperties, MouseEventHandler } from 'react';

const MegaPhoneFill = ({ size = 28, onClick, style }: PropTypes) => {
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
      <g clipPath='url(#clip0_571_11904)'>
        <g filter='url(#filter0_dii_571_11904)'>
          <path
            d='M24.5 11.7402V4.66667C24.5 4.35725 24.3771 4.0605 24.1583 3.84171C23.9395 3.62292 23.6428 3.5 23.3333 3.5H22.1667C19.8578 5.80883 15.5202 7.1015 12.8333 7.71517V20.2848C15.5202 20.8985 19.8578 22.1912 22.1667 24.5H23.3333C23.6428 24.5 23.9395 24.3771 24.1583 24.1583C24.3771 23.9395 24.5 23.6428 24.5 23.3333V16.2598C25.0014 16.1309 25.4457 15.8389 25.7629 15.4298C26.0801 15.0207 26.2523 14.5177 26.2523 14C26.2523 13.4823 26.0801 12.9793 25.7629 12.5702C25.4457 12.1611 25.0014 11.8691 24.5 11.7402ZM5.83333 8.16667C5.21449 8.16667 4.621 8.4125 4.18342 8.85008C3.74583 9.28767 3.5 9.88116 3.5 10.5V17.5C3.5 18.1188 3.74583 18.7123 4.18342 19.1499C4.621 19.5875 5.21449 19.8333 5.83333 19.8333H7L8.16667 25.6667H10.5V8.16667H5.83333Z'
            fill='url(#paint0_linear_571_11904)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_dii_571_11904'
          x='-5.05599'
          y='-0.777997'
          width='39.8642'
          height='39.2786'
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
          <feOffset dy='4.278' />
          <feGaussianBlur stdDeviation='4.278' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0168 0 0 0 0 0.1432 0 0 0 0 0.12424 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_571_11904' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_571_11904'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1.62564' />
          <feGaussianBlur stdDeviation='0.812819' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.102648 0 0 0 0 0.874952 0 0 0 0 0.759106 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_571_11904' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-1.62564' />
          <feGaussianBlur stdDeviation='0.812819' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.06069 0 0 0 0 0.51731 0 0 0 0 0.448817 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_571_11904'
            result='effect3_innerShadow_571_11904'
          />
        </filter>
        <linearGradient
          id='paint0_linear_571_11904'
          x1='14.8762'
          y1='3.5'
          x2='14.8762'
          y2='25.6667'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#19D5B9' />
          <stop offset='1' stopColor='#118E7B' />
        </linearGradient>
        <clipPath id='clip0_571_11904'>
          <rect width='28' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MegaPhoneFill;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
