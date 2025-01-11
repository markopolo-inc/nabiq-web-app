import { FiPlus } from '@nabiq-icons';
import { Button, Checkbox, Group, Stack, TextArea } from '@nabiq-ui';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Custom = ({
  setSelected,
  handleConfirm,
  selectedPrompts = [],
  handleSelect,
  customPrompts,
  setCustomPrompts,
}: {
  setSelected: Dispatch<SetStateAction<string[]>>;
  handleConfirm: () => void;
  selectedPrompts: string[];
  handleSelect: (prompt: string) => void;
  customPrompts: string[];
  setCustomPrompts: Dispatch<SetStateAction<string[]>>;
}) => {
  const { t } = useTranslation();
  const [newPrompts, setNewPrompts] = useState<string[]>(['']);
  const [step, setStep] = useState<'add' | 'list'>('list');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const changedPrompts = [...newPrompts];
    changedPrompts[index] = e.target.value;
    setNewPrompts(changedPrompts);
  };

  return (
    <Stack gap={24}>
      <Group justify='space-between' className='w-full'>
        <p className='text-gray-900 text-lg font-semibold'>Custom AI constitutions to train</p>
        {step === 'list' ? (
          <Button
            variant='link'
            className='!pr-0'
            onClick={() => setSelected([])}
            disabled={customPrompts.length === 0}
          >
            Deselect all
          </Button>
        ) : (
          <Button
            variant='link'
            leadingIcon={<FiPlus size={18} />}
            onClick={() => setNewPrompts((state) => [...state, ''])}
          >
            Add more
          </Button>
        )}
      </Group>
      {step === 'list' && (
        <>
          {customPrompts?.length > 0 ? (
            <Stack gap={16} className='max-h-[400px] overflow-y-scroll'>
              {customPrompts.map((line, index) => (
                <div className='flex gap-2 items-start' key={index}>
                  <span className='mt-1'>
                    <Checkbox
                      size='sm'
                      checked={selectedPrompts.includes(line)}
                      onChange={() => handleSelect(line)}
                    />
                  </span>

                  <p key={index} className='text-gray-700 text-sm font-medium'>
                    {line}
                  </p>
                </div>
              ))}
            </Stack>
          ) : (
            <Stack gap={24} className='h-[400px] justify-center items-center bg-gray-50 rounded-xl'>
              <Stack gap={48} justify='center' align='center'>
                <Stack gap={4} justify='center' align='center'>
                  <p className='font-semibold text-base text-gray-900'>
                    Add your custom constitution
                  </p>
                  <p className='text-gray-600 text-sm font-normal'>
                    You can add and remove your constitution from here.
                  </p>
                </Stack>
                <Button
                  variant='secondary-black'
                  trailingIcon={<FiPlus size={16} />}
                  onClick={() => setStep('add')}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          )}
        </>
      )}

      {step === 'add' && (
        <Stack>
          {newPrompts.map((prompt, index) => (
            <TextArea
              key={index}
              value={prompt}
              placeholder='Enter your own constituition...'
              label='Point'
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </Stack>
      )}

      {step === 'list' ? (
        <div className={classNames('grid gap-4', customPrompts.length > 0 ? 'grid-cols-2' : '')}>
          <Button
            size='md'
            fullWidth
            disabled={customPrompts.length === 0 || selectedPrompts?.length === 0}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
          {customPrompts.length > 0 && (
            <Button
              fullWidth
              size='md'
              variant='secondary-black'
              onClick={() => setStep('add')}
              trailingIcon={<FiPlus size={18} />}
            >
              Add
            </Button>
          )}
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          <Button
            fullWidth
            onClick={() => {
              setCustomPrompts(newPrompts?.filter((prompt) => Boolean(prompt)));
              setStep('list');
            }}
          >
            {t('settings.save_changes')}
          </Button>
          <Button variant='secondary' fullWidth onClick={() => setStep('list')}>
            {t('campaign_details.go_back')}
          </Button>
        </div>
      )}
    </Stack>
  );
};

export default Custom;
