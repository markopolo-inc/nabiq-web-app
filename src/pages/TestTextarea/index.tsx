import { Group, Stack, TextArea } from '@nabiq-ui';

const TestTextarea = () => {
  return (
    <div className='p-10'>
      <Stack gap={64}>
        <Stack gap={16}>
          <Group>
            <TextArea
              label='Description'
              placeholder='Enter a description...'
              description='This is a hint text to help user.'
            />
            <TextArea
              label='Description'
              placeholder='Enter a description...'
              error='This is an error message.'
            />
          </Group>

          <Group>
            <TextArea
              label='Description'
              value='A little about the company and the team that you’ll be working with.'
              placeholder='Enter a description...'
              description='This is a hint text to help user.'
            />
            <TextArea
              label='Description'
              value='A little about the company and the team that you’ll be working with.'
              placeholder='Enter a description...'
              error='This is an error message.'
            />
          </Group>

          <Group>
            <TextArea
              label='Description'
              value='A little about the company and the team that you’ll be working with.'
              placeholder='Enter a description...'
              description='This is a hint text to help user.'
              autoFocus
            />
            <TextArea
              label='Description'
              value='A little about the company and the team that you’ll be working with.'
              placeholder='Enter a description...'
              error='This is an error message.'
              autoFocus
            />
          </Group>

          <Group>
            <TextArea
              label='Description'
              placeholder='Enter a description...'
              description='This is a hint text to help user.'
              disabled
            />
            <TextArea
              label='Description'
              placeholder='Enter a description...'
              error='This is an error message.'
              disabled
            />
          </Group>
        </Stack>
      </Stack>
    </div>
  );
};

export default TestTextarea;
