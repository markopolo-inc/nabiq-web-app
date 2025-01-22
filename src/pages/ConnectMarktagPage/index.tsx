import { HeaderTitle } from 'layouts';
import { useTranslation } from 'react-i18next';
import { MarktagDetails, MarktagSidebar } from 'src/components/modules/home';

const ConnectMarktag = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderTitle>{t('page_title.connect_marktag_title')}</HeaderTitle>

      <div className='min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <MarktagSidebar />
        <MarktagDetails />
      </div>
    </>
  );
};

export default ConnectMarktag;
