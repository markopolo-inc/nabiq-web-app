import { Badge as BadgeField, BadgeProps as BadgeFieldProps } from '@mantine/core';

import styles from './Badge.module.scss';

type BadgePropsType = BadgeFieldProps & {
  color:
    | 'gray'
    | 'primary'
    | 'error'
    | 'warning'
    | 'success'
    | 'bluelight'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'orange';
  size?: 'sm' | 'md' | 'lg';
};

const Badge = ({
  className,
  color,
  size = 'sm',
  variant = 'outline',
  children,
  ...rest
}: BadgePropsType) => {
  const getColor = () => {
    switch (color) {
      case 'gray':
        return {
          color: '#364152',
          bg_color: '#F9FAFB',
          border_color: '#EAECF0',
          dot_color: '#364152',
        };
      case 'primary':
        return {
          color: '#0A52D6',
          bg_color: '#F9F5FF',
          border_color: '#B2CCFB',
          dot_color: '#0A52D6',
        };
      case 'error':
        return {
          color: '#B42318',
          bg_color: '#FEF3F2',
          border_color: '#FECDCA',
          dot_color: '#B42318',
        };
      case 'warning':
        return {
          color: '#B54708',
          bg_color: '#FFFAEB',
          border_color: '#FEDF89',
          dot_color: '#B54708',
        };
      case 'success':
        return {
          color: '#067647',
          bg_color: '#ECFDF3',
          border_color: '#ABEFC6',
          dot_color: '#067647',
        };
      case 'bluelight':
        return {
          color: '#026AA2',
          bg_color: '#F0F9FF',
          border_color: '#B9E6FE',
          dot_color: '#026AA2',
        };
      case 'blue':
        return {
          color: '#175CD3',
          bg_color: '#EFF8FF',
          border_color: '#B2DDFF',
          dot_color: '#175CD3',
        };
      case 'purple':
        children;
        return {
          color: '#5925DC',
          bg_color: '#F4F3FF',
          border_color: '#D9D6FE',
          dot_color: '#5925DC',
        };
      case 'pink':
        return {
          color: '#C11574',
          bg_color: '#FDF2FA',
          border_color: '#FCCEEE',
          dot_color: '#C11574',
        };
      case 'orange':
        return {
          color: '#B93815',
          bg_color: '#FEF6EE',
          border_color: '#F9DBAF',
          dot_color: '#B93815',
        };
      default:
        return {
          color: '#364152',
          bg_color: '#fff',
          border_color: '#364152',
          dot_color: '#364152',
        };
    }
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return {
          font_size: '12px',
          line_height: '18px',
          padding: '1px 8px',
        };
      case 'md':
        return {
          font_size: '14px',
          line_height: '20px',
          padding: '2px 10px',
        };
      case 'lg':
        return {
          font_size: '14px',
          line_height: '20px',
          padding: '4px 10px',
        };
      default:
        return {
          font_size: '12px',
          line_height: '18px',
          padding: '2px 8px',
        };
    }
  };

  return (
    <BadgeField
      className={className}
      classNames={{
        root: styles.badge_wrapper,
        label: styles.badge_label,
      }}
      style={{
        '--badge-color': getColor().color,
        '--badge-bg-color': getColor().bg_color,
        '--badge-bd-color': getColor().border_color,
        '--badge-dot-color': getColor().dot_color,
        '--badge-fz': getSize().font_size,
        '--badge-lh': getSize().line_height,
        '--badge-pd': getSize().padding,
      }}
      variant={variant}
      {...rest}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {children}
      </div>
    </BadgeField>
  );
};

export default Badge;
