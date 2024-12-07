import { FiSalla, FiShopify } from '@nabiq-icons';
import { Button, Card, Modal, Stack } from '@nabiq-ui';
import { Dispatch, SetStateAction } from 'react';
import { TProductSource } from 'src/interfaces/modules/campaign';

const productSources = [
  {
    title: 'Shopify',
    platform: 'shopify',
    headline: 'Connect your Shopify store to upload products directly',
    icon: FiShopify,
  },
  {
    title: 'Salla',
    platform: 'salla',
    headline: 'Connect your Salla store to import products easily.',
    icon: FiSalla,
  },
];

const ModalBody = ({
  setOpened,
  selectedPlatform,
  setSelectedPlatform,
}: {
  setOpened: (state: boolean) => void;
  selectedPlatform: TProductSource;
  setSelectedPlatform: Dispatch<SetStateAction<TProductSource>>;
}) => {
  return (
    <Stack gap={64} className='p-8'>
      <Stack gap={0}>
        <p className='text-2xl text-gray-900 font-semibold'>Add product</p>
        <p className='text-gray-600'>Choose how you want to add your product</p>
      </Stack>
      <div className='grid grid-cols-2 gap-4'>
        {productSources.map((source) => (
          <Card key={source.platform} className='!gap-5 items-center justify-center'>
            <source.icon size={48} />
            <Stack gap={16} justify='center' align='center'>
              <p className='text-lg font-semibold text-gray-900'>{source.title}</p>
              <p className='text-gray-600 text-sm text-center'>{source.headline}</p>
            </Stack>
            <Button
              fullWidth
              onClick={() => {
                setSelectedPlatform(source.platform as TProductSource);
                setOpened(false);
              }}
              disabled={selectedPlatform === source.platform}
            >
              {selectedPlatform === source.platform ? 'Selected' : 'Select'}
            </Button>
          </Card>
        ))}
      </div>
    </Stack>
  );
};

export const AddProductModal = ({
  selectedPlatform,
  setSelectedPlatform,
}: {
  selectedPlatform: TProductSource;
  setSelectedPlatform: Dispatch<SetStateAction<TProductSource>>;
}) => {
  return (
    <Modal
      withCustomClose
      title={() => 'Add Product'}
      body={({ setOpened }) => (
        <ModalBody
          setOpened={setOpened}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      )}
      withNoHeader
    >
      {({ setOpened }) => (
        <Button variant='secondary' onClick={() => setOpened(true)}>
          Add product
        </Button>
      )}
    </Modal>
  );
};
