import { ArrowNarrowUpRight, FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { useAppSelector } from 'src/store/hooks.ts';

type ConnectedMarktagPropsTypes = {
  onShowMarktag: () => void;
};

const ConnectedMarktag = ({ onShowMarktag }: ConnectedMarktagPropsTypes) => {
  const { primary500 } = useGetColors();
  const { markTag } = useAppSelector((state) => state.brand);

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg max-w-xs'>
      <div className='flex gap-3 flex-nowrap'>
        <div>
          <FiCommand size={32} color={primary500} fill={primary500} />
        </div>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>{markTag?.domain}</p>
            <p className='text-gray-600 text-sm font-normal'>{markTag?.hostname}</p>

            {/*<div className='mt-4'>*/}
            {/*  <div className='flex items-center gap-1 px-1.5 py-[1px] border border-success-500 rounded-2xl'>*/}
            {/*    <div className='w-2 h-2 rounded-full bg-success-500'></div>*/}
            {/*    <p className='text-xs font-medium text-success-700 leading-[18px] tracking-[0.32px]'>*/}
            {/*      Pixel: 621000359117182*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className='flex gap-3'>
            <Button
              variant='secondary'
              trailingIcon={<ArrowNarrowUpRight size={20} color='#4B5565' />}
              onClick={onShowMarktag}
            >
              Reconfigure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedMarktag;
