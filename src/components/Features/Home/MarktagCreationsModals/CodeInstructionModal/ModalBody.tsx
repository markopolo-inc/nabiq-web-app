import { FiHelpCircle, FileQuestion02 } from '@nabiq-icons';
import { Group, Stack, Text, useGetColors } from '@nabiq-ui';

const instructions = [
  '1. Copy the code snippet.',
  '2. Go to your website code from Webflow, Wordpress, React etc.',
  '3. Find the <head> tag and paste the code snippet between the <head> and </head> tag.',
];

const ModalBody = () => {
  const { primary700, gray900, gray700 } = useGetColors();

  return (
    <Stack className='px-10 pb-10 ' gap={32}>
      <div className='mb-7.5'>
        <Group gap={8} className='cursor-pointer mb-3'>
          <FiHelpCircle color={primary700} size={18} />
          <Text color={gray900} size='18px' weight={500}>
            How it works
          </Text>
        </Group>
        <Text color={gray700} size='14px' weight={400} className='leading-relaxed pl-5'>
          The code snippet needs to be copied and added to your website header for Markopolo to
          start tracking events. You can watch the{' '}
          <a
            className='text-primary-700 underline'
            target='_blank'
            href='https://www.youtube.com/watch?v=M7qzN10ILuI'
            rel='noreferrer'
          >
            tutorial
          </a>{' '}
          if you need help.
        </Text>
      </div>
      <div>
        <Group gap={8} className='mb-3'>
          <FileQuestion02 color={primary700} size={16} />
          <Text color={gray900} size='18px' weight={500}>
            Instructions
          </Text>
        </Group>

        <ul className='pl-5 m-0'>
          {instructions?.map((item, index) => (
            <li key={index} className='mb-2'>
              <Text color={gray700} weight={400} size='14px' className='leading-relaxed'>
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </Stack>
  );
};

export default ModalBody;
