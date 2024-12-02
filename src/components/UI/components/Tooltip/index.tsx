import { Tooltip as MantineTooltip, TooltipProps } from '@mantine/core';
import { forwardRef } from 'react';

// For styling

const Tooltip = ({ children, ...props }: TooltipProps) => {
  const TooltipIcon = forwardRef<HTMLSpanElement>((_props, ref) => {
    return <span ref={ref}>{children}</span>;
  });

  return (
    <MantineTooltip {...props}>
      <TooltipIcon />
    </MantineTooltip>
  );
};

export default Tooltip;
