import { Select as SelectField, SelectProps } from '@mantine/core';
import { FiChevronDown } from '@nabiq-icons';
import { useGetColors } from '@nabiq-ui';

import Text from '../Text';
import styles from './Select.module.scss';

const Select = ({ label, required, ...rest }: SelectProps) => {
  const { gray700, gray500 } = useGetColors();

  return (
    <SelectField
      classNames={{
        input: styles.input,
      }}
      styles={{
        dropdown: {
          zIndex: 9999,
        },
      }}
      checkIconPosition='right'
      label={
        label && (
          <Text
            size='14px'
            color={gray700}
            weight={500}
            style={{
              display: label ? 'inline-block' : 'none',
              marginBottom: label ? 4 : 0,
            }}
          >
            {label} {required && <span>&#42;</span>}
          </Text>
        )
      }
      rightSection={<FiChevronDown size={20} style={{ cursor: 'pointer' }} color={gray500} />}
      {...rest}
    />
  );
};

export default Select;
