import { FiHelpCircle, FiMail01 } from '@nabiq-icons';
import { Group, Stack, TextInput } from '@nabiq-ui';

const TestCheckbox = () => {
  return (
    <div className='p-10'>
      <Stack gap={16}>
        <Group>
          <TextInput
            label='Email'
            placeholder='olivia@untitledui.com'
            description='This is a hint text to help user.'
            rightSection={<FiHelpCircle size={16} />}
          />
          <TextInput
            label='Email'
            placeholder='olivia@untitledui.com'
            description='This is a hint text to help user.'
            leftSection={<FiMail01 size={20} />}
            rightSection={<FiHelpCircle size={16} />}
          />
        </Group>
      </Stack>
    </div>
  );
};

export default TestCheckbox;
