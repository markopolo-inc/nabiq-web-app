import { FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';

type ConnectMarktagPropsTypes = {
  onShowMarktag: () => void;
};

const ConnectMarktag = ({ onShowMarktag }: ConnectMarktagPropsTypes) => {
  const { primary500 } = useGetColors();
  return (
    <div className='bg-white rounded-xl p-8 shadow-lg flex flex-row gap-4 items-start min-h-[250px]'>
      <div>
        <FiCommand size={32} color={primary500} fill={primary500} />
      </div>
      <div className='flex gap-3 flex-col justify-between h-full'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-900 text-lg font-semibold'>Connect 'Marktag'</p>
            <p className='text-gray-600 text-sm font-normal'>
              Track first party customer data with cutting-edge precision. Capture and track all
              your marketing data.
            </p>
          </div>
          <div className='flex gap-4'>
            <Button onClick={onShowMarktag} className='!w-36'>
              Connect
            </Button>
            <Button
              onClick={() =>
                window.open('https://www.markopolo.ai/products/marktag/marktag', '_blank')
              }
              variant='tertiary-gray'
              className='!w-36'
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMarktag;
