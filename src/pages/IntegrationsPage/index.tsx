import { OptionTabs } from '@nabiq-ui';
import {
  DataSources,
  EmailSmsApp,
  PushNotification,
  Whatsapp,
} from 'components/modules/integrations';
import { AnimatePresence } from 'framer-motion';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { TOptionTab } from 'src/interfaces/modules/integrations';
import { appCategories } from 'src/lib/integration';

const IntegrationsPage = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<TOptionTab>('data-sources');

  return (
    <>
      <HeaderTitle>Nabiq - Integrations</HeaderTitle>
      <AnimatePresence>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col'>
            <p className='text-gray-900 font-semibold text-4xl'>
              {t('navigation.nav_integrations')}
            </p>
            <p className='text-gray-600 font-normal text-lg'>{t('integrations.general_desc')} </p>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex-nowrap overflow-x-auto pb-3'>
              <OptionTabs
                setActive={setSelectedTab}
                active={selectedTab}
                options={appCategories?.map((item) => ({
                  ...item,
                  label: (
                    <div className='flex gap-2 items-center'>
                      {item.icon && (
                        <span>
                          <item.icon
                            size={18}
                            color={selectedTab === item.value ? '#364152' : '#9AA4B2'}
                            strokeWidth={1.6}
                          />
                        </span>
                      )}
                      {t(item.label)}
                    </div>
                  ),
                }))}
              />
            </div>

            {(() => {
              switch (selectedTab) {
                case 'email':
                case 'sms':
                  return <EmailSmsApp selectedTab={selectedTab} />;
                case 'data-sources':
                  return <DataSources />;
                case 'whatsapp':
                  return <Whatsapp />;
                case 'push-notification':
                  return <PushNotification />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default IntegrationsPage;
