import { FiChevronRight } from '@nabiq-icons';
import { Button } from '@nabiq-ui';
import { Handle, NodeProps, Position } from '@xyflow/react';
import { useState } from 'react';
import { useAppDispatch } from 'src/store/hooks.ts';
import { onSelectNode } from 'src/store/monitoring/monitoringSlice.ts';

const OperationItem = () => {
  return (
    <div className='flex justify-between'>
      <div className='text-gray-600 text-xs font-semibold leading-[18px]'>Engagement rate</div>

      <div className='text-gray-600 text-xs font-normal leading-[18px]'>21%</div>
    </div>
  );
};

const Index = (props: NodeProps) => {
  const [isOperationOpen, setIsOperationOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <Handle
        type='target'
        position={Position.Left}
        id='left'
        isConnectable={props.isConnectable}
      />
      <div
        onClick={() => {
          dispatch(onSelectNode(props));
          setIsOperationOpen((prev) => !prev);
        }}
        className='flex w-[304px] p-6 flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:cursor-pointer'
      >
        <div className='flex justify-between items-start self-stretch'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_53_1549)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24 21.9375V23.0625C23.4822 23.0625 23.0625 23.4822 23.0625 24H21.9375C21.9375 23.4822 21.5178 23.0625 21 23.0625C20.4822 23.0625 20.0625 23.4822 20.0625 24H18.9375C18.9375 23.4822 18.5178 23.0625 18 23.0625C17.4822 23.0625 17.0625 23.4822 17.0625 24H15.9375C15.9375 23.4822 15.5178 23.0625 15 23.0625C14.4822 23.0625 14.0625 23.4822 14.0625 24H12.9375C12.9375 23.4822 12.5178 23.0625 12 23.0625C11.4822 23.0625 11.0625 23.4822 11.0625 24H9.93752C9.93752 23.4822 9.51776 23.0625 9 23.0625C8.48224 23.0625 8.06248 23.4822 8.06248 24H6.9375C6.9375 23.4822 6.51777 23.0625 6 23.0625C5.48223 23.0625 5.0625 23.4822 5.0625 24H3.9375C3.9375 23.665 3.75882 23.3556 3.46875 23.1881C3.17869 23.0206 2.82131 23.0206 2.53125 23.1881C2.24118 23.3556 2.0625 23.665 2.0625 24H0.937504C0.937504 23.4822 0.517767 23.0625 0 23.0625V21.9375C0.517767 21.9375 0.937504 21.5178 0.937504 21C0.937504 20.4822 0.517767 20.0625 0 20.0625V18.9375C0.517767 18.9375 0.937504 18.5178 0.937504 18C0.937504 17.4822 0.517767 17.0625 0 17.0625V15.9375C0.517767 15.9375 0.937504 15.5178 0.937504 15C0.937504 14.4822 0.517767 14.0625 0 14.0625V12.9375C0.517767 12.9375 0.937504 12.5178 0.937504 12C0.937504 11.4822 0.517767 11.0625 0 11.0625V9.93752C0.517767 9.93752 0.937504 9.51776 0.937504 9C0.937504 8.48224 0.517767 8.06248 0 8.06248V6.9375C0.517767 6.9375 0.937504 6.51777 0.937504 6C0.937504 5.48223 0.517767 5.0625 0 5.0625V3.9375C0.517767 3.9375 0.937504 3.51777 0.937504 3C0.937504 2.48223 0.517767 2.0625 0 2.0625V0.937504C0.517767 0.937504 0.937504 0.517767 0.937504 0H2.0625C2.0625 0.517767 2.48223 0.937504 3 0.937504C3.51777 0.937504 3.9375 0.517767 3.9375 0H5.0625C5.0625 0.517767 5.48223 0.937504 6 0.937504C6.51777 0.937504 6.9375 0.517767 6.9375 0H8.06248C8.06248 0.517767 8.48224 0.937504 9 0.937504C9.51776 0.937504 9.93752 0.517767 9.93752 0H11.0625C11.0625 0.517767 11.4822 0.937504 12 0.937504C12.5178 0.937504 12.9375 0.517767 12.9375 0H14.0625C14.0625 0.517767 14.4822 0.937504 15 0.937504C15.5178 0.937504 15.9375 0.517767 15.9375 0H17.0625C17.0625 0.517767 17.4822 0.937504 18 0.937504C18.5178 0.937504 18.9375 0.517767 18.9375 0H20.0625C20.0625 0.517767 20.4822 0.937504 21 0.937504C21.5178 0.937504 21.9375 0.517767 21.9375 0H23.0625C23.0625 0.517767 23.4822 0.937504 24 0.937504V2.0625C23.4822 2.0625 23.0625 2.48223 23.0625 3C23.0625 3.51777 23.4822 3.9375 24 3.9375V5.0625C23.4822 5.0625 23.0625 5.48223 23.0625 6C23.0625 6.51777 23.4822 6.9375 24 6.9375V8.06248C23.4822 8.06248 23.0625 8.48224 23.0625 9C23.0625 9.51776 23.4822 9.93752 24 9.93752V11.0625C23.665 11.0625 23.3556 11.2412 23.1881 11.5313C23.0206 11.8213 23.0206 12.1787 23.1881 12.4687C23.3556 12.7588 23.665 12.9375 24 12.9375V14.0625C23.4822 14.0625 23.0625 14.4822 23.0625 15C23.0625 15.5178 23.4822 15.9375 24 15.9375V17.0625C23.4822 17.0625 23.0625 17.4822 23.0625 18C23.0625 18.5178 23.4822 18.9375 24 18.9375V20.0625C23.4822 20.0625 23.0625 20.4822 23.0625 21C23.0625 21.5178 23.4822 21.9375 24 21.9375Z'
                fill='#FFDE00'
              />
              <path
                d='M6.96252 17.1043H7.7108C8.09507 17.1043 8.33771 16.8564 8.33771 16.4638V7.70308C8.33771 7.3105 8.09507 7.06256 7.7108 7.06256H6.96252V5.12032H12.3824C15.2946 5.12032 17.6 6.62865 17.6 9.50072C17.6 12.3934 15.2946 13.9018 12.3824 13.9018H10.5219V16.4638C10.5219 16.8564 10.7645 17.1043 11.169 17.1043H12.6857V19.0673H6.96252V17.1043ZM12.2206 11.8768C14.1419 11.8768 15.2541 11.0503 15.2541 9.542C15.2541 7.99236 14.1419 7.2072 12.2206 7.2072H10.5219V11.8975H12.2206V11.8768Z'
                fill='black'
              />
            </g>
            <defs>
              <clipPath id='clip0_53_1549'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>

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

      {/*<Handle*/}
      {/*  type='target'*/}
      {/*  position={Position.Right}*/}
      {/*  id='right'*/}
      {/*  isConnectable={props.connectable}*/}
      {/*/>*/}
    </>
  );
};

export default Index;
