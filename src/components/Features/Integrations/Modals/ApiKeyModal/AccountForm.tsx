import { Alert } from "@mantine/core";
import { Button } from "src/components/UI";

const AccountForm = () => {
  return (
    <div>
      <Alert color="green">Account verified!</Alert>
      <form>
        <Button
          type="submit"
          fullWidth
          //   disabled={hasEmptyField(form.values)}
          //   fullWidth
          //   loading={isLoading}
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default AccountForm;
