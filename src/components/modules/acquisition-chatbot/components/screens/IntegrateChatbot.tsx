import { FiCopy02 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import React from 'react';
import toast from 'react-hot-toast';
import { Trans, useTranslation } from 'react-i18next';

type IntegrateChatbotProps = {
  apiKey: string;
};

export const IntegrateChatbot: React.FC<IntegrateChatbotProps> = ({ apiKey }) => {
  const { t } = useTranslation();

  const code = `
<!-- Chatbot Integration Script -->
<script>
  (function () {
    const config = {
      botName: "NabiqBot",
      apiKey: "${apiKey}",
      welcomeMessage: "Hi! How can I help?",
      themeColor: "#007BFF",
      position: "bottom-right",
    };
    const script = document.createElement("script");
    script.src = "${import.meta.env.VITE_ACQUISITION_CHATBOT_SCRIPT_URL || 'N/A'}";
    script.async = true;
    script.onload = () => window.initializeChatbot?.(config);
    document.head.appendChild(script);
  })();
</script>
  `;

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success(t('home_page.copy_to_clipboard'));
  };

  return (
    <Stack
      gap={24}
      className='max-w-[768px] w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm'
    >
      <Stack gap={4}>
        <p className='text-gray-900 text-lg font-semibold'>
          {t('acquisition_chatbot_page.integrate_chatbot')}
        </p>
        <p className='text-gray-600 text-sm font-normal'>
          <Trans i18nKey='acquisition_chatbot_page.copy_paste_code'>
            Copy and paste the following code into your website's <code>head</code> tag.
          </Trans>
        </p>
      </Stack>

      <Stack className='rounded-xl p-4 bg-gray-50'>
        <Stack className='rounded-xl p-6 bg-white border border-gray-200 flex-col' gap={0}>
          <Button
            className='self-end'
            variant='primary'
            leadingIcon={<FiCopy02 />}
            onClick={() => handleCopy(code)}
          >
            {t('acquisition_chatbot_page.copy')}
          </Button>
          <code
            className='font-medium text-base text-gray-600 block whitespace-pre-wrap'
            style={{
              direction: 'ltr',
            }}
          >
            {code}
          </code>
        </Stack>
      </Stack>
    </Stack>
  );
};
