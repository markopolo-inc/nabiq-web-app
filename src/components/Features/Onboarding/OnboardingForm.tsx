import { useForm } from "@mantine/form";
import { Button, Select, Text, TextInput } from "@nabiq-ui";
import { Auth } from "aws-amplify";
import { useState } from "react";
import toast from "react-hot-toast";

import { useOnboardUserMutation } from "store/onboarding/onboardingApi";
import { trimAllValuesOfObject } from "utils/stringUtils";

const OnboardingForm = () => {
  const [isLoadingUser, setIsLoading] = useState(false);
  const [onboardUser, { isLoading }] = useOnboardUserMutation();
  const form = useForm({
    initialValues: {
      businessName: "",
      industry: "",
      businessSize: "",
    },
    validate: {
      businessName: (value) =>
        value?.length === 0 ? "Business name is required" : null,
      industry: (value) =>
        value?.length === 0 ? "Industry is required" : null,
    },
  });

  const handleFormSubmit = async (values) => {
    setIsLoading(true);

    try {
      const user = await Auth.currentUserPoolUser();
      await onboardUser({
        cognitoId: user?.attributes?.sub,
        userName: user?.attributes?.["custom:fullName"] || "Test",
        userEmail: user?.attributes?.email,
        ...values,
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to get user data!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32">
      <form
        className="mx-auto lg:max-w-md lg:mx-0 space-y-12"
        onSubmit={form.onSubmit((values) => {
          handleFormSubmit(trimAllValuesOfObject(values));
        })}
      >
        <Text className="display-sm font-medium text-gray-900">
          Your business details
        </Text>

        <div className="space-y-5">
          <TextInput
            required
            label="Business name"
            placeholder="Enter business name"
            {...form.getInputProps("businessName")}
          />
          <Select
            required
            data={["Travel"]}
            label="Industry"
            placeholder="Select industry"
            {...form.getInputProps("industry")}
          />
          <Select
            required
            data={["10-50"]}
            label="Business size"
            placeholder="Select business size"
            {...form.getInputProps("businessSize")}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            type="submit"
            loading={isLoading || isLoadingUser}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
