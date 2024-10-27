import VerifyForm from 'components/Features/VerifyEmail/VerifyForm';
import { HeaderTitle } from 'layouts';

const VerifyEmail = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Verification</HeaderTitle>

      <div className='flex min-h-full flex-1 flex-col justify-center py-36 sm:py-28 px-6'>
        <VerifyForm />
      </div>
    </>
  );
};

export default VerifyEmail;
