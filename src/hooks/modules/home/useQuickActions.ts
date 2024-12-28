import { useNavigate } from 'react-router-dom';

export const useQuickActions = ({
  setShowCampaignGoalModal,
  setShowConstitutionalAIModerationModal,
}: {
  setShowCampaignGoalModal: (value: boolean) => void;
  setShowConstitutionalAIModerationModal: (value: boolean) => void;
}) => {
  const navigate = useNavigate();
  return [
    {
      id: 1,
      header: 'Sync lead databases',
      subHeader: 'Capture and track your marketing data.',
      medium: 'ri_code_ai_fill',
      onClick: () => {
        navigate({
          pathname: '/integrations',
          search: '?selectedTab=data-sources',
        });
      },
    },
    {
      id: 2,
      header: 'Create a campaign',
      subHeader: 'Launch a campaign to connect with your audience.',
      medium: 'ri_megaphone_fill',
      onClick: () => {
        setShowCampaignGoalModal(true);
      },
    },
    {
      id: 3,
      header: 'AI constitution',
      subHeader: 'Help us make AI smarter and safer by reducing bias.',
      medium: 'ri_shield_fill',
      onClick: () => {
        setShowConstitutionalAIModerationModal(true);
      },
    },
    {
      id: 4,
      header: 'Integrate channels',
      subHeader: 'Send marketing campaigns to your audience.',
      medium: 'ri_flashlight_fill',
      onClick: () => {
        navigate({
          pathname: '/integrations',
          search: '?selectedTab=email',
        });
      },
    },
  ];
};
