import { Group, Stack, TextArea } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { TemplateModal } from 'src/components/modules/create-campaign/whatsapp-campaign/steps/creation-step/intex';
import { useCampaignDispatch, useCampaignSelector } from 'src/store/hooks';

export const CreationStep = () => {
  const { t } = useTranslation();
  const campaign = useCampaignSelector();
  const dispatchCampaign = useCampaignDispatch();
  return (
    <>
      <Stack className='w-full' align='center'>
        <Stack gap={32} maw={744}>
          <TextArea
            label={t('create_campaign.instructions_optional')}
            placeholder={t('create_campaign.provide_instructions')}
            description={t('create_campaign.leave_blank')}
            value={campaign?.instruction}
            onChange={(e) => dispatchCampaign({ instruction: e.currentTarget.value })}
          />
          <Group align='flex-start' justify='flex-start'>
            <TemplateModal />
          </Group>
        </Stack>
      </Stack>
    </>
  );
};
