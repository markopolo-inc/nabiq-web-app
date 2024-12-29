import { RiCodeAiFill, RiFlashLight, RiMegaPhoneFill, RiShieldFill } from '@nabiq-icons';
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
      header: 'Create a campaign',
      subHeader: 'Launch a campaign to connect with your audience.',
      icon: RiMegaPhoneFill,
      onClick: () => {
        setShowCampaignGoalModal(true);
      },
    },
    {
      id: 3,
      header: 'AI constitution',
      subHeader: 'Help us make AI smarter and safer by reducing bias.',
      icon: RiShieldFill,
      onClick: () => {
        setShowConstitutionalAIModerationModal(true);
      },
    },
    {
      id: 4,
      header: 'Integrate channels',
      subHeader: 'Send marketing campaigns to your audience.',
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
