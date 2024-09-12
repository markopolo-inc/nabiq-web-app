import { FiChevronRight } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';

const OperationItem = () => {
  return (
    <div className='flex justify-between'>
      <div className='text-gray-600 text-xs font-semibold leading-[18px]'>Engagement rate</div>

      <div className='text-gray-600 text-xs font-normal leading-[18px]'>21%</div>
    </div>
  );
};

const Index = () => {
  const [isOperationOpen, setIsOperationOpen] = useState<boolean>(false);

  return (
    <>
      <Handle type='target' position={Position.Left} id='d' />
      <div
        onClick={() => setIsOperationOpen((prev) => !prev)}
        className='flex w-[304px] p-6 flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:cursor-pointer'
      >
        <div className='flex justify-between items-start self-stretch'>
          <div className='flex items-center py-0.5 px-2 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 text-center text-xs font-medium leading-[18px]'>
            Step 1
          </div>
        </div>

        <div className='flex flex-col items-start gap-6 w-full'>
          <div className='flex flex-col'>
            <div className='text-gray-900 text-base font-semibold leading-6'>E-mail</div>

            <div className='text-gray-600 text-xs font-normal leading-[18px]'>
              Sent on Jul 4, 2024 at 12:13 am
            </div>
          </div>

          {isOperationOpen ? (
            <>
              <div className='flex flex-col gap-3 w-full'>
                <OperationItem />
                <OperationItem />
                <OperationItem />
                <OperationItem />
                <OperationItem />
              </div>

              <Button variant='primary' trailingIcon={<FiChevronRight />}>
                View
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
