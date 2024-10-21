import { useContext } from 'react';
// import toast from 'react-hot-toast';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';

import Code from './Code';
import CreateNew from './CreateNew';
import DNSRecord from './DNSRecord';
import RegisterDomain from './RegisterDomain';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ModalBody = ({ setOpened, selectedMarktagId = null }) => {
  //  const { step, setLoading, setDomain, setDomainData, setStep } =
  const { step } = useContext<MarktagContextType>(MarkTagContext);

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
      {step === 'create' && <CreateNew />}
      {step === 'register' && <RegisterDomain />}
      {step === 'verify' && <DNSRecord />}
      {step === 'code' && <Code setOpened={setOpened} />}
    </div>
  );
};

export default ModalBody;
