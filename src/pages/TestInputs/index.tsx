import { FiHelpCircle, FiMail01 } from '@nabiq-icons';
import { Group, Stack, TextInput } from '@nabiq-ui';

const TestCheckbox = () => {
  return (
    <div className='p-10'>
      <Stack gap={64}>
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

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
          </Group>
        </Stack>
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

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
          </Group>
        </Stack>

        {/*ERROR*/}
        <Stack gap={16}>
          <Group>
            <TextInput
              label='Email'
              placeholder='olivia@untitledui.com'
              rightSection={<FiHelpCircle size={16} />}
              error='This is an error message.'
            />
            <TextInput
              label='Email'
              placeholder='olivia@untitledui.com'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              error='This is an error message.'
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              rightSection={<FiHelpCircle size={16} />}
              error='This is an error message.'
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              error='This is an error message.'
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
          </Group>
        </Stack>
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

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              autoFocus={true}
            />
          </Group>

          <Group>
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
            <TextInput
              label='Email'
              value='olivia@untitledui.com'
              placeholder='olivia@untitledui.com'
              description='This is a hint text to help user.'
              leftSection={<FiMail01 size={20} />}
              rightSection={<FiHelpCircle size={16} />}
              disabled={true}
            />
          </Group>
        </Stack>
      </Stack>
    </div>
  );
};

export default TestCheckbox;
