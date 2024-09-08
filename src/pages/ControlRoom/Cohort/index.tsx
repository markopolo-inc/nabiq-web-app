import { FiStar04, FiUser03 } from '@nabiq-icons';
import { Badge, Breadcrumbs, Button, Group, Stack } from '@nabiq-ui';
import { useNavigate, useParams } from 'react-router-dom';
import { IControlRoomConfigCohort } from 'src/interfaces/controlRoom.interface';
import { useGetConfigCohortQuery } from 'src/store/controlRoom/controlRoom.api';

const Cohort = () => {
  const { configId } = useParams();
  const navigate = useNavigate();

  const { data } = useGetConfigCohortQuery(configId);

  const cohortData = data?.data || {};
  const cohorts: IControlRoomConfigCohort[] = cohortData.cohorts || [];

  return (
    <Stack gap={64}>
      <Stack gap={20}>
        <Breadcrumbs />

        <Group justify='space-between' className='mt-[20px] mb-16'>
          <Stack gap={4}>
            <p className='text-gray-900 font-semibold text-3xl'>'{cohortData?.name}' cohort</p>
            <p className='text-gray-600 font-normal'>
              Cohorts for the campaign which will be updated in each step.
            </p>
          </Stack>
          <Group>
            <Button onClick={() => navigate('/control-room')}>Back to control room</Button>
          </Group>
        </Group>
        <Group>
          {cohorts?.length === 0 && <p className='text-gray-600 font-normal'>No cohorts found</p>}
          {cohorts?.map((item, idx) => (
            <Stack className='p-6 rounded-xl border border-gray-200 shadow-sm' gap={24} key={idx}>
              <p className='text-gray-900 font-semibold text-lg'>{item?.name}</p>
              <Group>
                <Badge size='sm' color='gray'>
                  <FiStar04 size={12} /> Conversion chance {item?.conversionChance}%
                </Badge>
                <Badge size='sm' color='gray'>
                  <FiUser03 size={14} />
                  Size {item?.size?.toLocaleString('en-US')}
                </Badge>
              </Group>
            </Stack>
          ))}
        </Group>
      </Stack>
    </Stack>
  );
};

export default Cohort;
