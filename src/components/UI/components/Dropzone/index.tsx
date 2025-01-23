import { Group, rem } from '@mantine/core';
import { Dropzone as DropzoneField, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import { FiFileUpload } from '@nabiq-icons';
import { IconUpload, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import classes from './Index.module.scss';

function Dropzone(props: DropzoneProps) {
  const { t } = useTranslation();
  return (
    <DropzoneField
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      className={`${classes.root}`}
      {...props}
    >
      <Group className='flex-col' justify='center' gap='md' style={{ pointerEvents: 'none' }}>
        <DropzoneField.Accept>
          <div className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 shadow-custom-xs p-2.5'>
            <IconUpload
              style={{ width: rem(15), height: rem(15), color: '#2972F5' }}
              stroke={1.5}
            />
          </div>
        </DropzoneField.Accept>
        <DropzoneField.Reject>
          <div className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 shadow-custom-xs p-2.5'>
            <IconX style={{ width: rem(15), height: rem(15), color: '#D92D20' }} stroke={1.5} />
          </div>
        </DropzoneField.Reject>
        <DropzoneField.Idle>
          <div className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 shadow-custom-xs p-2.5'>
            <FiFileUpload color='#364152' size={15} strokeWidth={1.5} />
          </div>
        </DropzoneField.Idle>

        <div className='flex flex-col gap-1'>
          <div className='font-open text-sm leading-5 text-left'>
            <span className='font-semibold text-primary-600'>{t('settings.click_to_upload')}</span>
            <span className='font-normal text-gray-600'> {t('settings.drag_and_drop')}</span>
          </div>

          <div className='font-open text-xs font-normal leading-4 text-center text-gray-600'>
            {t('settings.upload_instructions')}
          </div>
        </div>
      </Group>
    </DropzoneField>
  );
}

export default Dropzone;
