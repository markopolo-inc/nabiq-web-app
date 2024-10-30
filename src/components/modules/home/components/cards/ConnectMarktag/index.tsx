import { FiCommand } from '@nabiq-icons';
import { Button, useGetColors } from '@nabiq-ui';
import { HomePageCardWrapper } from 'components/modules/home';

type ConnectMarktagPropsTypes = {
  onShowMarktag: () => void;
};

export const ConnectMarktag = ({ onShowMarktag }: ConnectMarktagPropsTypes) => {
  const { primary500 } = useGetColors();
  return (
    <HomePageCardWrapper icon={<FiCommand size={32} color={primary500} fill={primary500} />}>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 text-lg font-semibold'>Connect 'Marktag'</p>
          <p className='text-gray-600 text-sm font-normal'>
            Track first party customer data with cutting-edge precision. Capture and track all your
            marketing data.
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
    </HomePageCardWrapper>
  );
};
