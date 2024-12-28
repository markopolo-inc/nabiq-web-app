import { FiCopy02, FiHelpCircle } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AcquisitionChatbotPage = () => {
  const code = `
<!-- Chatbot Integration Script -->
<script>
  (function () {
    const config = {
      botName: "NabiqBot",
      apiKey: "YOUR_API_KEY", // Replace with actual API key
      welcomeMessage: "Hi! How can I help?",
      themeColor: "#007BFF",
      position: "bottom-right",
    };
    const script = document.createElement("script");
    script.src = "https://cdn.example.com/chatbot.js"; // Replace with actual script URL
    script.async = true;
    script.onload = () => window.initializeChatbot?.(config);
    document.head.appendChild(script);
  })();
</script>
  `;

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success('Copy to clipboard');
  };

  return (
    <>
      <Stack gap={64}>
        <Group justify='space-between'>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Acquisition chatbot</p>
            <p className='text-gray-600 text-base font-normal'>
              Convert visitors into leads with the acquisition chatbot.
            </p>
          </Stack>
          <Button variant='link' leadingIcon={<FiHelpCircle size={20} />}>
            Need help integrating chatbot?
          </Button>
        </Group>

        <Stack gap={24} className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
          <Stack gap={4}>
            <p className='text-gray-900 text-lg font-semibold'>Integrate chatbot</p>
            <p className='text-gray-600 text-sm font-normal'>
              Copy and paste the following code into your website's <code>&lt;head&gt;</code> tag.
            </p>
          </Stack>

          <Stack className='rounded-xl p-4 bg-gray-50'>
            <Stack className='rounded-xl p-6 bg-white border border-gray-200 flex-col' gap={12}>
              <Button
                className='self-end'
                variant='primary'
                leadingIcon={<FiCopy02 />}
                onClick={() => handleCopy(code)}
              >
                Copy
              </Button>

              <SyntaxHighlighter
                language='html'
                className='!bg-transparent font-medium text-base text-gray-600'
                // @ts-expect-error ts error
                style={{ all: 'unset' }}
              >
                {code}
              </SyntaxHighlighter>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AcquisitionChatbotPage;
