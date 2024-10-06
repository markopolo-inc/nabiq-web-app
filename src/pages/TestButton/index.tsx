import { FiCircle } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';

const TestButton = () => {
  return (
    <div className='p-10'>
      <Stack gap={140}>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button trailingIcon={<FiCircle size={20} />} leadingIcon={<FiCircle size={20} />}>
                Button CTA
              </Button>
              <Button
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button>
                <FiCircle size={20} />
              </Button>
              <Button size='md'>
                <FiCircle size={20} />
              </Button>
              <Button size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button trailingIcon={<FiCircle size={20} />} leadingIcon={<FiCircle size={20} />}>
                Button CTA
              </Button>
              <Button
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button>
                <FiCircle size={20} />
              </Button>
              <Button size='md'>
                <FiCircle size={20} />
              </Button>
              <Button size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button disabled>
                <FiCircle size={20} />
              </Button>
              <Button size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='secondary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary' size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary-black'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary-black'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary-black'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary-black'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='secondary-black'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='secondary-black'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='secondary-black' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='secondary-black' size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary-gray'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary-gray'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary-gray'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary-gray'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary-gray'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-gray'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary-gray' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary-gray' size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='tertiary' size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='link'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='link'>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='link'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='link'>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='md'>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='lg'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='link'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='link'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='link' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='md' disabled>
                <FiCircle size={20} />
              </Button>
              <Button variant='link' size='lg' disabled>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
        <Stack gap={16}>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary-destructive'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-destructive'
                size='md'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-destructive'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='md' variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='lg' variant='tertiary-destructive'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                variant='tertiary-destructive'
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-destructive'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
              >
                Button CTA
              </Button>
              <Button
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                variant='tertiary-destructive'
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='md' variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='lg' variant='tertiary-destructive'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>

          <Stack gap={180} className='flex flex-row'>
            <Group gap={32}>
              <Button
                variant='tertiary-destructive'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-destructive'
                trailingIcon={<FiCircle size={20} />}
                leadingIcon={<FiCircle size={20} />}
                size='md'
                disabled
              >
                Button CTA
              </Button>
              <Button
                variant='tertiary-destructive'
                size='lg'
                trailingIcon={<FiCircle size={24} />}
                leadingIcon={<FiCircle size={24} />}
                disabled
              >
                Button CTA
              </Button>
            </Group>

            <Group gap={32}>
              <Button disabled variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='md' disabled variant='tertiary-destructive'>
                <FiCircle size={20} />
              </Button>
              <Button size='lg' disabled variant='tertiary-destructive'>
                <FiCircle size={24} />
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default TestButton;
