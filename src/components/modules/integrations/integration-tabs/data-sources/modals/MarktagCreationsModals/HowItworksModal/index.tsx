import { FiCommand } from '@nabiq-icons';
import { Button, Group, List, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

const instructions: string[] = [
  'home_page.copy_name',
  'home_page.go_to_registrar',
  'home_page.dns_management_instructions',
  'home_page.click_domain',
  'home_page.create_record_instructions',
  'home_page.paste_dns_name',
  'home_page.set_record_type',
  'home_page.copy_value',
  'home_page.create_record',
  'home_page.verify_tag',
];

const HowDoesWorkPopup: React.FC = () => {
  const { t } = useTranslation();
  const { primary500, gray600, gray900 } = useGetColors();

  return (
    <Modal
      centered
      size={500}
      title={() => (
        <Group className='p-2 rounded-lg border border-gray-200 bg-white shadow-sm'>
          <FiCommand color={primary500} />
        </Group>
      )}
      body={({ setOpened }) => (
        <div className='p-5'>
          <Stack gap={8}>
            <Text color={gray900} size='24px' weight={600}>
              {t('home_page.how_it_works')}
            </Text>
            <Text color={gray600} size='16px' className='leading-6'>
              {t('home_page.dns_instructions')}
            </Text>
          </Stack>

          <Stack gap={12} pt={28}>
            <Text color={gray900} size='24px' weight={600}>
              {t('home_page.instructions')}
            </Text>

            <List
              type='ordered'
              size='md'
              spacing={16}
              mb={28}
              styles={{
                root: { color: gray600 },
                item: { color: gray600 },
                itemWrapper: { color: gray600 },
              }}
            >
              {instructions.map((instruction, idx) => (
                <List.Item key={idx}>
                  {idx + 1}. {t(instruction)}
                </List.Item>
              ))}
            </List>
          </Stack>

          <Button fullWidth variant='primary' onClick={() => setOpened(false)}>
            {t('home_page.understood')}
          </Button>
        </div>
      )}
    >
      {({ setOpened }) => (
        <Button fullWidth variant='secondary' onClick={() => setOpened(true)}>
          {t('home_page.how_does_it')}
        </Button>
      )}
    </Modal>
  );
};

export default HowDoesWorkPopup;
