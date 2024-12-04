import { Tooltip as MantineTooltip, TooltipProps } from '@mantine/core';
import { forwardRef } from 'react';

const Tooltip = ({ children, ...props }: TooltipProps) => {
  const TooltipIcon = forwardRef<HTMLSpanElement>((_props, ref) => {
    return <span ref={ref}>{children}</span>;
  });

  return (
    <MantineTooltip {...props} radius='md' px={16} py={8}>
      <TooltipIcon />
    </MantineTooltip>
  );
};

export default Tooltip;
