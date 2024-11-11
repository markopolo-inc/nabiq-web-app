import { Button, Select } from '@nabiq-ui';
import type { IGateway } from 'interfaces/brand.interface';
import React, { SetStateAction, useEffect, useState } from 'react';
import { FiPlatformIcon } from 'src/components/Icons';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetFbAdAccountsQuery,
  useGetGoogleClientsQuery,
} from 'src/store/integrations/integrations.api';

const ModalBody: React.FC<{
  setOpened: React.Dispatch<SetStateAction<boolean>>;
  gateway: IGateway;
}> = ({ setOpened, gateway }) => {
  const [adAccountId, setAdAccountId] = useState<string>('');
  const [adAccountListOptions, setAdAccountListOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data: fbAdAccounts, isLoading: isFbLoading } = useGetFbAdAccountsQuery(
    { brandId },
    { skip: gateway.gateway !== 'facebook' },
  );
  const { data: googleClients, isLoading: isGoogleLoading } = useGetGoogleClientsQuery(
    { brandId },
    { skip: gateway.gateway !== 'google' },
  );

  useEffect(() => {
    if (gateway.gateway === 'facebook') {
      setAdAccountListOptions(fbAdAccounts || []);
      setIsLoading(isFbLoading);
    } else if (gateway.gateway === 'google') {
      setAdAccountListOptions(googleClients || []);
      setIsLoading(isGoogleLoading);
    } else {
      setAdAccountListOptions([]);
      setIsLoading(false);
    }
  }, [gateway.gateway, fbAdAccounts, isFbLoading, googleClients, isGoogleLoading]);

  const handleSubmt = () => {
    // todo: save the ad account details
    setOpened(false);
  };

  return (
    <div className='p-8 flex flex-col gap-5'>
      <div className='flex flex-col gap-4'>
        <FiPlatformIcon platform={gateway.gateway} size={32} />
        <div className='flex flex-col gap-2'>
          <p className='text-gray-900 font-semibold text-[24px]'>Select ad account</p>
          <p className='text-gray-600 font-normal text-base'>
            Select your {gateway.name} ads account.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <Select
          className='mb-0'
          placeholder='Select account'
          defaultValue='Select account'
          value={adAccountId}
          onChange={setAdAccountId}
          data={adAccountListOptions}
          disabled={isLoading}
        />

        <Button fullWidth onClick={handleSubmt}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default ModalBody;
