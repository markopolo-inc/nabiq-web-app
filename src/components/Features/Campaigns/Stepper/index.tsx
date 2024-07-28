import { useState } from "react";
import { Stepper as StepperField } from "@mantine/core";
import { StyledStepper } from "@nabiq-ui";

const MyStepper = () => {
  const [active, setActive] = useState<number>(0);

  // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <StyledStepper
        allowNextStepsSelect={true}
        active={active + 1}
        onStepClick={setActive}
        completedIcon={<div className="w-2 h-2 rounded-full bg-white"></div>}
        size="xs"
      >
        <StepperField.Step
          allowStepSelect={true}
          label="Campaign details"
          description="Enter the campaign details"
          icon={<div className="w-2 h-2 rounded-full bg-gray-300"></div>}
        />
        <StepperField.Step
          allowStepSelect={true}
          label="Timing"
          description="Specify the content and approval timing"
          icon={<div className="w-2 h-2 rounded-full bg-gray-300"></div>}
        />
        <StepperField.Step
          allowStepSelect={true}
          label="Channels"
          description="Choose the main and additional channels"
          icon={<div className="w-2 h-2 rounded-full bg-gray-300"></div>}
        />
      </StyledStepper>
    </>
  );
};

export default MyStepper;
