import { Stepper, StepperStep } from '@nabiq-ui';
import { campaignSteps } from 'src/lib/campaign.lib';

type StepperProps = {
  active: number;
  setActive: (value: number) => void;
};

export const CampaignStepper = ({ active, setActive }: StepperProps) => {
  return (
    <>
      <Stepper allowNextStepsSelect={true} active={active} onStepClick={setActive} size='xs'>
        {campaignSteps.map((step, index) => (
          <StepperStep key={index} {...step} active={active} index={index} />
        ))}
      </Stepper>
    </>
  );
};
