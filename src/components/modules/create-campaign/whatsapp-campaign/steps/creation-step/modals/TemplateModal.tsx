import { FiLayoutAlt04 } from '@nabiq-icons';
import { Button, Card, Modal, Stack } from '@nabiq-ui';
import { waCampaignTemplates } from 'src/lib/campaign.lib';
import { useCampaignDispatch } from 'src/store/hooks';

const ModalBody = ({ setOpened }: { setOpened: (state: boolean) => void }) => {
  const campaignDispatch = useCampaignDispatch();
  return (
    <Stack className='p-8' gap={32}>
      <Stack gap={0}>
        <p className='text-2xl font-semibold text-gray-900'>Templates</p>
        <p className='text-sm text-gray-600'>Templates made just for you.</p>
      </Stack>
      <div className='grid grid-cols-3 gap-4'>
        {waCampaignTemplates.map((template, index) => (
          <Card key={index} className='g'>
            <Stack gap={24}>
              <p className='text-lg font-semibold text-gray-900'>{template.title}</p>
              <p className='text-sm text-gray-600'>{template.template}</p>
            </Stack>
            <Button
              variant='secondary-black'
              onClick={() => {
                setOpened(false);
                campaignDispatch({
                  instruction: template.template,
                });
              }}
            >
              Use
            </Button>
          </Card>
        ))}
      </div>
    </Stack>
  );
};

export const TemplateModal = () => {
  return (
    <Modal
      size='90%'
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
      withNoHeader
      withCustomClose
    >
      {({ setOpened }) => (
        <Button
          variant='secondary-black'
          onClick={() => setOpened(true)}
          leadingIcon={<FiLayoutAlt04 size={17} />}
        >
          Use a template
        </Button>
      )}
    </Modal>
  );
};
