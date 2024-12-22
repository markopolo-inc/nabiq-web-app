import { Button } from '@nabiq-ui';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='text-6xl mb-4'>404</h1>
      <p className='text-xl mb-6'>Oops! The page you're looking for doesn't exist.</p>
      <Button onClick={() => navigate('/')} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
