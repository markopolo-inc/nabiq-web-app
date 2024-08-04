import {
  DatePickerInput as MantineDatePickerInput,
  DatePickerInputProps,
} from "@mantine/dates";

import styles from "./index.module.scss";
import { Text } from "@nabiq-ui";
import { Calendar } from "@nabiq-icons";

interface PropTypes extends DatePickerInputProps {
  placeholder?: string;
}

const DatePickerInput = ({ label, description, error, ...rest }: PropTypes) => {
  // const icon = <ChevronDown style={{ width: rem(18), height: rem(18) }} />;

  return (
    <div>
      <MantineDatePickerInput
        leftSection={<Calendar size={16} color="#697586" />}
        error={error}
        classNames={{
          input: error ? styles.errorInput : styles.input,
          required: styles.required,
          error: styles.error,
          label: styles.label,
        }}
        label={label}
        description={null}
        {...rest}
      />
      {description && (
        <Text color="#525252" size="14px" weight={400} className="mt-2">
          {description}
        </Text>
      )}
    </div>
  );
};

export default DatePickerInput;
