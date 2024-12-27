import { Select as SelectField, SelectProps } from '@mantine/core';
import { FiChevronDown } from '@nabiq-icons';
import { useGetColors } from '@nabiq-ui';

import styles from './Select.module.scss';

const Select = ({
  allowDeselect = false,
  nothingFoundMessage = 'No data found.',
  ...rest
}: SelectProps) => {
  const { gray500 } = useGetColors();

  return (
    <SelectField
      nothingFoundMessage={nothingFoundMessage}
      allowDeselect={allowDeselect}
      classNames={{
        input: styles.input,
        label: styles.label,
      }}
      styles={{
        dropdown: {
          zIndex: 9999,
        },
      }}
      checkIconPosition='right'
      comboboxProps={{ transitionProps: { transition: 'slide-down', duration: 200 } }}
      rightSection={<FiChevronDown size={20} style={{ cursor: 'pointer' }} color={gray500} />}
      {...rest}
    />
  );
};

export default Select;
