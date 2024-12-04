import { Badge, Card } from '@nabiq-ui';

export const IntegrationCard = ({
  icon,
  title,
  description,
  isConnected = false,
  children,
  badge = null,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isConnected?: boolean;
  children?: React.ReactNode;
  badge?: React.ReactNode;
}) => {
  return (
    <Card>
      <div>
        <div className='flex gap-6 justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div>{icon}</div>
            <p className='text-gray-900 font-semibold text-lg'>{title}</p>
          </div>
          {isConnected && <Badge color='success'>Connected</Badge>}
        </div>

        <p className='mt-6 text-gray-600 font-normal text-sm'>{description}</p>
        <div className='mt-5'>{badge && badge}</div>
      </div>
      {children}
    </Card>
  );
};
