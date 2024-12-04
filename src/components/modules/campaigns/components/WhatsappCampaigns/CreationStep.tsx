import { Stack, TextArea } from '@nabiq-ui';
import { useDispatch } from 'react-redux';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

export const CreationStep = () => {
  const { campaign } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={32} maw={744}>
        <TextArea
          label='Instructions(optional)'
          placeholder='Provide instructions for Captain Nabiq on how to engage your leads. Mention key products, discounts, or any focus areas you want.'
          description={`No worries, you can leave this blank if you'd like. Captain Nabiq will automatically work to convert the most relevant leads for you.`}
          value={campaign?.instruction}
          onChange={(e) => dispatch(setCampaign({ instruction: e.currentTarget.value }))}
        />
      </Stack>
    </Stack>
  );
};
