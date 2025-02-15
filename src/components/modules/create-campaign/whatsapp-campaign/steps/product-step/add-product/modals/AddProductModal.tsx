import { FiBox } from '@nabiq-icons';
import { Button, Card, Modal, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { TProductSource } from 'src/interfaces/modules/campaign';
import { productSources } from 'src/lib/campaign.lib';
import { useCampaignDispatch, useCampaignSelector } from 'src/store/hooks';

const ModalBody = ({ setOpened }: { setOpened: (state: boolean) => void }) => {
  const { t } = useTranslation();
  const campaign = useCampaignSelector();
  const dispatchCampaign = useCampaignDispatch();

  return (
    <Stack gap={64} className='p-8'>
      <Stack gap={0}>
        <p className='text-2xl text-gray-900 font-semibold'>{t('create_campaign.add_product_2')}</p>
        <p className='text-gray-600'>{t('create_campaign.choose_product_addition')}</p>
      </Stack>
      <div className='grid grid-cols-2 gap-4'>
        {productSources.map((source) => (
          <Card key={source.platform} className='!gap-5 items-center justify-center'>
            <source.icon size={48} />
            <Stack gap={16} justify='center' align='center'>
              <p className='text-lg font-semibold text-gray-900'>{t(source.title)}</p>
              <p className='text-gray-600 text-sm text-center'>{t(source.headline)}</p>
            </Stack>
            <Button
              fullWidth
              onClick={() => {
                dispatchCampaign({
                  productSource: source.platform as TProductSource,
                });
                setOpened(false);
              }}
              disabled={campaign.productSource === source.platform}
            >
              {campaign.productSource === source.platform
                ? t('create_campaign.selected')
                : t('create_campaign.select')}
            </Button>
          </Card>
        ))}
      </div>
    </Stack>
  );
};

export const AddProductModal = () => {
  const { t } = useTranslation();
  const campaign = useCampaignSelector();

  return (
    <Modal
      withCustomClose
      title={() => t('create_campaign.add_product_2')}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
      withNoHeader
    >
      {({ setOpened }) =>
        campaign.productSource ? (
          <Button
            variant='link'
            size='sm'
            className='!p-0 mt-[-12px]'
            onClick={() => setOpened(true)}
          >
            {t('create_campaign.change_product_addition')}
          </Button>
        ) : (
          <Button
            variant='secondary'
            onClick={() => setOpened(true)}
            leadingIcon={<FiBox size={18} />}
          >
            {t('create_campaign.add_product_2')}
          </Button>
        )
      }
    </Modal>
  );
};
