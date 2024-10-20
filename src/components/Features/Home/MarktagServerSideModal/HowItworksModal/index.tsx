import { FiCommand } from '@nabiq-icons';
import { Button, Group, List, Modal, Stack, Text, useGetColors } from '@nabiq-ui';

import styles from './index.module.scss';

const HowDoesWorkPopup = () => {
  const { gray500, gray900 } = useGetColors();

  return (
    <Modal
      centered
      size={500}
      title={() => (
        <Group className={styles.iconWrapper}>
          <FiCommand color={gray500} />
        </Group>
      )}
      body={({ setOpened }) => (
        <div className={styles.body}>
          <Stack gap={8}>
            <Text color={gray900} size='18px' weight={600}>
              How it works
            </Text>
            <Text color={gray500} size='16px'>
              The DNS record needs to be set in your domain registrar (Route 53, GoDaddy, NameCheap
              etc.) for us to verify the tag and proceed further. You can watch the tutorial if you
              need help.
            </Text>
          </Stack>

          <Stack gap={12} pt={28}>
            <Text color={gray900} size='18px' weight={600}>
              Instructions
            </Text>

            <List
              type='ordered'
              spacing={8}
              mb={28}
              styles={{
                root: { color: gray500 },
                item: { color: gray500 },
                itemWrapper: { color: gray500 },
              }}
            >
              <List.Item>Copy the Name.</List.Item>
              <List.Item>Go to your domain registrar.</List.Item>
              <List.Item>
                Go to your DNS management page. For example- Route 53 dashboard has the DNS
                management tab in its dashboard. Click on “Hosted zones”
              </List.Item>
              <List.Item>Click on your domain name/link.</List.Item>
              <List.Item>
                Then click on “Create Record” in the Records page that you will be taken to.
              </List.Item>
              <List.Item>
                Paste the copied DNS name in the “Records Name” field. Since Route 53 adds the
                domain name at the last itself, we can remove that part from our copied name.
              </List.Item>
              <List.Item>Set the record type according to the Type given here.</List.Item>
              <List.Item>
                Copy the value from here and enter it in the “Value” field in your domain registrar.
              </List.Item>
              <List.Item>Then click on Create Record.</List.Item>
              <List.Item>Come back here and click on “Verify Tag”.</List.Item>
            </List>
          </Stack>

          <Button variant='primary' style={{ width: '100%' }} onClick={() => setOpened(false)}>
            Understood
          </Button>
        </div>
      )}
    >
      {({ setOpened }) => (
        <Button variant='secondary' onClick={() => setOpened(true)}>
          How does it work?
        </Button>
      )}
    </Modal>
  );
};

export default HowDoesWorkPopup;
