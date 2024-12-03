import { FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';

type ConnectMarktagPropsTypes = {
  onShowMarktag: () => void;
};

export const Marktag = ({ onShowMarktag }: ConnectMarktagPropsTypes) => {
  const { markTag } = useAppSelector((state) => state.brand);
  const { primary500 } = useGetColors();
  return (
    <IntegrationCard
      description='Track first party customer data with cutting-edge precision. Capture and track all your
          marketing data.'
      icon={<FiCommand size={32} color={primary500} fill={primary500} />}
      title='Marktag'
      isConnected={!!markTag}
    >
      <div className='flex gap-8'>
        {markTag ? (
          <Button variant='secondary' onClick={onShowMarktag} className='!w-36'>
            Reconfigure
          </Button>
        ) : (
          <>
            <Button onClick={onShowMarktag} className='!w-36'>
              Connect
            </Button>
            <Button
              onClick={() =>
                window.open('https://www.markopolo.ai/products/marktag/marktag', '_blank')
              }
              variant='link'
            >
              Learn more
            </Button>
          </>
        )}
      </div>
    </IntegrationCard>
  );
};
