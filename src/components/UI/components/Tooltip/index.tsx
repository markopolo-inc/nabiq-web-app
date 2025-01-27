import { Tooltip as MantineTooltip, TooltipProps } from '@mantine/core';
import { forwardRef } from 'react';

import { useGetColors } from '../../hooks';

const Tooltip = ({ children, ...props }: TooltipProps) => {
  const TooltipIcon = forwardRef<HTMLSpanElement>((_props, ref) => {
    return <span ref={ref}>{children}</span>;
  });

  const { gray600 } = useGetColors();

  return (
    <MantineTooltip
      {...props}
      styles={{
        tooltip: {
          background: 'white',
          boxShadow:
            '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
          color: gray600,
        },
      }}
      radius='md'
      px={16}
      py={8}
    >
      <TooltipIcon />
    </MantineTooltip>
  );
};

export default Tooltip;
