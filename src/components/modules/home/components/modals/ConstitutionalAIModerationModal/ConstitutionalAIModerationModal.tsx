import { Modal, OptionTabs, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  useCreateConstitutionalAIConfigMutation,
  useUpdateConstitutionalAIConfigMutation,
} from 'src/store/constitutional-ai/constitutional-ai.api';
import { useAppSelector } from 'src/store/hooks';

import Custom from './Custom';
import { Presets } from './Presets';

const ModalBody = ({
  setOpened,
  savedRules,
  isCompleted,
}: {
  setOpened: Dispatch<SetStateAction<boolean>>;
  savedRules: string[];
  isCompleted: boolean;
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<'preset' | 'custom'>('preset');
  const [createConstitutionalAIConfig] = useCreateConstitutionalAIConfigMutation();
  const [updateConstitutionalAIConfig] = useUpdateConstitutionalAIConfigMutation();
  const [customPrompts, setCustomPrompts] = useState<string[]>([]);
  const brand = useAppSelector((state) => state.brand);

  const handleSelect = (line: string) => {
    if (selected.includes(line)) {
      setSelected((prev) => prev.filter((l) => l !== line));
    } else {
      setSelected((prev) => [...prev, line]);
    }
  };

  const handleConfirm = async () => {
    if (isCompleted) {
      await updateConstitutionalAIConfig({
        brandId: brand?.resourceId,
        rules: selected,
      }).unwrap();
    } else {
      await createConstitutionalAIConfig({
        brandId: brand?.resourceId,
        rules: selected,
      }).unwrap();
    }
    setSelected([]);
    setOpened(false);
  };

  useEffect(() => {
    if (savedRules.length > 0) {
      setSelected(savedRules);
    }
  }, [savedRules]);

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
          customPrompts={customPrompts}
          setCustomPrompts={setCustomPrompts}
          handleSelect={handleSelect}
          setSelected={setSelected}
          handleConfirm={handleConfirm}
          selectedPrompts={selected}
        />
      )}
    </Stack>
  );
};

export const ConstitutionalAIModerationModal = ({
  showModal,
  setShowModal,
  savedRules,
  isCompleted,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  savedRules: string[];
  isCompleted: boolean;
}) => {
  return (
    <Modal
      withCustomClose
      withNoHeader
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => (
        <ModalBody setOpened={setOpened} savedRules={savedRules} isCompleted={isCompleted} />
      )}
    >
      {() => <></>}
    </Modal>
  );
};
