import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import { FiCheck, FiShopify, FileQuestion02 } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';

const InstallCode = () => {
  return (
    <Stack className='p-8' gap={64} align='center' style={{ maxWidth: '784px' }}>
      <Stack align='flex-start' className='mr-auto' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>Install code manually</p>
        <p className='text-gray-600 text-base font-normal'>Setup everything by yourself.</p>
      </Stack>
      <Stack align='center'>
        <Group className='flex-col' gap={32}>
          <CodeHighlight
            className='w-full'
            language='tsx'
            code={`
           // Imports
  import mongoose, { Schema } from 'untitled'
  
  // Collection name
  export const collection = 'Design'|
  
  // Schema
  const schema = new Schema({
    name: {
      type: String,
      required: true
    }
          `}
          />

          <Stack className='mr-auto'>
            <div className='flex gap-4'>
              <div className='flex gap-1 py-2 px-3 text-sm font-semibold text-gray-600 rounded-lg border-[0.75px] border-[rgba(13,18,28,0.48)] bg-gradient-to-b from-[rgba(13,18,28,0.03)] to-[rgba(13,18,28,0)] shadow-custom-secondary'>
                <FiShopify size={20} />
                Install on Shopify
              </div>

              <div className='flex gap-1 py-2 px-3 text-sm font-semibold text-white rounded-lg border border-white bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0)] bg-[#303534] shadow-custom-secondary-black'>
                <FileQuestion02 size={20} color='currentColor' />
                View documentation
              </div>

              <div className='flex gap-1 py-2 px-3 text-sm font-semibold text-white rounded-lg border-[0.75px] border-primary-600 bg-primary-600 shadow-custom-primary'>
                <FiCheck size={20} color='currentColor' />I have set up events manually
              </div>
            </div>
          </Stack>

          <Stack className='mr-auto'>
            <p className='text-gray-900 text-[24px] font-semibold'>Event code snippets</p>
            <p className='text-gray-600 text-base font-normal'>
              Add this event code to each page of your site to track when a customer visits it.
              MarkTag automatically collects the page URL and page information.
            </p>
          </Stack>

          <CodeHighlight
            //   onClick={() => setOpened(false)}
            className='w-full'
            language='tsx'
            code={`
           // Imports
  import mongoose, { Schema } from 'untitled'
  
  // Collection name
  export const collection = 'Design'|
          `}
          />
        </Group>
      </Stack>
    </Stack>
  );
};

export default InstallCode;
