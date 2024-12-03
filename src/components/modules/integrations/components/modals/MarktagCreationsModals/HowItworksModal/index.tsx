import { FiCommand } from '@nabiq-icons';
import { Button, Group, List, Modal, Stack, Text, useGetColors } from '@nabiq-ui';
import React from 'react';

const HowDoesWorkPopup: React.FC = () => {
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
              How it works
            </Text>
            <Text color={gray600} size='16px' className='leading-6'>
              The DNS record needs to be set in your domain registrar (Route 53, GoDaddy, NameCheap
              etc.) for us to verify the tag and proceed further. You can watch the tutorial if you
              need help.
            </Text>
          </Stack>

          <Stack gap={12} pt={28}>
            <Text color={gray900} size='24px' weight={600}>
              Instructions
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
              <List.Item>1. Copy the Name.</List.Item>
              <List.Item>2. Go to your domain registrar.</List.Item>
              <List.Item>
                3. Go to your DNS management page. For example- Route 53 dashboard has the DNS
                management tab in its dashboard. Click on “Hosted zones”
              </List.Item>
              <List.Item>4. Click on your domain name/link.</List.Item>
              <List.Item>
                5. Then click on “Create Record” in the Records page that you will be taken to.
              </List.Item>
              <List.Item>
                6. Paste the copied DNS name in the “Records Name” field. Since Route 53 adds the
                domain name at the last itself, we can remove that part from our copied name.
              </List.Item>
              <List.Item>7. Set the record type according to the Type given here.</List.Item>
              <List.Item>
                8. Copy the value from here and enter it in the “Value” field in your domain
                registrar.
              </List.Item>
              <List.Item>9. Then click on Create Record.</List.Item>
              <List.Item>10. Come back here and click on “Verify Tag”.</List.Item>
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
