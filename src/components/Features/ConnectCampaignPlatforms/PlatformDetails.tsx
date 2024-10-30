import { FiPlatformIcon } from '@nabiq-icons';
import { Button, Select, Stack, Text } from '@nabiq-ui';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateSettingMutation } from 'src/store/company/companyApi';
import { useAppSelector } from 'src/store/hooks.ts';
import { useGetBrandsListQuery } from 'src/store/marktag/marktagApi.ts';

const PlatformDetails = () => {
  const navigate = useNavigate();
  const [updateSetting] = useUpdateSettingMutation();
  const user = useAppSelector((state) => state.user);
  const company = useAppSelector((state) => state.company);
  const { connectedBrand } = useAppSelector((state) => state.brand);
  const [resourceId, setResourceId] = useState<string>(connectedBrand?.resourceId || '');

  const { data: brandsList, isLoading: isLoadingBrandList } = useGetBrandsListQuery();

  const brandsListOptions = useMemo(
    () =>
      brandsList?.map(({ brandName: label, resourceId: value }) => ({
        label,
        value,
      })),
    [brandsList],
  );

  const selectedBrand = useMemo(
    () => brandsList?.find((item) => item.resourceId === resourceId),
    [brandsList, resourceId],
  );

  const platforms = [
    {
      id: 1,
      name: 'facebook',
      isConnected: selectedBrand?.connectedAccounts?.facebookAd?.id?.length,
    },
    {
      id: 2,
      name: 'google',
      isConnected: selectedBrand?.connectedAccounts?.googleAd?.id?.length,
    },
  ];

  const handleConnect = async () => {
    if (!resourceId) return;

    if (platforms.filter((item) => item.isConnected).length > 0) {
      const brandPayload = {
        resourceId: selectedBrand.resourceId,
        companyId: selectedBrand.companyId,
        brandName: selectedBrand.brandName,
        brandWebsite: selectedBrand.brandWebsite,
        brandLogo: selectedBrand.brandInfo.brandLogo,
        connectedAccounts: selectedBrand.connectedAccounts,
      };

      updateSetting({ connectedBrand: brandPayload }).unwrap();
      navigate('/');
    } else {
      window.open('https://app.markopolo.ai/brand/dashboard', '_blank');
    }
  };

  return (
    <div className='px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32'>
      <div className='mx-auto lg:max-w-md lg:mx-0 space-y-5'>
        <Text className='display-sm font-medium text-gray-900 mb-7'>Your business details</Text>

        <div className='flex gap-3'>
          <div className='py-1 px-3 border border-primary-200 rounded-2xl'>
            <Text size='14px' weight={500} className='text-primary-700 leading-5'>
              {company?.companyName}
            </Text>
          </div>

          <div className='py-1 px-3 border border-primary-200 rounded-2xl'>
            <Text size='14px' weight={500} className='text-primary-700 leading-5'>
              {user?.userEmail}
            </Text>
          </div>
        </div>

        <Select
          className='mb-0'
          label='Brand'
          placeholder='Select brand'
          value={resourceId}
          onChange={(brandItem) => setResourceId(brandItem)}
          data={brandsListOptions}
          leftSection={
            resourceId && (
              <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-semibold leading-4'>
                {selectedBrand?.brandName?.charAt(0)?.toUpperCase()}
              </div>
            )
          }
          disabled={isLoadingBrandList}
        />

        {resourceId && !isLoadingBrandList ? (
          platforms.filter((item) => item.isConnected).length > 0 ? (
            <Stack gap={12}>
              <Text size='14px' weight={500} className='text-gray-700 leading-5'>
                Connected platforms
              </Text>
              <div className='flex gap-4'>
                {platforms
                  .filter((item) => item.isConnected)
                  .map((item) => (
                    <div key={item.id}>
                      <FiPlatformIcon platform={item.name} size={20} />
                    </div>
                  ))}
              </div>
            </Stack>
          ) : (
            <Text size='14px' weight={500} className='text-red-500 leading-5'>
              No connected platform found!
            </Text>
          )
        ) : null}

        <Button className='w-full !mt-12' disabled={!resourceId} onClick={handleConnect}>
          Connect
        </Button>
      </div>
    </div>
  );
};

export default PlatformDetails;
