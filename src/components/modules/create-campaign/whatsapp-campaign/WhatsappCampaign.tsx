import { Breadcrumbs, Button, Group, Stack, Stepper, StepperStep } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import {
  CompletionStep,
  CreationStep,
  ProductStep,
} from 'src/components/modules/create-campaign/whatsapp-campaign';
import { whatsappCampaignSteps } from 'src/lib/campaign.lib';

export const WhatsappCampaign = () => {
  const [active, setActive] = useState(0);
  const handleStepChange = (newStep: number) => {
    setActive(newStep);
  };

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>

      <Stack gap={64}>
        <Stack gap={20}>
          <Breadcrumbs />
          <Group justify='space-between' align='center'>
            <p className='text-gray-900 font-semibold text-xl'>Configure your campaign</p>
            <Button
              variant='primary'
              onClick={() => setActive((current) => (current < 3 ? current + 1 : current))}
            >
              Continue
            </Button>
          </Group>
        </Stack>

        <Stepper
          allowNextStepsSelect={true}
          active={active}
          onStepClick={handleStepChange}
          size='xs'
        >
          {whatsappCampaignSteps.map((step, index) => (
            <StepperStep key={index} {...step} active={active} index={index} />
          ))}
        </Stepper>
        {active === 0 && <ProductStep />}
        {active === 1 && <CreationStep />}
        {active === 2 && <CompletionStep />}
      </Stack>
    </>
  );
};
