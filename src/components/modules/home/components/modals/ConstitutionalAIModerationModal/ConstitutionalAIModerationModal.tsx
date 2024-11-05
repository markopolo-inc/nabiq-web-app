import { Button, Modal, OptionTabs, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Custom from './Custom';
import { Presets } from './Presets';

const ModalBody = ({ setOpened }: { setOpened: Dispatch<SetStateAction<boolean>> }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<'preset' | 'custom'>('preset');

  const handleSelect = (line: string) => {
    if (selected.includes(line)) {
      setSelected((prev) => prev.filter((l) => l !== line));
    } else {
      setSelected((prev) => [...prev, line]);
    }
  };

  const handleConfirm = () => {
    setSelected([]);
    setOpened(false);
  };

  useEffect(() => {
    setSelected([]);
  }, [selectedOption]);

  return (
    <Stack className='!p-8' gap={24}>
      <Stack gap={32}>
        <Stack align='center' justify='center' gap={8}>
          <p className='text-gray-900 text-2xl font-semibold'>Constitutional AI Moderation</p>
          <p className='text-gray-600 text-base font-normal text-center'>
            Shape our AI, reduce moderation bias, and ensure transparency while prioritizing safety,
            ethics, and respect for human rights.
          </p>
        </Stack>
        <OptionTabs
          active={selectedOption}
          setActive={setSelectedOption}
          options={[
            { label: 'Preset', value: 'preset' },
            { label: 'Custom', value: 'custom' },
          ]}
        />
      </Stack>

      {selectedOption === 'preset' && (
        <Presets
          setSelected={setSelected}
          selectedPrompts={selected}
          handleSelect={handleSelect}
          handleConfirm={handleConfirm}
        />
      )}

      {selectedOption === 'custom' && (
        <Custom
          handleSelect={handleSelect}
          setSelected={setSelected}
          handleConfirm={handleConfirm}
          selectedPrompts={selected}
        />
      )}
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
