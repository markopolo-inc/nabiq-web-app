import { CSSProperties, MouseEventHandler } from 'react';

const CodeAiFill = ({ size = 28, onClick, style }: PropTypes) => {
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
      <g clipPath='url(#clip0_571_11888)'>
        <g filter='url(#filter0_dii_571_11888)'>
          <path
            d='M20.6652 11.816L20.3782 12.4763C20.3333 12.5839 20.2576 12.6757 20.1607 12.7403C20.0637 12.8049 19.9498 12.8394 19.8333 12.8394C19.7168 12.8394 19.6029 12.8049 19.506 12.7403C19.409 12.6757 19.3334 12.5839 19.2885 12.4763L19.0015 11.816C18.4969 10.6479 17.5728 9.71125 16.4115 9.19101L15.526 8.79551C15.4186 8.74609 15.3276 8.66691 15.2638 8.56734C15.2 8.46778 15.1661 8.35201 15.1661 8.23376C15.1661 8.11551 15.2 7.99974 15.2638 7.90018C15.3276 7.80061 15.4186 7.72143 15.526 7.67201L16.3625 7.29984C17.553 6.76479 18.4929 5.79354 18.9887 4.58618L19.2838 3.87334C19.3272 3.76292 19.4028 3.66812 19.5008 3.60131C19.5988 3.53449 19.7147 3.49875 19.8333 3.49875C19.952 3.49875 20.0678 3.53449 20.1658 3.60131C20.2639 3.66812 20.3395 3.76292 20.3828 3.87334L20.678 4.58501C21.1732 5.7926 22.1128 6.76427 23.303 7.29984L24.1407 7.67318C24.2478 7.72274 24.3384 7.80191 24.402 7.90135C24.4656 8.00078 24.4993 8.11633 24.4993 8.23434C24.4993 8.35236 24.4656 8.4679 24.402 8.56734C24.3384 8.66678 24.2478 8.74595 24.1407 8.79551L23.254 9.18984C22.0929 9.7106 21.1692 10.6476 20.6652 11.816ZM3.29933 14L8.2495 18.9502L6.59983 20.5998L0 14L6.59983 7.40018L8.24833 9.04984L3.29933 14ZM21.4002 20.5998L28 14L24.6983 10.7007L23.0487 12.3503L24.6995 14L19.7505 18.9502L21.4002 20.5998Z'
            fill='url(#paint0_linear_571_11888)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_dii_571_11888'
          x='-8.59068'
          y='-0.796594'
          width='45.1814'
          height='34.2825'
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
          <feOffset dy='4.29534' />
          <feGaussianBlur stdDeviation='4.29534' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0439216 0 0 0 0 0.0956863 0 0 0 0 0.192941 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_571_11888' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_571_11888'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1.61314' />
          <feGaussianBlur stdDeviation='0.80657' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.267482 0 0 0 0 0.582729 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_571_11888' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-1.61314' />
          <feGaussianBlur stdDeviation='0.80657' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.159765 0 0 0 0 0.348059 0 0 0 0 0.701824 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_571_11888'
            result='effect3_innerShadow_571_11888'
          />
        </filter>
        <linearGradient
          id='paint0_linear_571_11888'
          x1='14'
          y1='3.49875'
          x2='14'
          y2='20.5998'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#418EFF' />
          <stop offset='1' stop-color='#2C5FC0' />
        </linearGradient>
        <clipPath id='clip0_571_11888'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CodeAiFill;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
