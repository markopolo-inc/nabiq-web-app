import { ArrowNarrowDown, FiPlatformIcon } from '@nabiq-icons';
import {
  Badge,
  Button,
  Checkbox,
  Group,
  Modal,
  OptionTabs,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableFoot,
  TableHead,
  TableRow,
  TableRowLoader,
  Td,
  Text,
  Th,
} from '@nabiq-ui';
import { capitalize } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCampaignAdsResultQuery } from 'src/store/campaign/campaignApi';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

type PlatformType = 'facebook' | 'google';

const ADS_TABLE_HEADERS: string[] = ['Ad name', 'Status', 'CPC', 'CTR', 'Clicks', 'Impression'];

const colorMap = {
  INACTIVE: 'warning',
  ACTIVE: 'success',
};

const ModalBody = ({ setOpened }) => {
  const dispatch = useDispatch();
  const { campaign } = useAppSelector((state) => state);
  const [platform, setPlatform] = useState<string>('facebook');
  const [selectedAds, setSelectedAds] = useState<string[]>(
    campaign?.content?.map((item) => item?.id) || [],
  );

  const { isLoading, data } = useGetCampaignAdsResultQuery({
    platform,
    page: 1,
    limit: 10,
  });
  const list = data?.list || [];

  const onSelectAd = ({ value }) => {
    if (selectedAds?.includes(value)) {
      setSelectedAds(selectedAds?.filter((item) => item !== value));
    } else {
      setSelectedAds([...selectedAds, value]);
    }
  };

  const onSelectAllAds = ({ value }) => {
    const allSelected = value?.every((item) => selectedAds?.includes(item));

    if (allSelected) {
      setSelectedAds([]);
    } else {
      const newAds = Array.from(new Set([...selectedAds, ...value]));
      setSelectedAds(newAds);
    }
  };

  const handleConfirm = () => {
    const selectedAdsList = list?.filter((item) => selectedAds?.includes(item?.id));
    dispatch(
      setCampaign({
        content: selectedAdsList?.map((item) => ({
          ...item,
          platform,
        })),
      }),
    );
    setOpened(false);
  };

  const banner = (
    <Stack gap={0}>
      <Stack className='px-8 py-5 border-b border-b-gray-200'>
        <Group justify='space-between'>
          <Group gap={8}>
            <Text className='text-gray-900 font-semibold text-lg'>Import content</Text>
          </Group>

          <Group gap={12}>
            <Button variant='secondary' size='md' onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button
              size='md'
              disabled={isLoading || selectedAds?.length === 0}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </Group>
        </Group>
      </Stack>
      <Stack className='py-3 px-4'>
        <OptionTabs
          active={platform}
          setActive={(value: PlatformType) => setPlatform(value)}
          options={[
            {
              value: 'facebook',
              label: (
                <div className='flex gap-2 items-center'>
                  <FiPlatformIcon platform='facebook' size={18} />
                  Facebook
                </div>
              ),
            },
            {
              value: 'google',
              label: (
                <div className='flex gap-2 items-center'>
                  <FiPlatformIcon platform='google' size={18} />
                  Google
                </div>
              ),
            },
          ]}
        />
      </Stack>
    </Stack>
  );

  return (
    <Table banner={banner} withBanner>
      {list?.length > 0 && (
        <TableHead>
          <TableRow>
            {ADS_TABLE_HEADERS.map((item) => (
              <Th key={item}>
                <div className='flex items-center gap-1'>
                  {item === 'Ad name' && (
                    <Checkbox
                      size='md'
                      checked={list?.every((adItem) => selectedAds?.includes(adItem?.id))}
                      indeterminate={
                        list?.some((adItem) => selectedAds?.includes(adItem?.id)) &&
                        !list?.every((adItem) => selectedAds?.includes(adItem?.id))
                      }
                      onChange={() =>
                        onSelectAllAds({
                          value: list?.map((adItem) => adItem?.id),
                        })
                      }
                    />
                  )}
                  <div
                    className={`text-xs font-medium text-gray-600 ${item === 'Ad name' ? 'ml-2' : ''}`}
                  >
                    {item}
                  </div>

                  {item?.length ? <ArrowNarrowDown size={16} color='#475467' /> : null}
                </div>
              </Th>
            ))}
          </TableRow>
        </TableHead>
      )}

      <TableBody>
        {isLoading ? (
          <TableRow>
            <Td colSpan={7}>
              <TableRowLoader />
            </Td>
          </TableRow>
        ) : list?.length === 0 ? (
          <TableRow>
            <Td className='py-10 px-8' colSpan={7}>
              <Stack align='center' gap={4}>
                <p className='text-gray-900 font-semibold text-base'>No ads found!</p>
                <p className='text-gray-600 text-sm'>Your {platform} ads will show up here.</p>
              </Stack>
            </Td>
          </TableRow>
        ) : (
          list?.map((item) => (
            <TableRow key={item?.id}>
              <Td className='py-4 px-6'>
                <Group gap={12}>
                  <Checkbox
                    size='md'
                    checked={selectedAds?.includes(item?.id)}
                    onChange={() => onSelectAd({ value: item?.id })}
                  />
                  <Stack align='left' gap={4}>
                    <div className='text-sm font-medium text-gray-900'>{item?.title}</div>
                    <div className='text-xs font-medium text-gray-600'>{item?.type}</div>
                  </Stack>
                </Group>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  <Badge color={(colorMap?.[item?.status] as 'gray') || 'gray'}>
                    {capitalize(item?.status)}
                  </Badge>
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item?.metrics?.cpc || '-'}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item?.metrics?.ctr || '-'}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item?.metrics?.clicks || '-'}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item?.metrics?.impressions || '-'}
                </Stack>
              </Td>
            </TableRow>
          ))
        )}
      </TableBody>

      {!isLoading && list?.length ? (
        <TableFoot className='border-t border-gray-300'>
          <TableRow>
            <Td className='py-3 px-6' colSpan={7}>
              <Stack align='flex-end'>
                <Pagination total={1} />
              </Stack>
            </Td>
          </TableRow>
        </TableFoot>
      ) : null}
    </Table>
  );
};

export const CampaignAdsModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      zIndex={999}
      size={1200}
      withNoHeader
      withCloseButton={false}
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
