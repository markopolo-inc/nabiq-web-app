import {
  FiBarChart04,
  FiDotsVertical,
  FiMail01,
  FiMessageDotCircle,
  FiSearchLg,
  FiTrash,
  FiWhatsApp,
} from '@nabiq-icons';
import {
  Badge,
  Button,
  ConfirmationModal,
  Group,
  Menu,
  OptionTabs,
  Stack, // Switch,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Text,
  TextInput,
  Th,
  Tooltip,
  UnstyledButton,
} from '@nabiq-ui';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { Fragment, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ICampaignItem } from 'src/interfaces/modules/campaign';
import { useDeleteCampaignConfigMutation } from 'src/store/campaign/campaignApi';

// import { useCampaignDispatch } from 'src/store/hooks';

type ActivatedTabsType = 'all' | ICampaignItem['status'];

const CAMPAIGN_TABLE_HEADERS: string[] = [
  // 'Status',
  'campaigns.name',
  'campaigns.medium',
  'campaigns.leads',
  'campaigns.date_created',
  'campaigns.conversion_level',
  'campaigns.actions',
];

const colorMap = {
  high: 'success',
  medium: 'warning',
  low: 'error',
};

export const CampaignTable = ({
  list,
  refetch,
}: {
  list: ICampaignItem[];
  refetch: () => void;
}) => {
  const { t } = useTranslation();
  const [showDisconnectModal, setShowDisconnectModal] = useState<boolean>(false);
  const [campaignId, setCampaignId] = useState<null | string>(null);
  const navigate = useNavigate();
  // const dispatchCampaign = useCampaignDispatch();
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

  const handleDeleteCampaign = async () => {
    setShowDisconnectModal(true);
  };

  const handleDelete = async () => {
    if (!campaignId) return;

    const res = await deleteConfig(campaignId).unwrap();
    if (res.success) {
      setShowDisconnectModal(false);
      refetch();
    }
  };

  const banner = (
    <Stack gap={0}>
      <Group className='flex gap-2 items-center px-8 py-5 border-b border-b-gray-200'>
        <Text className='text-gray-900 font-semibold text-lg'>{t('campaigns_page.campaigns')}</Text>

        <Badge color='blue' size='sm'>
          {filteredList.length || 0} {t('navigation.nav_campaigns')}
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
              { value: 'all', label: t('campaigns_page.all') },
              { value: 'active', label: t('campaigns_page.active') },
              { value: 'processing', label: t('campaigns_page.processing') },
              { value: 'finished', label: t('campaigns_page.finished') },
            ]}
          />
          <TextInput
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            styles={{ input: { paddingLeft: 50 } }}
            leftSection={<FiSearchLg size={18} color='#697586' />}
            leftSectionWidth={40}
            leftSectionPointerEvents='none'
            className='w-[400px]'
            placeholder={`${t('campaigns_page.search')}...`}
          />
        </Group>
      </Stack>
    </Stack>
  );

  return (
    <Fragment>
      <Table banner={banner} withBanner>
        {filteredList.length > 0 && (
          <TableHead>
            <TableRow>
              {CAMPAIGN_TABLE_HEADERS.map((item, idx) => (
                <Th key={idx}>
                  <div className='flex items-center gap-1'>
                    <div className='text-xs font-medium text-gray-600'>{t(item)}</div>
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
                <Stack align='center' gap={16}>
                  {list.length !== 0 ? (
                    <div className='border border-gray-200 shadow-xs rounded-[10px] p-[11px]'>
                      <FiSearchLg size={24} color='#364152' />
                    </div>
                  ) : (
                    <></>
                  )}
                  <Stack align='center' gap={4}>
                    <p className='text-gray-900 font-semibold text-base'>
                      {list.length === 0
                        ? t('campaigns_page.no_campaigns_created')
                        : t('campaigns_page.no_campaigns_found')}
                    </p>
                    <p className='text-gray-600 text-sm'>
                      {list.length === 0
                        ? t('campaigns_page.created_campaigns')
                        : t('campaigns_page.filtered_campaigns')}
                    </p>
                  </Stack>
                </Stack>
              </Td>
            </TableRow>
          ) : (
            filteredList.map((item, idx) => (
              <TableRow key={idx} className='odd:!bg-gray-50 even:!bg-white hover:!bg-primary-100'>
                {/* <Td className='py-4 px-6'>
                  <Stack align='left' gap={4}>
                    <Switch checked={idx % 2 === 0} />
                  </Stack>
                </Td> */}
                <Td className='py-4 px-6'>
                  <Stack align='left' gap={4}>
                    <div className='text-sm font-medium text-gray-900'>{item.name}</div>
                    <Tooltip label={item.details}>
                      <div className='text-xs font-medium text-gray-600 truncate w-[234px]'>
                        {item.details}
                      </div>
                    </Tooltip>
                  </Stack>
                </Td>

                <Td className='py-4 px-6'>
                  <Stack align='left' gap={4} className='flex-row'>
                    {item.isWA ? (
                      <div className='p-2'>
                        <FiWhatsApp size={22} />
                      </div>
                    ) : (
                      <>
                        <div className='p-2'>
                          <FiMail01 size={20} color='#475467' />
                        </div>
                        <div className='p-2'>
                          <FiMessageDotCircle size={20} color='#475467' />
                        </div>
                      </>
                    )}
                  </Stack>
                </Td>

                <Td className='py-4 px-6'>
                  <Stack align='left'>-</Stack>
                </Td>

                <Td className='py-4 px-6'>
                  <Stack align='left' gap={4}>
                    {moment(item.createdAt).format('MMM DD, YYYY [at] hh:mm a')}
                  </Stack>
                </Td>

                <Td className='py-4 px-6'>
                  <Stack align='left' gap={4}>
                    {item?.conversionLevel ? (
                      <Badge color={colorMap?.[item?.conversionLevel?.toLowerCase()]}>
                        {capitalize(item?.conversionLevel)}
                      </Badge>
                    ) : (
                      <div className='text-xs font-medium text-gray-600'>-</div>
                    )}
                  </Stack>
                </Td>

                <Td className='py-4 px-6'>
                  <Stack align='center' className='flex-row' gap={12}>
                    <Button
                      variant='secondary-black'
                      onClick={() =>
                        navigate(`/campaigns/details/${item.resourceId}?name=${item.name}`)
                      }
                    >
                      {t('campaigns_page.details')}
                    </Button>
                    <Button
                      variant='secondary'
                      onClick={() =>
                        navigate(
                          `/campaigns/report/${item.resourceId}?name=${item.name}&createdAt=${item.createdAt}`,
                        )
                      }
                    >
                      <FiBarChart04 color='#364152' size={20} />
                    </Button>

                    <Menu width={240} position='bottom-end'>
                      <Menu.Target>
                        <UnstyledButton>
                          <FiDotsVertical size={20} color='#475467' style={{ cursor: 'pointer' }} />
                        </UnstyledButton>
                      </Menu.Target>

                      <Menu.Dropdown className='!py-[1px] !px-0 !rounded-2xl border-gray-200'>
                        <Menu.Item
                          className='!rounded-2xl py-2.5 px-4'
                          leftSection={<FiTrash size={20} color='#F04438' />}
                          onClick={() => {
                            setCampaignId(item.resourceId);
                            handleDeleteCampaign();
                          }}
                          disabled={isLoading}
                        >
                          {t('campaigns_page.delete')}
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Stack>
                </Td>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <ConfirmationModal
        title={t('campaigns_page.confirm_delete_campaign')}
        showModal={showDisconnectModal}
        setShowModal={setShowDisconnectModal}
        onConfirm={handleDelete}
      />
    </Fragment>
  );
};
