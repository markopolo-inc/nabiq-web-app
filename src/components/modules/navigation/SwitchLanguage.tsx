import { Button } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
      Switch Language
    </Button>
  );
};
