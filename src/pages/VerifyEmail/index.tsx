import VerifyForm from 'src/components/Features/VerifyEmail/VerifyForm';
import HeaderTitle from 'src/layouts/HeaderTitle';

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
