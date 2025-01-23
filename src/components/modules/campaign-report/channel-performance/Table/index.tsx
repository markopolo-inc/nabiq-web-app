import { Table, TableBody, TableHead, TableRow, Th } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

const CHANNEL_PERFORMANCE_TABLE_HEADER: string[] = [
  'create_campaign.channels',
  'campaign_report.open_rate',
  'campaign_report.link_clicks',
  'campaign_report.conversion_rate',
  'campaign_report.engagement',
  'campaign_report.revenue',
  'CTR',
];

export const ChannelPerformanceTable = () => {
  const { t } = useTranslation();
  return (
    <Table>
      <TableHead>
        <TableRow>
          {CHANNEL_PERFORMANCE_TABLE_HEADER.map((item, idx) => (
            <Th key={idx}>
              <div className='flex items-center gap-1'>
                <div className='text-xs font-medium text-gray-600'>{t(item)}</div>
              </div>
            </Th>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {/*{filteredList.length === 0 ? (*/}
        {/*  <TableRow>*/}
        {/*    <Td className='py-10 px-8' colSpan={7}>*/}
        {/*      <Stack align='center' gap={16}>*/}
        {/*        {list.length !== 0 ? (*/}
        {/*          <div className='border border-gray-200 shadow-xs rounded-[10px] p-[11px]'>*/}
        {/*            <FiSearchLg size={24} color='#364152' />*/}
        {/*          </div>*/}
        {/*        ) : (*/}
        {/*          <></>*/}
        {/*        )}*/}
        {/*        <Stack align='center' gap={4}>*/}
        {/*          <p className='text-gray-900 font-semibold text-base'>*/}
        {/*            No campaigns {list.length === 0 ? 'created yet' : 'found!'}*/}
        {/*          </p>*/}
        {/*          <p className='text-gray-600 text-sm'>*/}
        {/*            Your {list.length === 0 ? 'created' : 'filtered'} campaigns will show up here.*/}
        {/*          </p>*/}
        {/*        </Stack>*/}
        {/*      </Stack>*/}
        {/*    </Td>*/}
        {/*  </TableRow>*/}
        {/*) : (*/}
        {/*  filteredList.map((item, idx) => (*/}
        {/*    <TableRow key={idx} className='odd:!bg-gray-50 even:!bg-white hover:!bg-primary-100'>*/}
        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left' gap={4}>*/}
        {/*          <Switch checked={idx % 2 === 0} />*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}
        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left' gap={4}>*/}
        {/*          <div className='text-sm font-medium text-gray-900'>{item.name}</div>*/}
        {/*          <Tooltip label={item.details}>*/}
        {/*            <div className='text-xs font-medium text-gray-600 truncate w-[234px]'>*/}
        {/*              {item.details}*/}
        {/*            </div>*/}
        {/*          </Tooltip>*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}

        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left' gap={4} className='flex-row'>*/}
        {/*          <div className='p-2'>*/}
        {/*            <FiMail01 size={20} color='#475467' />*/}
        {/*          </div>*/}
        {/*          <div className='p-2'>*/}
        {/*            <FiMessageDotCircle size={20} color='#475467' />*/}
        {/*          </div>*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}

        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left'>1119/13000</Stack>*/}
        {/*      </Td>*/}

        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left' gap={4}>*/}
        {/*          {moment(item.createdAt).format('MMM DD, YYYY [at] hh:mm a')}*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}

        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='left' gap={4}>*/}
        {/*          <Badge color={(colorMap?.[item.status] as 'success') || 'success'}>*/}
        {/*            {capitalize('High')}*/}
        {/*          </Badge>*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}

        {/*      <Td className='py-4 px-6'>*/}
        {/*        <Stack align='center' className='flex-row' gap={12}>*/}
        {/*          <Button*/}
        {/*            variant='secondary-black'*/}
        {/*            onClick={() => navigate(`/campaigns/details/${item.resourceId}`)}*/}
        {/*          >*/}
        {/*            Details*/}
        {/*          </Button>*/}
        {/*          <Button*/}
        {/*            variant='secondary'*/}
        {/*            onClick={() =>*/}
        {/*              navigate(`/campaigns/report/${item.resourceId}?name=${item.name}`)*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <FiBarChart04 color='#364152' size={20} />*/}
        {/*          </Button>*/}

        {/*          <Menu width={240} position='bottom-end'>*/}
        {/*            <Menu.Target>*/}
        {/*              <UnstyledButton>*/}
        {/*                <FiDotsVertical size={20} color='#475467' style={{ cursor: 'pointer' }} />*/}
        {/*              </UnstyledButton>*/}
        {/*            </Menu.Target>*/}

        {/*            <Menu.Dropdown className='!py-[1px] !px-0 !rounded-2xl border-gray-200'>*/}
        {/*              <Menu.Item*/}
        {/*                className='!rounded-2xl py-2.5 px-4'*/}
        {/*                leftSection={<FiTrash size={20} color='#F04438' />}*/}
        {/*                onClick={() => {*/}
        {/*                  setCampaignId(item.resourceId);*/}
        {/*                  handleDeleteCampaign();*/}
        {/*                }}*/}
        {/*                disabled={isLoading}*/}
        {/*              >*/}
        {/*                Delete*/}
        {/*              </Menu.Item>*/}
        {/*            </Menu.Dropdown>*/}
        {/*          </Menu>*/}
        {/*        </Stack>*/}
        {/*      </Td>*/}
        {/*    </TableRow>*/}
        {/*  ))*/}
        {/*)}*/}
      </TableBody>
    </Table>
  );
};
