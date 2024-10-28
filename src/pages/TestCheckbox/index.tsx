import { Checkbox, Group, Stack } from '@nabiq-ui';

const TestCheckbox = () => {
  return (
    <div className='p-10'>
      <Stack gap={140}>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox size='sm' />
              <Checkbox size='sm' checked={true} indeterminate={false} />
              <Checkbox size='sm' checked={true} indeterminate={true} />
            </Group>

            <Group gap={32}>
              <Checkbox size='md' />
              <Checkbox size='md' checked={true} indeterminate={false} />
              <Checkbox size='md' checked={true} indeterminate={true} />
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox />
              <Checkbox checked={true} indeterminate={false} />
              <Checkbox checked={true} indeterminate={true} />
            </Group>

            <Group gap={32}>
              <Checkbox size='md' />
              <Checkbox size='md' checked={true} indeterminate={false} />
              <Checkbox size='md' checked={true} indeterminate={true} />
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox disabled={true} />
              <Checkbox checked={true} indeterminate={false} disabled={true} />
              <Checkbox checked={true} indeterminate={true} disabled={true} />
            </Group>

            <Group gap={32}>
              <Checkbox size='md' disabled={true} />
              <Checkbox size='md' checked={true} indeterminate={false} disabled={true} />
              <Checkbox size='md' checked={true} indeterminate={true} disabled={true} />
            </Group>
          </Stack>
        </Stack>

        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox variant='radio' />
              <Checkbox variant='radio' checked={true} indeterminate={false} />
            </Group>

            <Group gap={32}>
              <Checkbox variant='radio' size='md' />
              <Checkbox variant='radio' size='md' checked={true} indeterminate={false} />
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox variant='radio' />
              <Checkbox variant='radio' checked={true} indeterminate={false} />
            </Group>

            <Group gap={32}>
              <Checkbox variant='radio' size='md' />
              <Checkbox variant='radio' size='md' checked={true} indeterminate={false} />
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Checkbox variant='radio' disabled={true} />
              <Checkbox variant='radio' checked={true} indeterminate={false} disabled={true} />
            </Group>

            <Group gap={32}>
              <Checkbox variant='radio' size='md' disabled={true} />
              <Checkbox
                variant='radio'
                size='md'
                checked={true}
                indeterminate={false}
                disabled={true}
              />
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default TestCheckbox;
