import { Stack, TextArea } from '@nabiq-ui';

export const CreationStep = () => {
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={32} maw={744}>
        <TextArea
          label='Instructions(optional)'
          placeholder='Provide instructions for Captain Nabiq on how to engage your leads. Mention key products, discounts, or any focus areas you want.'
          description={`No worries, you can leave this blank if you'd like. Captain Nabiq will automatically work to convert the most relevant leads for you.`}
        />
      </Stack>
    </Stack>
  );
};
