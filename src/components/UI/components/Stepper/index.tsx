import { Stepper as StepperField, StepperProps, rem } from "@mantine/core";

const StyledStepper = (props: StepperProps) => {
  return (
    <StepperField
      styles={{
        steps: {
          alignItems: "flex-start",
        },
        stepCompletedIcon: {
          borderRadius: "50%",
          boxShadow: "0px 0px 0px 6px rgba(56, 122, 246, 0.24)",
        },
        stepBody: {
          // display: 'none',
          marginLeft: 0,
          marginTop: rem(12),
          textAlign: "center",
        },

        step: {
          flexDirection: "column",
          padding: 0,
        },

        stepIcon: {},

        separator: {
          marginLeft: rem(-110),
          marginRight: rem(-120),
          marginTop: rem(20),
          // height: rem(10),
        },
      }}
      {...props}
    />
  );
};

export default StyledStepper;
