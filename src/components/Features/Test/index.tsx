import { Button, Text, TextInput } from '@nabiq-ui';
import { FiMail01 } from '@nabiq-icons';

const Test = () => {
  return (
    <div className='space-y-4 space-x-4'>
      <Text className='display-lg text-primary-500 font-semibold'>Nabiq</Text>
      <Button>Button CTA</Button>
      <Button type='primary-destructive' size='sm'>
        Button
      </Button>
      <Button type='secondary' size='lg'>
        Button
      </Button>
      <Button
        type='secondary-black'
        size='md'
        leadingIcon={<FiMail01 size={16} />}
      >
        Button
      </Button>
      <Button type='tertiary-gray' size='lg'>
        Button
      </Button>
      <Button type='tertiary' size='sm'>
        Button
      </Button>
      <Button type='tertiary-destructive' size='sm'>
        Button
      </Button>
      <Button type='link' size='sm'>
        Button
      </Button>

      <div className='w-72'>
        <TextInput
          label='Email'
          leftSection={<FiMail01 size={16} />}
          placeholder='Enter email'
        />
      </div>
    </div>
  );
};

export default Test;
