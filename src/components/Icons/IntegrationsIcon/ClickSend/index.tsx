import { CSSProperties, MouseEventHandler } from 'react';

const ClickSend = ({ size = 32, onClick, style }: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 26'
      fill='none'
    >
      <path
        d='M29.1103 4.04767H26.5192V15.4358C26.5031 16.3208 26.1422 17.1646 25.5134 17.7876C24.8847 18.4106 24.0376 18.7636 23.1524 18.7715H13.1917L12.959 19.0043C13.096 19.4752 13.3784 19.8908 13.7657 20.1917C14.1529 20.4926 14.6254 20.6635 15.1156 20.6799H19.2581L25.3556 25.7689V20.6799H29.0947C30.2739 20.6799 31.4375 19.5939 31.4375 18.4302V6.11118C31.4375 4.93203 30.2739 4.04767 29.1103 4.04767Z'
        fill='#00A5FF'
      />
      <path
        d='M23.1368 0.122315H2.93611C1.75696 0.122315 0.670898 1.06874 0.670898 2.24789V15.4358C0.670898 16.6149 1.75696 17.6234 2.93611 17.6234H6.76835V22.79L12.7882 17.6234H23.1368C24.347 17.6234 25.309 16.646 25.3555 15.4513V2.23238C25.3315 1.66435 25.0888 1.1276 24.6782 0.73435C24.2676 0.341103 23.7209 0.121808 23.1524 0.122315H23.1368Z'
        fill='#00A5FF'
      />
    </svg>
  );
};

export default ClickSend;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
