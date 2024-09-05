import { Button, Text } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

const SignUpFooter = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center gap-1'>
      <Text className='text-md text-gray-600'>Already have an account?</Text>
      <Button variant='link' size='md' className='px-0' onClick={() => navigate(`/login`)}>
        Login
      </Button>
    </div>
  );
};

export default SignUpFooter;
