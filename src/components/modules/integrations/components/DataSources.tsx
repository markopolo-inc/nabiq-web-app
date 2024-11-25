import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo } from '@nabiq-ui';
import { DataSourceModal } from 'components/modules/integrations';
import { useAppSelector } from 'src/store/hooks';
import { getAuthToken } from 'src/utils/auth';
import { buildQueryString } from 'src/utils/string.utils';

export const DataSources = () => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);

  return (
    <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      <div
        className='rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8'
        key='hubspot'
      >
        <div>
          <div className='flex gap-6 justify-between items-center'>
            <div className='flex items-center gap-3'>
              <GatewayLogo app='hubspot' width={32} />
              <p className='text-gray-900 font-semibold text-lg'>Hubspot</p>
            </div>
          </div>

          <p className='mt-6 text-gray-600 font-normal text-sm'>
            Empower your business growth through comprehensive CRM platform that integrates
            marketing, sales, and customer service tools.
          </p>
        </div>
        {!datasourceIntegrations?.connectedAccounts?.hubspot ? (
          <Button
            className='!w-40'
            leadingIcon={<FiZap fill='white' size={22} />}
            onClick={async () => {
              const token = await getAuthToken();
              window.location.href = `${
                import.meta.env.VITE_BASE_API_URL
              }/datasource/integrate-using-oauth?${buildQueryString({
                brandId,
                token,
                platform: 'hubspot',
                redirectUrl: window.location.href,
              })}`;
            }}
          >
            Integrate
          </Button>
        ) : (
          <DataSourceModal />
        )}
      </div>
    </div>
  );
};
