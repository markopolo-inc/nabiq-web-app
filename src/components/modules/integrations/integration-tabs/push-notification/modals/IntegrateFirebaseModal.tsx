import { FiZap } from '@nabiq-icons';
import { Button, GatewayLogo, JsonInput, Modal, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';
import { useIntegrateFirebaseMutation } from 'src/store/integrations/push-notification';

const Instructions = ({
  setShowInstructions,
}: {
  setShowInstructions: (value: boolean) => void;
}) => {
  const { t } = useTranslation();
  return (
    <Stack gap={32}>
      <Stack gap={16}>
        <GatewayLogo app='firebase' width={32} />
        <Stack gap={4}>
          <p className='text-gray-900 font-semibold text-xl'>
            {t('integrations.find_service_account_json')}
          </p>
          <p className='text-gray-600'>{t('integrations.step_by_step_instructions')}</p>
        </Stack>
      </Stack>
      <Stack gap={4} className='text-gray-600'>
        <p>1. {t('integrations.go_to_project_settings')}</p>
        <p>2. {t('integrations.select_service_account')}</p>
        <p>3. {t('integrations.generate_private_key')}</p>
      </Stack>
      <Button fullWidth onClick={() => setShowInstructions(false)}>
        {t('integrations.understood_go_back')}
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
  const { t } = useTranslation();
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
        setJsonError(t('integrations.missing_fields'));
        return;
      }

      setJsonError('');
    } catch (e) {
      setJsonError(t('integrations.invalid_json'));
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
              <p className='text-gray-900 font-semibold text-xl'>
                {t('integrations.integrate_firebase')}
              </p>
              <p className='text-gray-600'>{t('integrations.enter_service_account_json')}</p>
            </Stack>
          </Stack>
          <JsonInput
            placeholder={t('integrations.enter_json')}
            label={t('integrations.json')}
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
              {t('integrations.verify')}
            </Button>
            <Button onClick={() => setShowInstructions(true)} variant='link'>
              {t('integrations.find_service_account_json')}
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
  const { t } = useTranslation();
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
          {isPushNotificationConnected ? t('integrations.reconnect') : t('integrations.integrate')}
        </Button>
      )}
    </Modal>
  );
};
