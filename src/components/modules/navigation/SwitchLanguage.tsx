import { FiTranslation01 } from '@nabiq-icons';
import { useTranslation } from 'react-i18next';

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
      className='text-white bg-transparent border-none text-sm font-semibold flex items-center gap-2'
    >
      <FiTranslation01 color='white' size={16} strokeWidth={2} />
      {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    </button>
  );
};
