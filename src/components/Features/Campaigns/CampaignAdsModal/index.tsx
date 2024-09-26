import { ArrowNarrowDown } from '@nabiq-icons';
import {
  Badge,
  Button,
  Group,
  Modal,
  OptionTabs,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Text,
  Th,
} from '@nabiq-ui';
import { capitalize } from 'lodash';
import React, { useState } from 'react';

type PlatformType = 'facebook' | 'google';

const ADS_TABLE_HEADERS: string[] = ['Ads name', 'Status', 'CTR', 'CVR', 'CPC', 'ROAS'];

const colorMap = {
  processing: 'warning',
  active: 'success',
};

const ModalBody = ({ setOpened }) => {
  const list = [
    {
      name: 'holiday campaign ad',
      type: 'image',
      status: 'active',
      CTR: 34,
      CVR: 23,
      CPC: 67,
      ROAS: 24,
    },
  ];

  const [platform, setPlatform] = useState<string>('facebook');

  const banner = (
    <Stack gap={0}>
      <Stack className='px-8 py-5 border-b border-b-gray-200'>
        <Group justify='space-between'>
          <Group gap={8}>
            <Text className='text-gray-900 font-semibold text-lg'>Ads</Text>
            <Badge color='blue' size='sm'>
              {list.length ?? 0} ads
            </Badge>
          </Group>

          <Group gap={12}>
            <Button variant='secondary' size='md' onClick={() => setOpened(false)}>
              Cancle
            </Button>
            <Button size='md'>Confirm</Button>
          </Group>
        </Group>
      </Stack>
      <Stack className='py-3 px-4'>
        <OptionTabs
          active={platform}
          setActive={(value: PlatformType) => setPlatform(value)}
          options={[
            { value: 'facebook', label: 'Facebook' },
            { value: 'google', label: 'Google' },
          ]}
        />
      </Stack>
    </Stack>
  );

  return (
    <Table banner={banner} withBanner>
      {list.length > 0 && (
        <TableHead>
          <TableRow>
            {ADS_TABLE_HEADERS.map((item) => (
              <Th key={item}>
                <div className='flex items-center gap-1'>
                  <div className='text-xs font-medium text-gray-600'>{item}</div>
                  {item?.length ? <ArrowNarrowDown size={16} color='#475467' /> : null}
                </div>
              </Th>
            ))}
          </TableRow>
        </TableHead>
      )}

      <TableBody>
        {list.length === 0 ? (
          <TableRow>
            <Td className='py-10 px-8' colSpan={7}>
              <Stack align='center' gap={4}>
                <p className='text-gray-900 font-semibold text-base'>No ads found!</p>
                <p className='text-gray-600 text-sm'>Your {platform} ads will show up here.</p>
              </Stack>
            </Td>
          </TableRow>
        ) : (
          list.map((item) => (
            <TableRow>
              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  <div className='text-sm font-medium text-gray-900'>{item.name}</div>
                  <div className='text-xs font-medium text-gray-600'>{item.type}</div>
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  <Badge color={(colorMap?.[item.status] as 'gray') || 'gray'}>
                    {capitalize(item.status)}
                  </Badge>
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item.CTR}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item.CVR}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item.CPC}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {item.ROAS}
                </Stack>
              </Td>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

const CampaignAdsModal: React.FC<{
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

export default CampaignAdsModal;
