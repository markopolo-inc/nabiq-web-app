import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import type { GatewayType } from 'src/interfaces/brand.interface';

export const IntegrateApps = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg flex flex-row gap-4 items-start min-h-[250px]'>
      <div>
        <FiZap size={32} color='#EE46BC' fill='#EE46BC' />
      </div>
      <div className='flex gap-3 flex-col justify-between h-full'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>Integrate apps</p>
            <p className='text-gray-600 text-sm font-normal'>
              Integrate email, sms and push notification apps to build custom marketing funnels.
            </p>
          </div>
        </div>
        <div className='flex gap-3 justify-between items-center'>
          <Button
            variant='secondary-black'
            onClick={() => navigate('/integrations')}
            className='!w-36'
          >
            Integrate
          </Button>
          <div className='flex flex-wrap justify-end gap-4 w-4/6'>
            {['klaviyo', 'hubspot', 'postmark'].map((gateway) => (
              <div key={gateway} className='flex-shrink-0'>
                <GatewayLogo app={gateway as GatewayType} width={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
