import { Stepper as StepperField } from '@mantine/core';
import { StyledStepper, Text } from '@nabiq-ui';

type StepperProps = {
  active: number;
  setActive: (value: number) => void;
};

const steps = [
  {
    label: 'Campaign details',
    description: 'Enter the campaign details',
  },
  {
    label: 'Timing',
    description: 'Specify the content and approval timing',
  },
  {
    label: 'Channels',
    description: 'Choose the main and additional channels',
  },
];

export const Stepper = ({ active, setActive }: StepperProps) => {
  const renderStep = (step: { label: string; description: string }, index: number) => (
    <StepperField.Step
      allowStepSelect={true}
      label={
        <Text
          size='14px'
          weight={600}
          className={`${active === index ? 'text-primary-700' : 'text-gray-700'} leading-5`}
        >
          {step.label}
        </Text>
      }
      description={
        <Text
          size='14px'
          className={`${active === index ? 'text-primary-600' : 'text-gray-600'} leading-5`}
        >
          {step.description}
        </Text>
      }
      icon={
        <div
          className={`w-3 h-3 rounded-full ${active === index ? 'bg-primary-600' : 'bg-gray-300'}`}
        ></div>
      }
    />
  );

  return (
    <>
      <StyledStepper allowNextStepsSelect={true} active={active} onStepClick={setActive} size='xs'>
        {steps.map((step, index) => renderStep(step, index))}
      </StyledStepper>
    </>
  );
};
