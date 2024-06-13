import ResetPasswordForm from 'src/components/Features/ResetPassword/ResetPasswordForm';
import HeaderTitle from 'src/layouts/HeaderTitle';

const ResetPassword = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Reset Password</HeaderTitle>

      <div className='flex min-h-screen flex-1 flex-col justify-center items-center px-6'>
        <ResetPasswordForm />
      </div>
    </>
  );
};

export default ResetPassword;
