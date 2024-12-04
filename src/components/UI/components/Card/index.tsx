import cn from 'classnames';

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-12',
        className,
      )}
    >
      {children}
    </div>
  );
};
