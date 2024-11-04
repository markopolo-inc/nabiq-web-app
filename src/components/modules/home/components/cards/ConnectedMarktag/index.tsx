import { ArrowNarrowUpRight, FiCommand } from '@nabiq-icons';
import { Badge, Button, Group, useGetColors } from '@nabiq-ui';
import { useAppSelector } from 'src/store/hooks.ts';

type ConnectedMarktagPropsTypes = {
  onShowMarktag: () => void;
};

export const ConnectedMarktag = ({ onShowMarktag }: ConnectedMarktagPropsTypes) => {
  const { primary500 } = useGetColors();
  const { markTag } = useAppSelector((state) => state.brand);

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg flex flex-row gap-4 items-start min-h-[250px]'>
      <div>
        <FiCommand size={32} color={primary500} fill={primary500} />
      </div>
      <div className='flex gap-3 flex-col justify-between h-full w-full'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>{markTag?.domain}</p>
            <p className='text-gray-600 text-sm font-normal'>{markTag?.hostname}</p>
          </div>
        </div>
        <Group justify='space-between' align='center'>
          <Button
            variant='secondary'
            trailingIcon={<ArrowNarrowUpRight size={24} color='#4B5565' style={{ marginTop: 6 }} />}
            onClick={onShowMarktag}
            className='!w-36'
          >
            Reconfigure
          </Button>
          <Badge variant='dot' color='success' size='lg'>
            Connected
          </Badge>
        </Group>
      </div>
    </div>
  );
};
