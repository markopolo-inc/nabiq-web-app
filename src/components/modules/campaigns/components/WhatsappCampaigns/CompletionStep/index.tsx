import { FiCheck } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';

export const CompletionStep = () => {
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={64} maw={744} className='p-8 border border-gray-200 rounded-xl shadow-lg'>
        <Stack gap={12}>
          <div className='h-8 w-8 rounded-full bg-success-600 flex items-center justify-center'>
            <FiCheck size={18} color='white' />
          </div>
          <p className='text-gray-900 text-lg font-semibold'>Captain Nabiq is now sailing!</p>
          <p className='text-gray-600 text-sm font-normal'>
            Captain Nabiq is working on your leads. Want to add more? Upload them by integraating
            with more datasources.
          </p>
        </Stack>
      </Stack>
    </Stack>
  );
};
