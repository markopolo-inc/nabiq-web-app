import { ArrowNarrowDown } from '@nabiq-icons';

type CampaignTableHeaderItemPropsType = {
  label: string;
};

export const CampaignTableHeaderItem = ({ label }: CampaignTableHeaderItemPropsType) => {
  return (
    <div className='flex items-center gap-1'>
      <div className='text-xs font-medium text-gray-600'>{label}</div>
      <ArrowNarrowDown size={16} color='#475467' />
    </div>
  );
};
