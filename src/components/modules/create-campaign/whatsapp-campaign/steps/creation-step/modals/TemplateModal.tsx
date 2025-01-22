import { FiLayoutAlt04 } from '@nabiq-icons';
import { Button, Card, Modal, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { waCampaignTemplates } from 'src/lib/campaign.lib';
import { useCampaignDispatch } from 'src/store/hooks';

const ModalBody = ({ setOpened }: { setOpened: (state: boolean) => void }) => {
  const { t } = useTranslation();
  const campaignDispatch = useCampaignDispatch();
  return (
    <Stack className='p-8' gap={32}>
      <Stack gap={0}>
        <p className='text-2xl font-semibold text-gray-900'>{t('create_campaign.templates')}</p>
        <p className='text-sm text-gray-600'>{t('create_campaign.custom_templates')}</p>
      </Stack>
      <div className='grid grid-cols-3 gap-4'>
        {waCampaignTemplates.map((template, index) => (
          <Card key={index} className='g'>
            <Stack gap={24}>
              <p className='text-lg font-semibold text-gray-900'>{t(template.title)}</p>
              <p className='text-sm text-gray-600'>{t(template.template)}</p>
            </Stack>
            <Button
              variant='secondary-black'
              onClick={() => {
                setOpened(false);
                campaignDispatch({
                  instruction: template.template,
                });
              }}
            >
              {t('create_campaign.use')}
            </Button>
          </Card>
        ))}
      </div>
    </Stack>
  );
};

export const TemplateModal = () => {
  const { t } = useTranslation();
  return (
    <Modal
      size='90%'
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
      withNoHeader
      withCustomClose
    >
      {({ setOpened }) => (
        <Button
          variant='secondary-black'
          onClick={() => setOpened(true)}
          leadingIcon={<FiLayoutAlt04 size={17} />}
        >
          {t('create_campaign.use_template')}
        </Button>
      )}
    </Modal>
  );
};
