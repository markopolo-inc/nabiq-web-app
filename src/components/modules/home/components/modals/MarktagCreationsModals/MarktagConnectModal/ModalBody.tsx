import { useContext } from 'react';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

import CalendlyPopup from './CalendlyPopup';
import ChooseOption from './ChooseOption';
import ConnectMarktag from './ConnectMarktag';
import CreateNew from './CreateNew';
import DNSRecord from './DNSRecord';
import EmailToDeveloper from './EmailToDeveloper';
import GuidedSupport from './GuidedSupport';
import InstallCode from './InstallCode';
import RegisterDomain from './RegisterDomain';

const ModalBody = ({ setOpened }) => {
  const { step } = useContext<MarktagContextType>(MarkTagContext);

  return (
    <div style={{ padding: '4px 24px 24px' }}>
      {step === 'connect' && <ConnectMarktag />}
      {step === 'create' && <CreateNew />}
      {step === 'register' && <RegisterDomain setOpened={setOpened} />}
      {step === 'verify' && <DNSRecord />}
      {step === 'choose' && <ChooseOption />}
      {step === 'code' && <InstallCode setOpened={setOpened} />}
      {step === 'email' && <EmailToDeveloper setOpened={setOpened} />}
      {step === 'support' && <GuidedSupport />}
      {step === 'calendly' && <CalendlyPopup />}
    </div>
  );
};

export default ModalBody;
