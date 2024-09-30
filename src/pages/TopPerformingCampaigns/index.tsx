import { FiChevronRight } from '@nabiq-icons';
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
import { useNavigate } from 'react-router-dom';
import { useGetTopPerformingCampaignsQuery } from 'src/store/monitoring/monitoring.api';
import { formatMetricUnit } from 'src/utils/string.utils';

const TopPerformingCampaigns = () => {
  const { data } = useGetTopPerformingCampaignsQuery();
  const navigate = useNavigate();
  const campaigns = data?.data?.campaigns || [];

  const banner = (
    <Group className='py-[20px] px-6' justify='space-between'>
      <p className='text-gray-900 text-lg font-semibold'>Top performing campaigns</p>
    </Group>
  );

  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Top performing campaigns</p>
            <p className='text-gray-600 text-base font-normal'>
              List of top performing campaigns and their metrics.
            </p>
          </Stack>
          <Button size='md' onClick={() => navigate(-1)}>
            Go back
          </Button>
        </Group>
      </Stack>
      <Table banner={banner} withBanner striped>
        <TableHead>
          <TableRow>
            <Th>Campaign name</Th>
            <Th>Conversion rate</Th>
            <Th>Engagement</Th>
            <Th>Revenue</Th>
            <Th />
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((item, idx) => (
            <TableRow key={idx}>
              <Td>
                <p>{item?.name}</p>
                <p>{item?.detail}</p>
              </Td>
              <Td>
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
              </Td>
              <Td>
                <Button
                  variant='link'
                  size='sm'
                  onClick={() =>
                    navigate(
                      `/monitoring/${item.name?.split(' ').join('-')?.toLowerCase()}/breakdown/${item.id}`,
                    )
                  }
                  trailingIcon={<FiChevronRight size={16} />}
                >
                  Breakdown
                </Button>
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default TopPerformingCampaigns;
