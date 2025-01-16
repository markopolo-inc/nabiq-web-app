import { Button, Checkbox, Group, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { presetPrompts } from 'src/lib/home/constitutional-ai';

export const Presets = ({
  setSelected,
  selectedPrompts,
  handleSelect,
  handleConfirm,
}: {
  setSelected: Dispatch<SetStateAction<string[]>>;
  selectedPrompts: string[];
  handleSelect: (line: string) => void;
  handleConfirm: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <Stack gap={24}>
      <Group justify='space-between' className='w-full'>
        <p className='text-gray-900 text-lg font-semibold'>
          {t('home_page.ai_constitutions_to_train')}
        </p>
        <Button variant='link' className='!pr-0' onClick={() => setSelected([])}>
          {t('home_page.deselect_all')}
        </Button>
      </Group>
      <Stack gap={24} className='max-h-[400px] overflow-y-scroll'>
        {presetPrompts.map((line, index) => (
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
      <Button size='md' disabled={selectedPrompts.length === 0} fullWidth onClick={handleConfirm}>
        {t('home_page.confirm')}
      </Button>
    </Stack>
  );
};
