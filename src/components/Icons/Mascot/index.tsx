import { PropTypes } from '../types';

const Mascot = ({
  size = 34,
  color = 'currentColor',
  strokeWidth = 1.25,
  onClick,
  style,
}: PropTypes) => (
  <svg
    width={size}
    height={size}
    style={{ ...style }}
    onClick={(e) => onClick && onClick(e)}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 34 42'
    fill='none'
  >
    <path
      d='M30.8791 28.97L27.3858 30.968V30.9659L21.1944 34.5079C20.2998 32.9722 20.8305 31.0101 22.3792 30.1236L25.7926 28.1698L25.7947 28.1729L27.1578 27.3932C28.3187 26.7286 29.8031 27.123 30.4738 28.2735L30.8791 28.97Z'
      fill={color}
    />
    <path
      d='M30.8791 28.97L27.3858 30.968V30.9659L21.1944 34.5079C20.2998 32.9722 20.8305 31.0101 22.3792 30.1236L25.7926 28.1698L25.7947 28.1729L27.1578 27.3932C28.3187 26.7286 29.8031 27.123 30.4738 28.2735L30.8791 28.97Z'
      fill='url(#paint0_linear_4_256)'
      fillOpacity='0.03'
    />
    <path
      d='M15.9513 10.6931C15.9762 10.7034 15.9948 10.7167 16.0145 10.7167C16.0529 10.7167 16.0923 10.7116 16.1296 10.7034C16.4551 10.6294 16.7805 10.5524 17.106 10.4794C17.2543 10.4465 17.4035 10.4106 17.5549 10.3911C17.7705 10.3644 17.9664 10.426 18.1229 10.576C18.2473 10.6941 18.3592 10.8235 18.4733 10.9509C18.6785 11.1779 18.8806 11.4081 19.0848 11.6361C19.1118 11.6659 19.1429 11.6947 19.1761 11.7173C19.2248 11.7512 19.2611 11.7306 19.2611 11.671C19.2611 11.633 19.2559 11.594 19.2466 11.557C19.1657 11.2088 19.0828 10.8605 19.0009 10.5113C18.9677 10.3664 18.9242 10.2226 18.9252 10.0726C18.9273 9.89081 18.9822 9.72439 19.1108 9.59291C19.232 9.46861 19.3637 9.35458 19.4933 9.23953C19.7265 9.03306 19.9618 8.82966 20.195 8.62318C20.224 8.5975 20.25 8.56874 20.2707 8.5369C20.2987 8.49478 20.2821 8.45882 20.2313 8.45677C20.1909 8.45574 20.1484 8.46088 20.109 8.47012C19.7358 8.55539 19.3637 8.6427 18.9905 8.72796C18.863 8.75673 18.7366 8.79063 18.6039 8.78857C18.4225 8.78446 18.2577 8.73105 18.1271 8.60572C17.9996 8.48451 17.8835 8.35199 17.7663 8.22153C17.5611 7.99451 17.359 7.76441 17.1548 7.53636C17.1288 7.50759 17.0998 7.48191 17.0677 7.46034C17.0521 7.44904 17.021 7.44082 17.0096 7.44801C16.993 7.45931 16.9796 7.48705 16.9806 7.50657C16.9848 7.56409 16.993 7.62059 17.0065 7.67709C17.0936 8.04895 17.1827 8.41979 17.2688 8.79268C17.2895 8.88102 17.3071 8.97142 17.3123 9.06182C17.3247 9.29706 17.2366 9.49532 17.0615 9.65249C16.8137 9.87437 16.5618 10.0921 16.311 10.312C16.2218 10.3901 16.1327 10.4671 16.0456 10.5472C16.0176 10.5729 15.9928 10.6027 15.9699 10.6335C15.9596 10.6479 15.9575 10.6674 15.9492 10.6921L15.9513 10.6931Z'
      fill={color}
    />
    <path
      d='M15.9513 10.6931C15.9762 10.7034 15.9948 10.7167 16.0145 10.7167C16.0529 10.7167 16.0923 10.7116 16.1296 10.7034C16.4551 10.6294 16.7805 10.5524 17.106 10.4794C17.2543 10.4465 17.4035 10.4106 17.5549 10.3911C17.7705 10.3644 17.9664 10.426 18.1229 10.576C18.2473 10.6941 18.3592 10.8235 18.4733 10.9509C18.6785 11.1779 18.8806 11.4081 19.0848 11.6361C19.1118 11.6659 19.1429 11.6947 19.1761 11.7173C19.2248 11.7512 19.2611 11.7306 19.2611 11.671C19.2611 11.633 19.2559 11.594 19.2466 11.557C19.1657 11.2088 19.0828 10.8605 19.0009 10.5113C18.9677 10.3664 18.9242 10.2226 18.9252 10.0726C18.9273 9.89081 18.9822 9.72439 19.1108 9.59291C19.232 9.46861 19.3637 9.35458 19.4933 9.23953C19.7265 9.03306 19.9618 8.82966 20.195 8.62318C20.224 8.5975 20.25 8.56874 20.2707 8.5369C20.2987 8.49478 20.2821 8.45882 20.2313 8.45677C20.1909 8.45574 20.1484 8.46088 20.109 8.47012C19.7358 8.55539 19.3637 8.6427 18.9905 8.72796C18.863 8.75673 18.7366 8.79063 18.6039 8.78857C18.4225 8.78446 18.2577 8.73105 18.1271 8.60572C17.9996 8.48451 17.8835 8.35199 17.7663 8.22153C17.5611 7.99451 17.359 7.76441 17.1548 7.53636C17.1288 7.50759 17.0998 7.48191 17.0677 7.46034C17.0521 7.44904 17.021 7.44082 17.0096 7.44801C16.993 7.45931 16.9796 7.48705 16.9806 7.50657C16.9848 7.56409 16.993 7.62059 17.0065 7.67709C17.0936 8.04895 17.1827 8.41979 17.2688 8.79268C17.2895 8.88102 17.3071 8.97142 17.3123 9.06182C17.3247 9.29706 17.2366 9.49532 17.0615 9.65249C16.8137 9.87437 16.5618 10.0921 16.311 10.312C16.2218 10.3901 16.1327 10.4671 16.0456 10.5472C16.0176 10.5729 15.9928 10.6027 15.9699 10.6335C15.9596 10.6479 15.9575 10.6674 15.9492 10.6921L15.9513 10.6931Z'
      fill='url(#paint1_linear_4_256)'
      fillOpacity='0.03'
    />
    <path
      d='M10.9744 24.5612L29.6637 12.1665C29.6637 12.1665 29.4606 9.74422 22.6254 12.0237C22.6254 12.0237 26.1415 7.25109 21.6853 1.41016L1.41406 14.4459C1.41406 14.4459 9.09402 25.5433 9.10542 25.5587C7.6677 25.0266 6.27455 25.4323 5.77596 26.3117C5.46706 26.8561 5.5676 27.4642 5.64638 27.7714C6.01126 28.6322 6.46113 29.1931 6.80631 29.5475C7.60447 30.3672 8.10721 30.3518 8.52183 31.112C8.94579 31.8886 8.64519 32.317 9.12719 32.7638C9.51383 33.1223 10.1793 33.2836 10.7805 33.0535C11.5963 32.7412 11.7839 31.904 11.7964 31.8455C12.0431 32.5286 12.437 33.4634 13.062 34.4927C13.6819 35.5138 15.5239 38.5349 18.7196 39.8559C22.6824 41.4934 28.4447 40.3973 31.1108 36.4229C32.6387 34.1444 32.6408 31.678 32.5579 30.5162'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.9744 24.5612L29.6637 12.1665C29.6637 12.1665 29.4606 9.74422 22.6254 12.0237C22.6254 12.0237 26.1415 7.25109 21.6853 1.41016L1.41406 14.4459C1.41406 14.4459 9.09402 25.5433 9.10542 25.5587C7.6677 25.0266 6.27455 25.4323 5.77596 26.3117C5.46706 26.8561 5.5676 27.4642 5.64638 27.7714C6.01126 28.6322 6.46113 29.1931 6.80631 29.5475C7.60447 30.3672 8.10721 30.3518 8.52183 31.112C8.94579 31.8886 8.64519 32.317 9.12719 32.7638C9.51383 33.1223 10.1793 33.2836 10.7805 33.0535C11.5963 32.7412 11.7839 31.904 11.7964 31.8455C12.0431 32.5286 12.437 33.4634 13.062 34.4927C13.6819 35.5138 15.5239 38.5349 18.7196 39.8559C22.6824 41.4934 28.4447 40.3973 31.1108 36.4229C32.6387 34.1444 32.6408 31.678 32.5579 30.5162'
      stroke='url(#paint2_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.6244 12.0234C18.1744 14.9829 13.7244 17.9435 9.27539 20.903'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.6244 12.0234C18.1744 14.9829 13.7244 17.9435 9.27539 20.903'
      stroke='url(#paint3_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.9648 25.5748C15.9648 25.5748 16.991 22.3739 20.0759 23.5511'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.9648 25.5748C15.9648 25.5748 16.991 22.3739 20.0759 23.5511'
      stroke='url(#paint4_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.8457 21.3873C23.8457 21.3873 24.8719 18.1864 27.9567 19.3636'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.8457 21.3873C23.8457 21.3873 24.8719 18.1864 27.9567 19.3636'
      stroke='url(#paint5_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.6387 29.3438C11.6387 29.3438 12.0906 31.201 11.7942 31.8461'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.6387 29.3438C11.6387 29.3438 12.0906 31.201 11.7942 31.8461'
      stroke='url(#paint6_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.15039 28.0352C8.15039 28.0352 10.2888 28.783 9.87836 30.1277'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.15039 28.0352C8.15039 28.0352 10.2888 28.783 9.87836 30.1277'
      stroke='url(#paint7_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M25.5996 34.3922L28.9747 32.2617'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M25.5996 34.3922L28.9747 32.2617'
      stroke='url(#paint8_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.8666 27.676L26.7846 26.1393C26.7846 26.1393 25.9491 21.0636 21.2617 20.9023'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.8666 27.676L26.7846 26.1393C26.7846 26.1393 25.9491 21.0636 21.2617 20.9023'
      stroke='url(#paint9_linear_4_256)'
      stroke-opacity='0.03'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4_256'
        x1='25.8194'
        y1='27.0703'
        x2='25.8194'
        y2='34.5079'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4_256'
        x1='18.1167'
        y1='7.44531'
        x2='18.1167'
        y2='11.7336'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_4_256'
        x1='17.0001'
        y1='1.41016'
        x2='17.0001'
        y2='40.5877'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_4_256'
        x1='15.9499'
        y1='12.0234'
        x2='15.9499'
        y2='20.903'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint4_linear_4_256'
        x1='18.0204'
        y1='23.291'
        x2='18.0204'
        y2='25.5748'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint5_linear_4_256'
        x1='25.9012'
        y1='19.1035'
        x2='25.9012'
        y2='21.3873'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint6_linear_4_256'
        x1='11.7668'
        y1='29.3438'
        x2='11.7668'
        y2='31.8461'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint7_linear_4_256'
        x1='9.04055'
        y1='28.0352'
        x2='9.04055'
        y2='30.1277'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint8_linear_4_256'
        x1='27.2871'
        y1='32.2617'
        x2='27.2871'
        y2='34.3922'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint9_linear_4_256'
        x1='24.0231'
        y1='20.9023'
        x2='24.0231'
        y2='27.676'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0D121C' />
        <stop offset='1' stopColor='#0D121C' stopOpacity='0' />
      </linearGradient>
    </defs>
  </svg>
);

export default Mascot;
