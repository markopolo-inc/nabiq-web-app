import { Group, Stack, TextInput } from '@nabiq-ui';

const TestCheckbox = () => {
  return (
    <div className='p-10'>
      <Stack gap={16}>
        <Group>
          <TextInput label='Email' placeholder='olivia@untitledui.com' />
        </Group>
      </Stack>
    </div>
  );
};

export default TestCheckbox;
