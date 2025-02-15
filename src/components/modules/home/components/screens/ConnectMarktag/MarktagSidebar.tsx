import { ArrowNarrowLeft } from '@nabiq-icons';
import { Button, Image, Text } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo/nabiq-dark-logo.png';

export const MarktagSidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      className='relative lg:col-span-4'
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), #303534',
      }}
    >
      <div className='py-20 lg:py-16 pl-12 pr-8'>
        <Image className='w-36 cursor-pointer' src={logo} alt='' onClick={() => navigate('/')} />

        <div className='mt-16 flex flex-col gap-3'>
          <Text className='display-xl font-medium text-white'>
            {t('connect_marktag.select_marktag')}
          </Text>
          <Text className='text-xl text-gray-300'>{t('connect_marktag.track_customer_data')}</Text>
        </div>
      </div>

      <div className='absolute bottom-0 pl-12 pb-12'>
        <Button
          variant='secondary'
          leadingIcon={<ArrowNarrowLeft size={20} color='#4B5565' />}
          onClick={() => navigate(-1)}
        >
          {t('connect_marktag.go_back')}
        </Button>
      </div>
    </div>
  );
};
