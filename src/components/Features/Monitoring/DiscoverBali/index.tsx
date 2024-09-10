import { Handle, Position } from '@xyflow/react';

const Index = () => {
  return (
    <>
      <div className='rounded-xl border-2 border-primary-600 bg-white shadow-sm p-6'>
        <div className='flex flex-col items-start gap-4 self-stretch'>
          <div>
            <div className='text-gray-900 text-base font-semibold mb-1'>Discover Bali</div>
            <div className='text-gray-600 text-xs font-normal leading-[18px]'>Retention</div>
          </div>
        </div>
      </div>

      <Handle type='source' position={Position.Right} id='a' />
    </>
  );
};

export default Index;
