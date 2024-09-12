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
  Th,
} from '@nabiq-ui';
import moment from 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';
import MetricsCard from 'src/components/UI/MetricsCard';
import { useGetCampaignDetailsQuery } from 'src/store/monitoring/monitoring.api';
import { formatNumber } from 'src/utils/number';

const TopPerformingCampaignDetails = () => {
  const { campaignId } = useParams();
  const { data, isLoading } = useGetCampaignDetailsQuery(campaignId);
  const navigate = useNavigate();

  const campaignDetails = data?.data || {};

  const metrics = campaignDetails?.metrics || [];
  const steps = campaignDetails?.steps || [];

  const columns = Object.keys(steps?.[0] || {}).filter((item) => item !== 'step');

  const banner = (
    <Group className='py-[20px] px-6' justify='space-between'>
      <p className='text-gray-900 text-lg font-semibold'>{campaignDetails?.name}</p>
    </Group>
  );

  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>{campaignDetails?.name}</p>
            <p className='text-gray-600 text-base font-normal'>
              Created on {moment(campaignDetails.createdAt).format('MMM DD, YYYY at hh:mm a')}
            </p>
          </Stack>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Group>
      </Stack>

      <Group>
        {!isLoading &&
          metrics.map((item) => (
            <MetricsCard
              key={item.name}
              name={item.name}
              change={item.change}
              type={item.type}
              value={item.value}
            />
          ))}
      </Group>

      <Table withBanner banner={banner} striped>
        <TableHead>
          <TableRow>
            <Th>Step</Th>
            {columns?.map((item, idx) => <Th key={idx}>{item}</Th>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {steps.map((item, idx) => (
            <TableRow key={idx}>
              <Td>
                <p>Step {item?.step}</p>
              </Td>
              {columns?.map((metric, i) => <Td key={i}>{formatNumber(item?.[metric])}</Td>)}
              {/* <Td>
                {formatMetricUnit(
                  item?.metrics?.find((metric) => metric?.name === 'Conversion Rate').value,
                  item?.metrics?.find((metric) => metric?.name === 'Conversion Rate').type,
                )}
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
              </Td> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};
export default TopPerformingCampaignDetails;
