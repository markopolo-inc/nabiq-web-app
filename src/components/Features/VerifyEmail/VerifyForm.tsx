import { Button, OtpInput, Text } from "@nabiq-ui";
import { useState } from "react";
import VerifyLogoComponent from "./VerifyLogoComponent";
import {
  useResendVerificationCodeMutation,
  useVerifyMutation,
} from "src/store/auth/authApi";
import { useAppSelector } from "src/store/hooks";

const VerifyForm = () => {
  const [confirmationPin, setConfirmationPin] = useState<string>("");

  const [verify, { isLoading }] = useVerifyMutation();
  const [resend] = useResendVerificationCodeMutation();
  const { username: email } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="space-y-12 sm:mx-auto sm:w-full sm:max-w-md">
        <VerifyLogoComponent email={email} />

        <OtpInput value={confirmationPin} onChange={setConfirmationPin} />

        <div className="space-y-6 flex flex-col justify-center mx-auto sm:max-w-xs">
          <Button
            variant="primary"
            size="md"
            loading={isLoading}
            disabled={confirmationPin?.length !== 6}
            onClick={() => verify({ email, confirmationPin })}
          >
            Continue
          </Button>
          <div className="flex justify-center items-center gap-1">
            <Text className="text-md text-gray-600">
              Having trouble with the code?
            </Text>
            <Button
              onClick={() => resend({ email })}
              variant="link"
              size="md"
              className="px-0"
            >
              Resend
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyForm;
