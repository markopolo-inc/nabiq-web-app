import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo, JsonInput, Modal, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { useIntegrateFirebaseMutation } from 'src/store/integrations/push-notification';

const Instructions = ({
  setShowInstructions,
}: {
  setShowInstructions: (value: boolean) => void;
}) => {
  return (
    <Stack gap={32}>
      <Stack gap={16}>
        <GatewayLogo app='firebase' width={32} />
        <Stack gap={4}>
          <p className='text-gray-900 font-semibold text-xl'>How do I find service account JSON?</p>
          <p className='text-gray-600'>Step by step instructions given below.</p>
        </Stack>
      </Stack>
      <Stack gap={4} className='text-gray-600'>
        <p>1. Go to project settings</p>
        <p>2. Select 'Service account'</p>
        <p>3. Generate new private key</p>
      </Stack>
      <Button fullWidth onClick={() => setShowInstructions(false)}>
        Understood, go back.
      </Button>
    </Stack>
  );
};

const ModalBody = ({
  setOpened,
  setShowFirebaseCodecopyModal,
}: {
  setOpened: (value: boolean) => void;
  setShowFirebaseCodecopyModal: (value: boolean) => void;
}) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [json, setJson] = useState('');
  const [jsonError, setJsonError] = useState('');
  const { resourceId } = useAppSelector((state) => state.brand);
  const [integrateFirebase, { isLoading }] = useIntegrateFirebaseMutation();

  const validateJson = (value: string) => {
    try {
      if (!value) {
        setJsonError('');
        return;
      }
      const parsedJson = JSON.parse(value);

      if (!parsedJson.project_id || !parsedJson.private_key || !parsedJson.client_email) {
        setJsonError('Missing required fields: project_id, private_key, or client_email');
        return;
      }

      setJsonError('');
    } catch (e) {
      setJsonError('Invalid JSON. Please check again.');
    }
  };

  const handleVerify = async () => {
    const jsonData = JSON.parse(json);

    const payload = {
      brandId: resourceId,
      projectId: jsonData?.project_id,
      privateKey: jsonData?.private_key,
      clientEmail: jsonData?.client_email,
    };
    try {
      const res = await integrateFirebase(payload).unwrap();
      if (res?.success) {
        setShowFirebaseCodecopyModal(true);
        setOpened(false);
      }
    } catch (e) {
      return null;
    }
  };

  return (
    <Stack className='p-6'>
      {showInstructions ? (
        <Instructions setShowInstructions={setShowInstructions} />
      ) : (
        <Stack gap={32}>
          <Stack gap={16}>
            <GatewayLogo app='firebase' width={32} />
            <Stack gap={4}>
              <p className='text-gray-900 font-semibold text-xl'>Integrate Firebase</p>
              <p className='text-gray-600'>Enter your service account JSON.</p>
            </Stack>
          </Stack>
          <JsonInput
            placeholder='Enter JSON'
            label='JSON'
            value={json}
            onChange={(value) => {
              setJson(value);
              validateJson(value);
            }}
            error={jsonError}
            rows={15}
          />
          <Stack gap={4} justify='center' align='center'>
            <Button
              fullWidth
              loading={isLoading}
              onClick={handleVerify}
              disabled={!json || !!jsonError}
            >
              Verify
            </Button>
            <Button onClick={() => setShowInstructions(true)} variant='link'>
              How do I find service account JSON?
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export const IntegrateFirebaseModal = ({
  setShowFirebaseCodecopyModal,
}: {
  setShowFirebaseCodecopyModal: (value: boolean) => void;
}) => {
  const { markTag, pushIntegrations } = useAppSelector((state) => state.brand);

  const isMarkTagConnected = markTag?.resourceId;
  const isPushNotificationConnected = pushIntegrations?.firebase?.connected;
  return (
    <Modal
      withNoHeader
      withCustomClose
      body={({ setOpened }) => (
        <ModalBody
          setOpened={setOpened}
          setShowFirebaseCodecopyModal={setShowFirebaseCodecopyModal}
        />
      )}
      size='md'
    >
      {({ setOpened }) => (
        <Button
          leadingIcon={isMarkTagConnected ? <FiZap fill='white' size={18} /> : null}
          disabled={!isMarkTagConnected}
          onClick={() => setOpened(true)}
        >
          {isPushNotificationConnected ? 'Reconnect' : 'Integrate'}
        </Button>
      )}
    </Modal>
  );
};
