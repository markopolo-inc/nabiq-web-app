import { Stepper as StepperField, StepperProps, rem } from '@mantine/core';

const StyledStepper = (props: StepperProps) => {
  return (
    <StepperField
      styles={{
        steps: {
          alignItems: 'flex-start',
        },
        stepCompletedIcon: {
          borderRadius: '50%',
          boxShadow: '0px 0px 0px 6px rgba(56, 122, 246, 0.24)',
        },
        stepBody: {
          // display: 'none',
          marginLeft: 0,
          marginTop: rem(12),
          textAlign: 'center',
        },

        step: {
          flexDirection: 'column',
          padding: 0,
        },

        separator: {
          marginLeft: rem(-92),
          marginRight: rem(-110),
          marginTop: rem(20),
          // height: rem(10),
        },
        stepLabel: {
          fontSize: '14px',
          fontWeight: '600',
          color: '#0A52D6',
          lineHeight: '20px',
        },
        stepDescription: {
          fontSize: '12px',
          fontWeight: '400',
          color: '#2972F5',
          lineHeight: '20px',
        },
      }}
      {...props}
    />
  );
};

export default StyledStepper;
