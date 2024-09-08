import { ArrowNarrowDown, FiPen, FiTrash } from '@nabiq-icons';
import {
  Badge,
  Group,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  TextInput,
  Th,
} from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { useMemo, useState } from 'react';
import OptionTabs from 'src/components/UI/components/OptionTabs';
import { CampaignItemInterface } from 'src/interfaces/campaign.interface.ts';
import { useAppSelector } from 'src/store/hooks.ts';

type ActivatedTabsType = 'all' | CampaignItemInterface['status'];

const CAMPAIGN_TABLE_HEADERS: string[] = [
  'Campaign name',
  'Status',
  'Last modified',
  'Date created',
];

const colorMap = {
  processing: 'warning',
  active: 'success',
};

const CampaignTable = () => {
  const { list } = useAppSelector((state) => state.campaign);

  const [active, setActive] = useState<ActivatedTabsType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredList = useMemo(
    () =>
      list.filter((item) => {
        const statusMatch = active === 'all' || item.status === active;

        const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return statusMatch && nameMatch;
      }),
    [active, searchTerm, list],
  );

  const banner = (
    <Stack gap={0}>
      <Group className='flex gap-2 items-center px-8 py-5 border-b border-b-gray-200'>
        <p className='text-gray-900 font-semibold text-lg'>Campaign</p>

        <Badge color='blue' size='sm'>
          {list.length ?? 0} campaigns
        </Badge>
        {/* <div className="rounded-2xl border border-primary-200 py-0.5 px-2 text-xs font-medium text-primary-700">
          {list.length ?? 0} campaigns
        </div> */}
      </Group>
      <Stack className='py-3 px-4'>
        <Group justify='space-between'>
          <OptionTabs
            active={active}
            setActive={(value: ActivatedTabsType) => {
              setSearchTerm('');
              setActive(value);
            }}
            options={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'processing', label: 'Processing' },
              { value: 'finished', label: 'Finished' },
            ]}
          />
          <TextInput
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            // styles={{ input: { paddingLeft: 40 } }}
            // leftSection={<FiSearchLg size={26} color="#697586" />}
            // leftSectionPointerEvents="none"
            className='w-[400px]'
            placeholder='Search...'
          />
        </Group>
      </Stack>
    </Stack>
  );
  return (
    <Table banner={banner} withBanner>
      <TableHead>
        <TableRow>
          {CAMPAIGN_TABLE_HEADERS.map((item) => (
            <Th key={item}>
              <div className='flex items-center gap-1'>
                <div className='text-xs font-medium text-gray-600'>{item}</div>
                <ArrowNarrowDown size={16} color='#475467' />
              </div>
            </Th>
          ))}
        </TableRow>

        <Th></Th>
      </TableHead>
      <TableBody>
        {filteredList.map((item) => {
          return (
            <TableRow>
              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  <div className='text-sm font-medium text-gray-900'>{item.name}</div>
                  <div className='text-xs font-medium text-gray-600'>{item.details}</div>
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
                  {moment(item.updatedAt).format('MMM DD, YYYY [at] hh:mm a')}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='left' gap={4}>
                  {moment(item.createdAt).format('MMM DD, YYYY [at] hh:mm a')}
                </Stack>
              </Td>

              <Td className='py-4 px-6'>
                <Stack align='center' gap={4} className='flex-row justify-center'>
                  <div className='p-3 hover:cursor-pointer'>
                    <FiTrash size={20} color='#475467' />
                  </div>

                  <div className='p-3 hover:cursor-pointer'>
                    <FiPen size={20} color='#475467' />
                  </div>
                  <div></div>
                </Stack>
              </Td>
            </TableRow>
          );
        })}
        {filteredList.length === 0 ? (
          <TableRow>
            <Td className='py-4 px-6' colSpan={7}>
              <Stack align='center' gap={4}>
                <p className='text-gray-900 font-semibold text-base'>No campaigns created yet</p>
                <p className='text-gray-600 text-sm'>Your created campaigns will show up here.</p>
              </Stack>
            </Td>
          </TableRow>
        ) : (
          <></>
        )}
      </TableBody>
    </Table>
  );
};

export default CampaignTable;
