import { FiHelpCircle, FileQuestion02 } from '@nabiq-icons';
import { Group, Modal, Text, useGetColors } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

import ModalBody from './ModalBody';

const CodeInstructionModal = () => {
  const { primary700 } = useGetColors();
  const { t } = useTranslation();

  return (
    <Modal centered body={() => <ModalBody />} size='xl'>
      {({ setOpened }) => (
        <Group>
          <Group gap={4} style={{ cursor: 'pointer' }} onClick={() => setOpened(true)}>
            <FiHelpCircle color={primary700} size={14} />
            <Text color='#1C1A27' size='14px' weight={500}>
              {t('home_page.how_it_works')}
            </Text>
          </Group>
          <Group style={{ cursor: 'pointer' }} onClick={() => setOpened(true)} gap={4}>
            <FileQuestion02 color={primary700} size={12} />
            <Text color='#1C1A27' size='14px' weight={500}>
              {t('home_page.instructions')}
            </Text>
          </Group>
        </Group>
      )}
    </Modal>
  );
};

export default CodeInstructionModal;
