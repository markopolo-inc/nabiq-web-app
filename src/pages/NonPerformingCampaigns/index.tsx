import {
  Breadcrumbs,
  Button,
  Group,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Th, // useGetColors,
} from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import { useGetLowMonitoringCampaignQuery } from 'src/store/monitoring/monitoring.api.ts';
import { formatMetricUnit } from 'src/utils/string.utils.ts';

const NonPerformingCampaigns = () => {
  // const { error500 } = useGetColors();
  const navigate = useNavigate();

  const { data } = useGetLowMonitoringCampaignQuery();
  const campaigns = data?.data?.campaigns || [];

  const banner = (
    <Group className='py-[20px] px-6' justify='space-between'>
      <p className='text-gray-900 text-lg font-semibold'>Non performing campaigns</p>
    </Group>
  );

  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Non performing campaigns</p>
            <p className='text-gray-600 text-base font-normal'>
              List of non performing campaigns and their metrics.
            </p>
          </Stack>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Group>
      </Stack>

      <Table banner={banner} withBanner striped>
        <TableHead>
          <TableRow>
            <Th>Campaign name</Th>
            <Th>Impressions</Th>
            <Th>Clicks</Th>
            <Th>Conversion rate</Th>
            <Th>Engagement</Th>
            <Th>Revenue</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((item, idx) => (
            <TableRow key={idx}>
              <Td>
                <p>{item.name}</p>
                <p>{item.type}</p>
              </Td>
              <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Impressions').value,
                  item?.metrics?.find((metric) => metric?.name === 'Impressions').type,
                )}
              </Td>
              <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Clicks').value,
                  item?.metrics?.find((metric) => metric?.name === 'Clicks').type,
                )}
              </Td>
              <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Conversion Rate').value,
                  item?.metrics?.find((metric) => metric?.name === 'Conversion Rate').type,
                )}
                {/*<div className='w-max flex gap-3 items-center justify-center px-1.5 py-0.5 border border-error-200 rounded-2xl bg-error-50'>*/}
                {/*  <ArrowDown size={12} color={error500} />*/}
                {/*  <div className='text-xs font-medium text-error-700'>0.47%</div>*/}
                {/*</div>*/}
              </Td>
              <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Engagement').value,
                  item?.metrics?.find((metric) => metric?.name === 'Engagement').type,
                )}
              </Td>
              <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Revenue').value,
                  item?.metrics?.find((metric) => metric?.name === 'Revenue').type,
                )}
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default NonPerformingCampaigns;
