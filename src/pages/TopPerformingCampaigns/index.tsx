import { FiChevronRight } from '@nabiq-icons';
import {
  Breadcrumbs,
  Button,
  Group,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableLoader,
  TableRow,
  Td,
  Th,
} from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import { useGetTopPerformingCampaignsQuery } from 'src/store/monitoring/monitoring.api';
import { formatMetricUnit } from 'src/utils/string.utils';

const TopPerformingCampaigns = () => {
  const { data, isLoading } = useGetTopPerformingCampaignsQuery();
  const navigate = useNavigate();
  const campaigns = data?.data?.campaigns || [];

  const metrics = data?.data?.campaigns?.[0]?.metrics?.map((item) => item?.name) || [];

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

      {isLoading ? (
        <TableLoader />
      ) : (
        <Table banner={banner} withBanner striped>
          {campaigns.length > 0 && (
            <TableHead>
              <TableRow>
                <Th>Campaign name</Th>
                {metrics.map((metric, _idx) => (
                  <Th key={_idx}>{metric}</Th>
                ))}
                <Th />
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {campaigns.length === 0 ? (
              <TableRow>
                <Td className='py-10 px-8'>
                  <Stack align='center' gap={4}>
                    <p className='text-gray-900 font-semibold text-base'>
                      No top performing campaigns found!
                    </p>
                    <p className='text-gray-600 text-sm'>
                      Your top performing campaigns campaigns will show up here.
                    </p>
                  </Stack>
                </Td>
              </TableRow>
            ) : (
              campaigns.map((item, idx) => (
                <TableRow key={idx}>
                  <Td>{item?.name}</Td>
                  {metrics.map((metric, _idx) => (
                    <Td key={_idx}>
                      {formatMetricUnit(
                        item?.metrics?.find((_metric) => _metric?.name === metric)?.value,
                        item?.metrics?.find((_metric) => _metric?.name === metric)?.type,
                      )}
                    </Td>
                  ))}
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
              ))
            )}
          </TableBody>
        </Table>
      )}
    </Stack>
  );
};

export default TopPerformingCampaigns;
