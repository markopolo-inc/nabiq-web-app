import { PropTypes } from '../types';

const ConnectFirstMarkTag = ({ color = 'none', size = 168, onClick, style }: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 168 168'
      fill={color}
    >
      <g clipPath='url(#clip0_538_11273)'>
        <g filter='url(#filter0_dii_538_11273)'>
          <path
            d='M77.2757 51.1399L73.3934 65.6288L102.371 73.3934L106.253 58.9045C108.398 50.9025 116.623 46.1538 124.625 48.2979C132.627 50.442 137.375 58.6671 135.231 66.6691C133.087 74.6711 124.862 79.4198 116.86 77.2757L102.371 73.3934L94.6066 102.371L109.095 106.253C117.097 108.398 121.846 116.623 119.702 124.625C117.558 132.627 109.333 137.375 101.331 135.231C93.3289 133.087 88.5802 124.862 90.7243 116.86L94.6066 102.371L65.6288 94.6066L61.7465 109.095C59.6024 117.097 51.3773 121.846 43.3753 119.702C35.3734 117.558 30.6246 109.333 32.7687 101.331C34.9129 93.3289 43.1379 88.5802 51.1399 90.7243L65.6288 94.6066L73.3934 65.6288L58.9045 61.7465C50.9025 59.6024 46.1538 51.3774 48.2979 43.3754C50.442 35.3734 58.6671 30.6246 66.6691 32.7688C74.6711 34.9129 79.4198 43.1379 77.2757 51.1399Z'
            fill='url(#paint0_linear_538_11273)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_dii_538_11273'
          x='8.25391'
          y='20.2539'
          width='151.492'
          height='151.492'
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
          <feOffset dy='12' />
          <feGaussianBlur stdDeviation='12' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0439216 0 0 0 0 0.0956863 0 0 0 0 0.192941 0 0 0 0.25 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_538_11273' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_538_11273'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.254745 0 0 0 0 0.55498 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_538_11273' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.175686 0 0 0 0 0.382745 0 0 0 0 0.771765 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_538_11273'
            result='effect3_innerShadow_538_11273'
          />
        </filter>
        <linearGradient
          id='paint0_linear_538_11273'
          x1='95.6468'
          y1='40.5333'
          x2='72.3531'
          y2='127.467'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3F89FF' />
          <stop offset='1' stopColor='#2F66CF' />
        </linearGradient>
        <clipPath id='clip0_538_11273'>
          <rect width='168' height='168' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ConnectFirstMarkTag;
