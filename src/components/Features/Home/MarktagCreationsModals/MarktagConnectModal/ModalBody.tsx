import { useContext } from 'react';
// import toast from 'react-hot-toast';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

import ChooseOption from './ChooseOption';
import ConnectMarktag from './ConnectMarktag';
// import Code from './Code';
import CreateNew from './CreateNew';
import DNSRecord from './DNSRecord';
import EmailToDeveloper from './EmailToDeveloper';
import GuidedSupport from './GuidedSupport';
import InstallCode from './InstallCode';
import RegisterDomain from './RegisterDomain';

const ModalBody = ({ setOpened }) => {
  //  const { step, setLoading, setDomain, setDomainData, setStep } =
  const { step } = useContext<MarktagContextType>(MarkTagContext);
  // const [selectedMarktagId, setSelectedMarktagId] = useState(null);

  // useEffect(() => {
  //   if (selectedMarktagId) {
  //     setLoading(true);
  //     toast.loading('Please wait!');
  //     markTagApi
  //       .getMarkTagById({ markTagId: selectedMarktagId })
  //       .then((res) => {
  //         setStep('verify');
  //         setDomain(res.domain);
  //         setDomainData(res);
  //       })
  //       .finally(() => {
  //         toast.dismiss();
  //         setLoading(false);
  //       });
  //   }
  // }, [selectedMarktagId]);

  return (
    <div style={{ padding: '4px 24px 24px' }}>
      {step === 'connect' && <ConnectMarktag />}
      {step === 'create' && <CreateNew />}
      {step === 'register' && <RegisterDomain />}
      {step === 'verify' && <DNSRecord />}
      {step === 'choose' && <ChooseOption />}
      {step === 'code' && <InstallCode />}
      {/* {step === 'code' && <Code setOpened={setOpened} />} */}
      {step === 'email' && <EmailToDeveloper setOpened={setOpened} />}
      {step === 'support' && <GuidedSupport />}
    </div>
  );
};

export default ModalBody;
