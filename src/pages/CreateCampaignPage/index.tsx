import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmailSmsCampaign, WhatsappCampaign } from 'src/components/modules/create-campaign';
import { TCampaignMedium } from 'src/interfaces/modules/campaign';

const CreateCampaignPage = () => {
  const [searchParams] = useSearchParams();

  const campaignMedium: TCampaignMedium = useMemo(
    () => searchParams.get('campaign-mode') as TCampaignMedium,
    [searchParams],
  );

  return (
    <>
      {campaignMedium === 'email-sms' && <EmailSmsCampaign />}
      {campaignMedium === 'whatsapp' && <WhatsappCampaign />}
    </>
  );
};

export default CreateCampaignPage;
