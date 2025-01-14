import { Button, Progress, Stack } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

export const PlanCard = () => {
  const navigate = useNavigate();
  const target = 30;
  return (
    <Stack className='px-4 py-5 bg-gray-50 rounded-lg' gap={16}>
      <Stack gap={8}>
        <p className='text-xs text-gray-900 font-semibold'>Used MAU</p>
        <p className='text-xs text-gray-600'>
          You have targeted {target}% of your available monthly active users.
        </p>
      </Stack>

      <Progress
        styles={{
          root: {
            background: '#E3E8EF',
          },
          section: {
            background: '#2972F5',
          },
        }}
        value={target}
      />
      <Button variant='link' onClick={() => navigate('/billing')}>
        Upgrade Plan
      </Button>
    </Stack>
  );
};
