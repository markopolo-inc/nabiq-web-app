import { FiLinkBroken01 } from '@nabiq-icons';
import { Button, Modal, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { IGateway } from 'src/interfaces/brand.interface';
import { useAppSelector } from 'src/store/hooks';
import { useDisconnectGatewayMutation } from 'src/store/integrations/integrations.api';

const ModalBody = ({
  setOpened,
  gateway,
}: {
  setOpened: Dispatch<SetStateAction<boolean>>;
  gateway: IGateway;
}) => {
  const { t } = useTranslation();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const [disconnect, { isLoading }] = useDisconnectGatewayMutation();
  return (
    <Stack className='p-8 pt-0' gap={32}>
      <Stack gap={4}>
        <p className='text-gray-900 font-semibold text-2xl'>
          {t('integrations.disconnect_gateway', { name: gateway.name })}
        </p>
        <p className='text-gray-600 font-normal text-base'>
          {t('integrations.pause_operations', { gateway: gateway.name })}
        </p>
      </Stack>
      <Stack>
        <Button
          variant='primary-destructive'
          fullWidth
          size='sm'
          loading={isLoading}
          onClick={async () => {
            const res = await disconnect({
              category: gateway.category,
              payload: {
                brandId,
                gateway: gateway.gateway,
              },
            }).unwrap();

            if (res?.success) {
              setOpened(false);
            }
          }}
        >
          {t('integrations.yes_disconnect')}
        </Button>
        <Button
          variant='secondary'
          fullWidth
          onClick={() => setOpened(false)}
          size='sm'
          disabled={isLoading}
        >
          {t('integrations.no_go_back')}
        </Button>
      </Stack>
    </Stack>
  );
};

export const GatewayDisconnectModal = ({ gateway }: { gateway: IGateway }) => {
  const { t } = useTranslation();
  return (
    <Modal
      size='md'
      body={({ setOpened }) => <ModalBody setOpened={setOpened} gateway={gateway} />}
      title={() => (
        <div className='flex items-center gap-2 p-3'>
          <div className='p-2 rounded-full bg-red-50'>
            <FiLinkBroken01 size={22} color='#D92D20' />
          </div>
        </div>
      )}
      withCloseButton
    >
      {({ setOpened }) => (
        <Button className='!w-28' onClick={() => setOpened(true)} variant='tertiary-destructive'>
          {t('integrations.disconnect')}
        </Button>
      )}
    </Modal>
  );
};
