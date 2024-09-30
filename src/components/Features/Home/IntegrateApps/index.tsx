import { FiZap } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import GatewayLogo from 'src/components/UI/GatewayLogo';
import type { GatewayType } from 'src/interfaces/brand.interface';
import { appOptions } from 'src/lib/integration.lib';
import { useAppSelector } from 'src/store/hooks';

const IntegrateApps = () => {
  const navigate = useNavigate();
  const { emailIntegrations, smsIntegrations } = useAppSelector((state) => state.brand);

  const connectedGateways = appOptions.filter((gateway) => {
    return (
      (gateway.category === 'email' && !isEmpty(emailIntegrations?.[gateway?.gateway])) ||
      (gateway.category === 'sms' && !isEmpty(smsIntegrations?.[gateway?.gateway]))
    );
  });

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
            <div className='flex flex-wrap justify-end gap-4 w-4/6'>
              {connectedGateways.map((gateway) => (
                <div key={gateway.gateway} className='flex-shrink-0'>
                  <GatewayLogo app={gateway.gateway as GatewayType} width={20} />
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
