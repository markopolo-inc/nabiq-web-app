import { ArrowNarrowDown, FiSearchLg, FiTrash } from '@nabiq-icons';
import {
  Badge,
  Button,
  Group,
  OptionTabs,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Text,
  TextInput,
  Th,
} from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ICampaignItem } from 'src/interfaces/modules/campaign';
import { useDeleteCampaignConfigMutation } from 'src/store/campaign/campaignApi';
import { setCampaign } from 'src/store/campaign/campaignSlice';

type ActivatedTabsType = 'all' | ICampaignItem['status'];

const CAMPAIGN_TABLE_HEADERS: string[] = [
  'Campaign name',
  'Status',
  'Last modified',
  'Date created',
  '',
];

const colorMap = {
  processing: 'warning',
  active: 'success',
};

export const CampaignTable = ({ list, refetch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteConfig, { isLoading }] = useDeleteCampaignConfigMutation();

  const [active, setActive] = useState<ActivatedTabsType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredList = useMemo(
    () =>
      list?.filter((item) => {
        const statusMatch = active === 'all' || item.status === active;

        const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return statusMatch && nameMatch;
      }),
    [active, searchTerm, list],
  );

  const handleEditCampaign = ({ campaignId }) => {
    const selectedCampaign = list?.find((item) => item.resourceId === campaignId);
    const {
      createdAt: _createdAt,
      funnels: _funnels,
      job: _job,
      resourceType: _resourceType,
      status: _status,
      updatedAt: _updatedAt,
      ...payload
    } = selectedCampaign;

    dispatch(
      setCampaign({
        ...payload,
      }),
    );
    navigate('/campaigns/create-campaign');
  };

  const handleDeleteCampaign = async ({ campaignId }) => {
    if (!window.confirm('Are you want to delete this campaign?')) return;

    const res = await deleteConfig(campaignId).unwrap();
    if (res.success) {
      refetch();
    }
  };

  const banner = (
    <Stack gap={0}>
      <Group className='flex gap-2 items-center px-8 py-5 border-b border-b-gray-200'>
        <Text className='text-gray-900 font-semibold text-lg'>Campaign</Text>

        <Badge color='blue' size='sm'>
          {filteredList.length || 0} campaigns
        </Badge>
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
            styles={{ input: { paddingLeft: 40 } }}
            leftSection={<FiSearchLg size={26} color='#697586' />}
            leftSectionWidth={40}
            leftSectionPointerEvents='none'
            className='w-[400px]'
            placeholder='Search...'
          />
        </Group>
      </Stack>
    </Stack>
  );

  return (
    <Table banner={banner} withBanner>
      {filteredList.length > 0 && (
        <TableHead>
          <TableRow>
            {CAMPAIGN_TABLE_HEADERS.map((item, idx) => (
              <Th key={idx}>
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
        {filteredList.length === 0 ? (
          <TableRow>
            <Td className='py-10 px-8' colSpan={7}>
              <Stack align='center' gap={4}>
                <p className='text-gray-900 font-semibold text-base'>
                  No campaigns {list.length === 0 ? 'created yet' : 'found!'}
                </p>
                <p className='text-gray-600 text-sm'>
                  Your {list.length === 0 ? 'created' : 'filtered'} campaigns will show up here.
                </p>
              </Stack>
            </Td>
          </TableRow>
        ) : (
          filteredList.map((item, idx) => (
            <TableRow key={idx}>
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
                  <div
                    className={`p-3 ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => handleDeleteCampaign({ campaignId: item.resourceId })}
                  >
                    <FiTrash size={20} color='#475467' />
                  </div>

                  <Button
                    variant='tertiary'
                    size='sm'
                    onClick={() => handleEditCampaign({ campaignId: item.resourceId })}
                  >
                    View
                  </Button>
                </Stack>
              </Td>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
