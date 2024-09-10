import { Group, Table, TableBody, TableHead, TableRow, Td, Th } from '@nabiq-ui';
import { useGetTopPerformingCampaignsQuery } from 'src/store/monitoring/monitoring.api';

const TopPerformingCampaign = () => {
  const { data } = useGetTopPerformingCampaignsQuery();

  const campaigns = data?.data?.campaigns || [];

  const banner = (
    <Group className='py-[20px] px-6'>
      <p className='text-gray-900 text-lg font-semibold'>Top performing campaigns</p>
    </Group>
  );

  return (
    <Table banner={banner} withBanner striped>
      <TableHead>
        <TableRow>
          <Th>Campaign name</Th>
          <Th>Conversion rate</Th>
          <Th>Engagement</Th>
          <Th>Revenue</Th>
          {/* <Th /> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {campaigns.map((item, idx) => (
          <TableRow key={idx}>
            <Td>{item?.name}</Td>
            <Td>
              {item?.metrics
                ?.find((metric) => metric?.name === 'Conversion Rate')
                .value?.toLocaleString()}
            </Td>
            <Td>
              {item?.metrics
                ?.find((metric) => metric?.name === 'Engagement')
                .value?.toLocaleString()}
            </Td>
            <Td>
              {item?.metrics?.find((metric) => metric?.name === 'Revenue').value?.toLocaleString()}
            </Td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopPerformingCampaign;
