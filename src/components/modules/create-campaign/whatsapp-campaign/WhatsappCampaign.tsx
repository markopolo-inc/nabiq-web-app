import { Breadcrumbs, Button, Group, Stack, Stepper, StepperStep, Tooltip } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useMemo, useState } from 'react';
import {
  CompletionStep,
  CreationStep,
  ProductStep,
} from 'src/components/modules/create-campaign/whatsapp-campaign';
import { whatsappCampaignSteps } from 'src/lib/campaign.lib';
import { useAppSelector } from 'src/store/hooks';

export const WhatsappCampaign = () => {
  const [active, setActive] = useState(0);
  const handleStepChange = (newStep: number) => {
    setActive(newStep);
  };
  const { campaign } = useAppSelector((state) => state);

  const validationErrors = useMemo(() => {
    return [];
  }, [campaign]);

  const errors = (
    <div>
      {validationErrors.map((error) => (
        <div key={error} className='text-purple-400'>
          {error}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>

      <Stack gap={64}>
        <Stack gap={20}>
          <Breadcrumbs />
          <Group justify='space-between' align='center'>
            <p className='text-gray-900 font-semibold text-xl'>Configure your campaign</p>
            <Group>
              {active > 0 && (
                <Button
                  variant='link'
                  size='md'
                  onClick={() => {
                    setActive(active - 1);
                  }}
                >
                  Go back
                </Button>
              )}
              <Tooltip label={errors} disabled={validationErrors.length === 0} position='left'>
                <Button
                  disabled={validationErrors.length > 0}
                  variant='primary'
                  onClick={() => setActive((current) => (current < 3 ? current + 1 : current))}
                >
                  Continue
                </Button>
              </Tooltip>
            </Group>
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
        {(() => {
          switch (active) {
            case 0:
              return <ProductStep />;
            case 1:
              return <CreationStep />;
            case 2:
              return <CompletionStep />;
            default:
              return null;
          }
        })()}
      </Stack>
    </>
  );
};
