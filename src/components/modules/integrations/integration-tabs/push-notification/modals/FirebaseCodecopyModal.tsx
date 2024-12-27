import { FiCopy02 } from '@nabiq-icons';
import { Button, GatewayLogo, Group, Modal, Stack } from '@nabiq-ui';
import { toast } from 'react-hot-toast';

const ModalBody = () => {
  const codeText = `mtag('event', {
    type: 'fcm',
    fcmToken: '`;

  const codeEnd = `'
});`;

  return (
    <Stack gap={32} className='p-8'>
      <Stack gap={16}>
        <GatewayLogo app='firebase' width={32} />
        <Stack gap={4}>
          <p className='text-gray-900 font-semibold text-xl'>Integrate Firebase</p>
          <p className='text-gray-600'>{`Copy the following code and paste in your <head> tag.`}</p>
        </Stack>
      </Stack>
      <Stack className='border rounded-xl border-gray-200 p-6' gap={12}>
        <Group justify='flex-end'>
          <Button
            leadingIcon={<FiCopy02 />}
            onClick={() => {
              navigator.clipboard.writeText(codeText + 'USER_FCM_TOKEN' + codeEnd);
              toast.success('Code copied to clipboard!', { id: 'code-copied' });
            }}
          >
            Copy
          </Button>
        </Group>
        <pre style={{ fontSize: 16, fontFamily: 'monospace' }}>
          {codeText}
          <span style={{ color: '#2972F5' }}>USER_FCM_TOKEN</span>
          {codeEnd}
        </pre>
      </Stack>
      <p className='text-gray-600'>
        Please input the user token in the{' '}
        <span className='font-semibold' style={{ color: '#000', fontFamily: 'monospace' }}>
          fcmToken
        </span>{' '}
        field after integrating firebase to your website.
      </p>
    </Stack>
  );
};

export const FirebaseCodecopyModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) => {
  return (
    <Modal
      size='xl'
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      withCustomClose
      withNoHeader
      body={() => <ModalBody />}
    >
      {() => null}
    </Modal>
  );
};
