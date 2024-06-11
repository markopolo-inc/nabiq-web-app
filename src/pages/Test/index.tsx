import { Button, Select, Text, TextInput } from '@nabiq-ui';
import { FiMail01 } from '@nabiq-icons';

const Test = () => {
  return (
    <div className='space-y-4 space-x-4'>
      <Text className='display-lg text-primary-500 font-semibold'>Nabiq</Text>
      <Button>Button CTA</Button>
      <Button variant='primary-destructive' size='sm'>
        Button
      </Button>
      <Button variant='secondary' size='lg'>
        Button
      </Button>
      <Button
        variant='secondary-black'
        size='md'
        leadingIcon={<FiMail01 size={16} />}
      >
        Button
      </Button>
      <Button variant='tertiary-gray' size='lg'>
        Button
      </Button>
      <Button variant='tertiary' size='sm'>
        Button
      </Button>
      <Button variant='tertiary-destructive' size='sm'>
        Button
      </Button>
      <Button variant='link' size='sm'>
        Button
      </Button>

      <div className='w-72 space-y-6'>
        <TextInput
          label='Email'
          leftSection={<FiMail01 size={16} />}
          placeholder='Enter email'
        />

        <Select
          placeholder='Select team member'
          label='Team member'
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />
      </div>
    </div>
  );
};

export default Test;
