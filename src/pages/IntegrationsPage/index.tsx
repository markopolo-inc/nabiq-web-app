import { OptionTabs } from '@nabiq-ui';
import { DataSources, EmailSmsApp, Whatsapp } from 'components/modules/integrations';
import { HeaderTitle } from 'layouts';
import { appCategories } from 'lib/integration.lib';
import { useState } from 'react';
import type { TOptionTab } from 'src/interfaces/modules/integrations';

const IntegrationsPage = () => {
  const [selectedTab, setSelectedTab] = useState<TOptionTab>('data-sources');

  return (
    <>
      <HeaderTitle>Nabiq - Integrations</HeaderTitle>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Integrations</p>
          <p className='text-gray-600 font-normal text-lg'>
            Integrate email, sms and push notification apps to build custom marketing funnels.
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <OptionTabs
            setActive={setSelectedTab}
            active={selectedTab}
            options={appCategories?.map((item) => ({
              ...item,
              label: (
                <div className='flex gap-2 items-center'>
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </div>
              ),
            }))}
          />
          {['email', 'sms'].includes(selectedTab) && <EmailSmsApp selectedTab={selectedTab} />}
          {selectedTab === 'data-sources' && <DataSources />}
          {selectedTab === 'whatsapp' && <Whatsapp />}
        </div>
      </div>
    </>
  );
};

export default IntegrationsPage;
