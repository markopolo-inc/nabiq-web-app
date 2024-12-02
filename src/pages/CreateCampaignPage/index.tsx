import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmailSmsCampaign, WhatsappCampaign } from 'src/components/modules/campaigns';

const CreateCampaign = () => {
  const [searchParams] = useSearchParams();

  const campaignMedium = useMemo(
    () => searchParams.get('campaign-mode') as 'email-sms' | 'whatspp',
    [searchParams],
  );

  return (
    <>
      {campaignMedium === 'email-sms' && <EmailSmsCampaign />}
      {campaignMedium === 'whatspp' && <WhatsappCampaign />}
    </>
  );
};

export default CreateCampaign;
