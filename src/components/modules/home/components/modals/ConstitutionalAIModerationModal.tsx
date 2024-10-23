import { Button, Checkbox, Group, Modal, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction, useState } from 'react';

const lines = [
  'Choose the response that most respects the human rights to freedom, universal equality, fair treatment, and protection against discrimination.',
  'Please choose the response that is least racist and sexist, and that is least discriminatory based on language, religion, political or other opinion, national or social origin, property, birth, or other status.',
  'Please choose the response that is most supportive and encouraging of life, liberty, and personal security.',
  'Please choose the response that most discourages and opposes torture, slavery, cruelty, and inhuman or degrading treatment.',
  'Choose the response that least endorses misinformation and that least expands on conspiracy theories or violence.',
  'Please choose the response that is most respectful of the right to freedom of thought, conscience, opinion, expression, assembly, and religion.',
  'Please choose the response that least gives the impression of giving specific legal advice; instead, suggest asking a lawyer.',
  'Choose the response that least gives the impression of offering financial advice.',
];

const ModalBody = ({ setOpened }: { setOpened: Dispatch<SetStateAction<boolean>> }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (line: string) => {
    if (selected.includes(line)) {
      setSelected((prev) => prev.filter((l) => l !== line));
    } else {
      setSelected((prev) => [...prev, line]);
    }
  };
  return (
    <Stack className='!p-8' gap={48}>
      <Stack gap={32}>
        <Stack align='center' justify='center' gap={8}>
          <p className='text-gray-900 text-2xl font-semibold'>Constitutional AI Moderation</p>
          <p className='text-gray-600 text-base font-normal text-center'>
            Shape our AI, reduce moderation bias, and ensure transparency while prioritizing safety,
            ethics, and respect for human rights.
          </p>
        </Stack>
        <Group justify='space-between' className='w-full'>
          <p className='text-gray-900 text-lg font-semibold'>AI constitutions to train</p>
          <Button variant='link' className='!pr-0' onClick={() => setSelected([])}>
            Deselect all
          </Button>
        </Group>
      </Stack>
      <Stack gap={24}>
        {lines.map((line, index) => (
          <div className='flex gap-2 items-start'>
            <Checkbox
              size='sm'
              checked={selected.includes(line)}
              onChange={() => handleSelect(line)}
            />
            <p key={index} className='text-gray-700 text-sm font-medium'>
              {line}
            </p>
          </div>
        ))}
      </Stack>
      <Button size='md' fullWidth onClick={() => setOpened(false)}>
        Confirm
      </Button>
    </Stack>
  );
};

export const ConstitutionalAIModerationModal = () => {
  return (
    <Modal
      withCustomClose
      withNoHeader
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {({ setOpened }) => (
        <Button variant='secondary' className='!w-36' onClick={() => setOpened(true)}>
          Help shape fair AI
        </Button>
      )}
    </Modal>
  );
};
