import { Group, Text } from '@nabiq-ui';

// import { BsQuestionLg } from 'react-icons/bs';
// import { TbClipboardText } from 'react-icons/tb';

const instructions = [
  'Copy the code snippet.',
  'Go to your website code from Webflow, Wordpress, React etc.',
  `Find the <head> tag and paste the code snippet between the <head> and </head> tag.`,
];

const ModalBody = () => (
  <div style={{ padding: '0px 70px 40px 70px' }}>
    <div>
      <Group gap={6} style={{ cursor: 'pointer', marginBottom: 20 }}>
        {/* <BsQuestionLg color='#0B4FFF' size={17} /> */}
        <Text color='#1C1A27' size='16px' weight={500}>
          How it works
        </Text>
      </Group>
      <div
        style={{
          color: '#484554',
          fontWeight: 400,
          marginBottom: 30,
          fontSize: '0.875rem',
          lineHeight: 1.4,
        }}
      >
        The code snippet needs to copied and added to your website header for Markopolo to start
        tracking events. You can watch the{' '}
        <a
          style={{ color: '#0B4FFF' }}
          target='_blank'
          href='https://www.youtube.com/watch?v=M7qzN10ILuI'
          rel='noreferrer'
        >
          tutorial
        </a>{' '}
        if you need help.
      </div>
    </div>
    <div>
      <Group gap={6}>
        {/* <TbClipboardText color='#0B4FFF' size={18} /> */}
        <Text color='#1C1A27' size='16px' weight={500}>
          Instructions
        </Text>
      </Group>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {instructions?.map((item) => (
          <li key={item} style={{ marginLeft: '-19px' }}>
            <Text color='#484554' weight={400} size='14px' style={{ lineHeight: 1.4 }}>
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ModalBody;
