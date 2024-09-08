import { ArrowNarrowUpRight, FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks.ts';

const ConnectedMarktag = () => {
  const navigate = useNavigate();
  const { primary500 } = useGetColors();
  const { markTag } = useAppSelector((state) => state.brand);

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg'>
      <div className='flex gap-3 flex-nowrap'>
        <div>
          <FiCommand size={32} color={primary500} fill={primary500} />
        </div>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>{markTag?.domain}</p>
            <p className='text-gray-600 text-sm font-normal'>{markTag?.hostname}</p>

            {/*<div className="flex items-center gap-1 px-1.5 py-1 border border-success-500 rounded-2xl mt-4">*/}
            {/*  <div className="w-2 h-2 rounded-full bg-success-500"></div>*/}
            {/*  <Text*/}
            {/*    size="14px"*/}
            {/*    weight={500}*/}
            {/*    className="text-success-700 leading-5"*/}
            {/*  >*/}
            {/*    Pixel: 621000359117182*/}
            {/*  </Text>*/}
            {/*</div>*/}
          </div>
          <div className='flex gap-3'>
            <Button
              variant='secondary'
              trailingIcon={<ArrowNarrowUpRight size={20} color='#4B5565' />}
              onClick={() => navigate('/connect-marktag')}
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
