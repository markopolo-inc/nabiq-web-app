import { ArrowNarrowUpRight, FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { HomePageCardWrapper } from 'components/modules/home';
import { useAppSelector } from 'src/store/hooks.ts';

type ConnectedMarktagPropsTypes = {
  onShowMarktag: () => void;
};

export const ConnectedMarktag = ({ onShowMarktag }: ConnectedMarktagPropsTypes) => {
  const { primary500 } = useGetColors();
  const { markTag } = useAppSelector((state) => state.brand);

  return (
    <HomePageCardWrapper icon={<FiCommand size={32} color={primary500} fill={primary500} />}>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 text-lg font-semibold'>{markTag?.domain}</p>
          <p className='text-gray-600 text-sm font-normal'>{markTag?.hostname}</p>
          {/* 
            <Badge color='success' className='mt-4'>
              Pixel: 621000359117182
            </Badge> */}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <Button
          variant='secondary'
          trailingIcon={<ArrowNarrowUpRight size={24} color='#4B5565' style={{ marginTop: 6 }} />}
          onClick={onShowMarktag}
          className='!w-36'
        >
          Reconfigure
        </Button>
      </div>
    </HomePageCardWrapper>
  );
};
