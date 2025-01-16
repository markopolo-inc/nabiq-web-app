import { FiCommand } from '@nabiq-icons';
import { Button, Group, List, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

const instructions: string[] = [
  'Copy the Name.',
  'Go to your domain registrar.',
  'Go to your DNS management page. For example- Route 53 dashboard has the DNS management tab in its dashboard. Click on “Hosted zones”',
  'Click on your domain name/link.',
  'Then click on “Create Record” in the Records page that you will be taken to.',
  'Paste the copied DNS name in the “Records Name” field. Since Route 53 adds the domain name at the last itself, we can remove that part from our copied name.',
  'Set the record type according to the Type given here.',
  'Copy the value from here and enter it in the “Value” field in your domain registrar.',
  'Then click on Create Record.',
  'Come back here and click on “Verify Tag”.',
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
              The DNS record needs to be set in your domain registrar (Route 53, GoDaddy, NameCheap
              etc.) for us to verify the tag and proceed further. You can watch the tutorial if you
              need help.
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
                  {idx + 1}. {instruction}
                </List.Item>
              ))}
            </List>
          </Stack>

          <Button fullWidth variant='primary' onClick={() => setOpened(false)}>
            Understood
          </Button>
        </div>
      )}
    >
      {({ setOpened }) => (
        <Button fullWidth variant='secondary' onClick={() => setOpened(true)}>
          How does it work?
        </Button>
      )}
    </Modal>
  );
};

export default HowDoesWorkPopup;
