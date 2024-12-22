import { PasswordInput as Input, PasswordInputProps } from '@mantine/core';
import { FiEye, FiEyeOff } from '@nabiq-icons';
import { useGetColors } from '@nabiq-ui';

import Text from '../Text';
import styles from './Input.module.scss';

const PasswordInput = ({ label, required, description, ...rest }: PasswordInputProps) => {
  const { gray400, gray600, gray700 } = useGetColors();

  return (
    <div className='space-y-2'>
      <Input
        classNames={{
          input: styles.input,
          innerInput: styles.innerInput,
          description: styles.description,
          error: styles.error_description,
        }}
        label={
          label && (
            <Text
              size='14px'
              color={gray700}
              weight={500}
              style={{
                display: label ? 'inline-block' : 'none',
                marginBottom: label ? 8 : 0,
              }}
            >
              {label} {required && <span>&#42;</span>}
            </Text>
          )
        }
        visibilityToggleIcon={({ reveal }) => {
          return reveal ? (
            <FiEyeOff size={20} color={gray400} />
          ) : (
            <FiEye size={20} color={gray400} />
          );
        }}
        {...rest}
      />
      {description && (
        <Text color={gray600} weight={400} size='14px'>
          {description}
        </Text>
      )}
    </div>
  );
};

export default PasswordInput;
