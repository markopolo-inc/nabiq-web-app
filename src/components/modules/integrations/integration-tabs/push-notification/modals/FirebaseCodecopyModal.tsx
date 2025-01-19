import { FiCopy02 } from '@nabiq-icons';
import { Button, GatewayLogo, Group, Modal, Stack } from '@nabiq-ui';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const ModalBody = () => {
  const { t } = useTranslation();
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
          <p className='text-gray-900 font-semibold text-xl'>
            {t('integrations.integrate_firebase')}
          </p>
          <p className='text-gray-600'>{t('integrations.copy_code')}</p>
        </Stack>
      </Stack>
      <Stack className='border rounded-xl border-gray-200 p-6' gap={12}>
        <Group justify='flex-end'>
          <Button
            leadingIcon={<FiCopy02 />}
            onClick={() => {
              navigator.clipboard.writeText(codeText + 'USER_FCM_TOKEN' + codeEnd);
              toast.success(t('integrations.code_copied'), { id: 'code-copied' });
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
        {t('integrations.input_user_token')}{' '}
        <span className='font-semibold' style={{ color: '#000', fontFamily: 'monospace' }}>
          {t('integrations.fcm_token')}
        </span>{' '}
        {t('integrations.field_after_firebase')}
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
