import { Button, Text } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

const LogInFooter = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center gap-1'>
      <Text className='text-md text-gray-600'>Don’t have an account?</Text>
      <Button variant='link' size='md' className='px-0' onClick={() => navigate(`/signup`)}>
        Sign Up
      </Button>
    </div>
  );
};

export default LogInFooter;
