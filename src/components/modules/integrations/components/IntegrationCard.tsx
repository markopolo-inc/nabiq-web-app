import { Badge, Card } from '@nabiq-ui';

export const IntegrationCard = ({
  icon,
  title,
  description,
  isConnected = false,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isConnected?: boolean;
  children?: React.ReactNode;
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
      </div>
      {children}
    </Card>
  );
};
