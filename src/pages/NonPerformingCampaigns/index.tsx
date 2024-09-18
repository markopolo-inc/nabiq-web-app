import { ArrowDown, FiChevronRight } from '@nabiq-icons';
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
  useGetColors,
} from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

const NonPerformingCampaigns = () => {
  const { error500 } = useGetColors();
  const navigate = useNavigate();

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
            <Th />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Td>
              <p>Experimental_June</p>
              <p>Retention</p>
            </Td>
            <Td>20,578</Td>
            <Td>12,754</Td>
            <Td>
              <div className='w-max flex gap-3 items-center justify-center px-1.5 py-0.5 border border-error-200 rounded-2xl bg-error-50'>
                <ArrowDown size={12} color={error500} />
                <div className='text-xs font-medium text-error-700'>0.47%</div>
              </div>
            </Td>
            <Td>93,046</Td>
            <Td>$275.43</Td>
            <Td>
              <Button variant='link' size='xl' trailingIcon={<FiChevronRight size={16} />}>
                View
              </Button>
            </Td>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};

export default NonPerformingCampaigns;
