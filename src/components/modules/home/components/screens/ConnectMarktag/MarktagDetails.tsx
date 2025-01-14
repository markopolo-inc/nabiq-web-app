import { Command, FiPlatformIcon } from '@nabiq-icons';
import { Badge, Button, Group, Select, Stack, Text } from '@nabiq-ui';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getPlatformConnectionStatus } from 'src/lib/platform.lib';
import { useUpdateSettingMutation } from 'src/store/company/companyApi';
import { useAppSelector } from 'src/store/hooks.ts';
import {
  MarktagsResponseInterface,
  useConnectMarktagMutation,
  useGetBrandsListQuery,
  useLazyGetMarktagUnderBrandQuery,
} from 'src/store/marktag/marktagApi.ts';

type MarktagsType = MarktagsResponseInterface;

export const MarktagDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const company = useAppSelector((state) => state.company);
  const { connectedBrand } = useAppSelector((state) => state.brand);

  const [resourceId, setResourceId] = useState<string>(connectedBrand?.resourceId || '');
  const [marktagsResourceId, setMarktagsResourceId] = useState<string>('');
  const [marktags, setMarktags] = useState<MarktagsType[]>([]);

  const { data: brandsList, isLoading: isLoadingBrandList } = useGetBrandsListQuery();
  const [getMarktag, { isLoading: isLoadingMarktag }] = useLazyGetMarktagUnderBrandQuery();
  const [connect] = useConnectMarktagMutation();
  const [updateSetting] = useUpdateSettingMutation();

  useEffect(() => {
    if (resourceId) {
      getMarktag(resourceId)
        .unwrap()
        .then((response) => {
          setMarktags(response);
        });
    }
  }, [resourceId]);

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

  const platforms = getPlatformConnectionStatus(selectedBrand?.connectedAccounts);

  const marktagsListOptions = useMemo(
    () =>
      marktags?.map(({ hostname: label, resourceId: value }) => ({
        label,
        value,
      })),
    [marktags],
  );

  const selectedMarktag = useMemo(
    () => marktags?.find((item) => item.resourceId === marktagsResourceId),
    [marktagsListOptions, marktagsResourceId],
  );

  const handleConnect = async () => {
    if (!resourceId || !marktagsResourceId) return;

    const res = await connect(selectedMarktag);
    if (res?.data?.success) {
      // save connected platfroms of the selected brand
      if (platforms.filter((item) => item.isConnected).length > 0) {
        const brandPayload = {
          resourceId: selectedBrand.resourceId,
          companyId: selectedBrand.companyId,
          brandName: selectedBrand.brandName,
          brandWebsite: selectedBrand.brandWebsite,
          brandLogo: selectedBrand.brandInfo.brandLogo,
          connectedAccounts: {
            facebookAd: selectedBrand.connectedAccounts?.facebookAd || null,
            googleAd: selectedBrand.connectedAccounts?.googleAd || null,
          },
        };

        updateSetting({ connectedBrand: brandPayload }).unwrap();
      }

      navigate('/');
    }
  };

  return (
    <div className='px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32'>
      <div className='mx-auto lg:max-w-md lg:mx-0 space-y-5'>
        <Text className='display-sm font-medium text-gray-900 mb-7'>
          {t('settings.business_desc')}
        </Text>

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
          label={t('connect_marktag.brand')}
          placeholder={t('connect_marktag.select_brand')}
          value={resourceId}
          onChange={(brandItem) => {
            setMarktagsResourceId('');
            setResourceId(brandItem);
          }}
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

        <Select
          className='mb-0'
          label={t('connect_marktag.marktag')}
          placeholder={t('connect_marktag.select_marktag_container')}
          defaultValue={t('connect_marktag.select_marktag_container')}
          value={marktagsResourceId}
          onChange={setMarktagsResourceId}
          data={marktagsListOptions}
          leftSection={<Command size={20} />}
          disabled={isLoadingMarktag}
        />

        {!isLoadingBrandList && brandsListOptions?.length === 0 && (
          <Group gap={6}>
            <Text size='14px' weight={500} className='text-red-500 leading-5'>
              {t('connect_marktag.no_brands_found')}
            </Text>
            <Button
              size='sm'
              variant='link'
              onClick={() => {
                window.open(
                  'https://app.markopolo.ai/login?redirect_uri=https://app.markopolo.ai/brand/dashboard',
                  '_blank',
                );
              }}
            >
              {t('connect_marktag.create_brand')}
            </Button>
          </Group>
        )}

        {resourceId &&
          !isLoadingBrandList &&
          platforms?.filter((item) => item.isConnected).length > 0 && (
            <Stack gap={12}>
              <Text size='14px' className='text-gray-600 leading-5'>
                {t('connect_marktag.auto_connect_ad_accounts')}
              </Text>
              <div className='flex gap-4'>
                {platforms
                  ?.filter((item) => item.isConnected)
                  ?.map((item) => (
                    <Badge
                      key={item.id}
                      color='gray'
                      variant='filled'
                      size='lg'
                      className='px-3 py-1.5'
                    >
                      <FiPlatformIcon platform={item.gateway} size={14} />
                      <Text size='14px' weight={500} className='text-gray-600'>
                        {item.name}
                      </Text>
                    </Badge>
                  ))}
              </div>
            </Stack>
          )}

        <Button
          className='w-full !mt-12'
          variant={!resourceId || !marktagsResourceId ? 'secondary' : 'primary'}
          disabled={!resourceId || !marktagsResourceId}
          onClick={handleConnect}
        >
          {t('home_page.common_connect')}
        </Button>
      </div>
    </div>
  );
};
