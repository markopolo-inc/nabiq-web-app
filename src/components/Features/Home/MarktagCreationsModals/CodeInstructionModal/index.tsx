import { Group, Modal, Text } from '@nabiq-ui';

// import { BsQuestionLg } from 'react-icons/bs';
// import { TbClipboardText } from 'react-icons/tb';
import ModalBody from './ModalBody';

const CodeInstructionModal = () => {
  return (
    <Modal centered body={() => <ModalBody />} size='xl'>
      {({ setOpened }) => (
        <Group>
          <Group gap={4} style={{ cursor: 'pointer' }} onClick={() => setOpened(true)}>
            {/* <BsQuestionLg color='#0B4FFF' size={12} /> */}
            <Text color='#1C1A27' size='14px' weight={500}>
              How it works
            </Text>
          </Group>
          <Group style={{ cursor: 'pointer' }} onClick={() => setOpened(true)} gap={4}>
            {/* <TbClipboardText color='#0B4FFF' size={14} /> */}
            <Text color='#1C1A27' size='14px' weight={500}>
              Instructions
            </Text>
          </Group>
        </Group>
      )}
    </Modal>
  );
};

export default CodeInstructionModal;
