import { FiZap } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import GatewayLogo from 'src/components/UI/GatewayLogo';
import type { GatewayType } from 'src/interfaces/brand.interface';

const IntegrateApps = () => {
  const navigate = useNavigate();
  const apps = ['klaviyo', 'hubspot', 'postmark'];
  return (
    <div className='bg-white rounded-xl p-8 shadow-lg'>
      <div className='flex gap-3 flex-nowrap'>
        <div>
          <FiZap size={32} color='#EE46BC' fill='#EE46BC' />
        </div>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>Integrate apps</p>
            <p className='text-gray-600 text-sm font-normal'>
              Integrate email, sms and push notification apps to build custom marketing funnels.
            </p>
          </div>
          <div className='flex gap-3 justify-between items-center'>
            <Button variant='secondary-black' onClick={() => navigate('/integrations')}>
              Integrate
            </Button>
            <div className='flex gap-4'>
              {apps.map((item) => (
                <div key={item}>
                  <GatewayLogo app={item as GatewayType} width={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateApps;
