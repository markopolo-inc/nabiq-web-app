import { useState } from 'react';
import {
  ECommerce,
  Facebook,
  Hubspot,
  Marktag,
  MarktagCreationsModals,
  Salesforce,
  Zoho,
} from 'src/components/modules/integrations/integration-tabs/data-sources';

export const DataSources = () => {
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  return (
    <>
      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Marktag onShowMarktag={() => setShowMarktagModal(true)} />
        <Hubspot />
        <Salesforce />
        <Facebook />
        <ECommerce />
        <Zoho />
      </div>
    </>
  );
};
