import { Breadcrumbs, Button, Group, Stack, Stepper, StepperStep, Tooltip } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CompletionStep,
  CreationStep,
  ProductStep,
} from 'src/components/modules/create-campaign/whatsapp-campaign';
import { whatsappCampaignSteps } from 'src/lib/campaign.lib';
import { useCreateWhatsappCampaignConfigMutation } from 'src/store/campaign/campaignApi';
import { useAppSelector } from 'src/store/hooks';

export const WhatsappCampaign = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const handleStepChange = async (newStep: number) => {
    if (newStep === 2) {
      const res = await createCampaignConfig(campaign).unwrap();
      if (res.success) {
        setActive(3);
      }
    } else {
      setActive(newStep);
    }
  };
  const [createCampaignConfig, { isLoading }] = useCreateWhatsappCampaignConfigMutation();
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
            {active === 3 ? (
              <Group>
                <Button variant='link' size='md' onClick={() => navigate('/campaigns')}>
                  Go to campaigns
                </Button>
              </Group>
            ) : (
              <Group>
                {active > 0 && (
                  <Button
                    variant='link'
                    size='md'
                    onClick={() => {
                      setActive(active - 1);
                    }}
                    disabled={isLoading}
                  >
                    Go back
                  </Button>
                )}
                <Tooltip label={errors} disabled={validationErrors.length === 0} position='left'>
                  <Button
                    disabled={validationErrors.length > 0}
                    variant='primary'
                    onClick={() => handleStepChange(active + 1)}
                    loading={isLoading}
                  >
                    Continue
                  </Button>
                </Tooltip>
              </Group>
            )}
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
            case 3:
              return <CompletionStep />;
            default:
              return null;
          }
        })()}
      </Stack>
    </>
  );
};
