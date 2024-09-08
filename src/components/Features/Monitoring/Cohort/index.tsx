import { Handle, NodeProps, Position } from '@xyflow/react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks.ts';
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
  const dispatch = useAppDispatch();
  const { selectedNode } = useAppSelector((state) => state.monitoring);
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
        }}
        className='w-[262px] flex flex-col flex-start gap-8 p-[16px_24px_16px_16px] rounded-xl border border-gray-200 bg-white shadow-sm hover:cursor-pointer'
      >
        <div className='flex justify-between items-center w-full'>
          <div className='text-gray-900 text-[16px] font-semibold leading-6'>Cohort 1</div>
          <div className='flex items-center py-0.5 px-2 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 text-center text-xs font-medium leading-[18px]'>
            Size 20,174
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <OperationItem />
          {/*<OperationItem/>*/}
          {/*<OperationItem/>*/}
          {/*<OperationItem/>*/}
          {/*<OperationItem/>*/}
          {/*<OperationItem/>*/}
          {/*<OperationItem/>*/}
        </div>
      </div>

      {props.id === selectedNode?.id && selectedNode?.data?.platformId ? (
        <Handle
          type='source'
          position={Position.Right}
          id={`handle-${props.id}`}
          isConnectable={props.isConnectable}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
