import { FiShield02 } from '@nabiq-icons';
import { Badge } from '@nabiq-ui';
import { HomePageCardWrapper } from 'components/modules/home';
import { useGetConstitutionalAIConfigQuery } from 'src/store/constitutional-ai/constitutional-ai.api';
import { useAppSelector } from 'src/store/hooks';

export const ConstitutionalAIModerationCard = () => {
  const brand = useAppSelector((state) => state.brand);
  const { data: constitutionalAIConfig } = useGetConstitutionalAIConfigQuery({
    brandId: brand?.resourceId,
  });
  // const rules = constitutionalAIConfig?.data?.rules || [];
  const isCompleted = constitutionalAIConfig?.success;
  return (
    <HomePageCardWrapper icon={<FiShield02 size={32} color='#7A5AF8' fill='#7A5AF8' />}>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 text-lg font-semibold'>Constitutional AI moderation</p>
          <p className='text-gray-600 text-sm font-normal'>
            Shape our AI to reduce bias, ensure transparency, and prioritize safety, ethics, and
            human rights.
          </p>
        </div>
      </div>
      <div className='flex gap-3 justify-between items-center'>
        {/* <ConstitutionalAIModerationModal savedRules={rules} isCompleted={isCompleted} /> */}
        {isCompleted && (
          <Badge color='success' size='lg'>
            Completed
          </Badge>
        )}
      </div>
    </HomePageCardWrapper>
  );
};
