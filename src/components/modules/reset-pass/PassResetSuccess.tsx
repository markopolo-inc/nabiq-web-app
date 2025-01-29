import { FiCheck } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PassResetSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className='p-2 bg-success-600 rounded-full'>
        <FiCheck size={16} color='#fff' />
      </div>

      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>{t('reset_pass.password_changed')}</p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          {t('reset_pass.password_changed_successfully')}
        </p>
      </Stack>

      <Button type='submit' fullWidth onClick={() => navigate('/login')}>
        {t('reset_pass.back_to_sign_in')}
      </Button>
    </>
  );
};
