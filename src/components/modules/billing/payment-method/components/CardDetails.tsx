import { Button, Group, Stack } from '@nabiq-ui';
import { FiMail01 } from 'src/components/Icons';
import { useAppSelector } from 'src/store/hooks';

export const CardDetails = ({ setShowModal }: { setShowModal: (showModal: boolean) => void }) => {
  const { userEmail } = useAppSelector((state) => state.user);
  return (
    <Stack gap={24}>
      <div className='grid grid-cols-2 gap-4'>
        <Stack gap={4}>
          <p className='text-sm text-gray-500 font-medium'>Visa ending in 1234</p>
          <p className='text-sm text-gray-600'>Expiry 06/2025</p>
        </Stack>
        <Stack>
          <Group gap={4}>
            <FiMail01 color='#98A2b3' size={16} />
            <p className='text-sm text-gray-600'>{userEmail}</p>
          </Group>
        </Stack>
      </div>
      <Button variant='secondary' onClick={() => setShowModal(true)}>
        Edit
      </Button>
    </Stack>
  );
};
