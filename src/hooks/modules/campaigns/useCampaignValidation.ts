import { useEffect, useState } from 'react';
import { useAppSelector, useCampaignSelector } from 'src/store/hooks';

export const useWhatsAppCampaignValidation = (activeStep: number) => {
  const campaign = useCampaignSelector();
  const { socialIntegrations } = useAppSelector((state) => state.brand);
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const _errors = [];
    if (activeStep === 0) {
      if (socialIntegrations?.socialTokens?.facebook) {
        if (!socialIntegrations?.whatsApp?.number) {
          _errors.push('WhatsApp number is required');
        }
      } else {
        _errors.push('Connect your WhatsApp business account');
      }
      if (campaign?.product?.length === 0) {
        _errors.push('Add at least one product');
      }
    }
    setErrors(_errors);
  }, [activeStep, socialIntegrations, campaign?.product]);

  return { errors };
};
