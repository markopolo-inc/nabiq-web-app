import { RiCodeAiFill, RiFlashLight, RiMegaPhoneFill, RiShieldFill } from '@nabiq-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useQuickActions = ({
  setShowCampaignGoalModal,
  setShowConstitutionalAIModerationModal,
}: {
  setShowCampaignGoalModal: (value: boolean) => void;
  setShowConstitutionalAIModerationModal: (value: boolean) => void;
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return [
    {
      id: 1,
      header: t('home_page.sync_lead_databases'),
      subHeader: t('home_page.capture_marketing_data'),
      icon: RiCodeAiFill,
      onClick: () => {
        navigate({
          pathname: '/integrations',
          search: '?selectedTab=data-sources',
        });
      },
    },
    {
      id: 2,
      header: t('home_page.campaign_create_first'),
      subHeader: t('home_page.launch_campaign'),
      icon: RiMegaPhoneFill,
      onClick: () => {
        setShowCampaignGoalModal(true);
      },
    },
    {
      id: 3,
      header: t('home_page.ai_constitution'),
      subHeader: t('home_page.reduce_ai_bias'),
      icon: RiShieldFill,
      onClick: () => {
        setShowConstitutionalAIModerationModal(true);
      },
    },
    {
      id: 4,
      header: t('home_page.channels_integration'),
      subHeader: t('home_page.send_marketing_campaigns'),
      icon: RiFlashLight,
      onClick: () => {
        navigate({
          pathname: '/integrations',
          search: '?selectedTab=email',
        });
      },
    },
  ];
};
