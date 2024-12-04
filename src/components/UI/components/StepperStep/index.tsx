import { Stepper } from '@mantine/core';
import { FiCheck } from 'src/components/Icons';

import Text from '../Text';

const Step = Stepper.Step;

export const StepperStep = ({
  label,
  description,
  active,
  index,
}: {
  label: string;
  description: string;
  active: number;
  index: number;
}) => {
  return (
    <Step
      label={
        <Text
          size='14px'
          weight={600}
          className={`${active === index ? 'text-primary-700' : 'text-gray-700'} leading-5`}
        >
          {label}
        </Text>
      }
      description={
        <Text
          size='14px'
          className={`${active === index ? 'text-primary-600' : 'text-gray-600'} leading-5`}
        >
          {description}
        </Text>
      }
      icon={
        active > index ? (
          <div className='w-[30px] h-[30px] rounded-full bg-primary-600 flex items-center justify-center'>
            <FiCheck color='white' size={18} />
          </div>
        ) : (
          <div
            className={`w-3 h-3 rounded-full ${active === index ? 'bg-primary-600' : 'bg-gray-300'}`}
          ></div>
        )
      }
    />
  );
};
