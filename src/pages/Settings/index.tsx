import {
  Button,
  Group,
  Stack,
  Grid,
  TextInput,
  PasswordInput,
  Image,
  Select,
  Dropzone,
} from "@nabiq-ui";

import HeaderTitle from "src/layouts/HeaderTitle";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { FileWithPath } from "@mantine/dropzone";

const Settings = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      businessName: "",
      industry: "",
      businessSize: "",
    },
    validate: {
      name: (value) => (value.length === 0 ? "Name is required" : null),
      email: (value) => (value.length === 0 ? "Email is required" : null),
      password: (value) => (value.length === 0 ? "Password is required" : null),
    },
  });

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        className="w-16 h-16 rounded-full"
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Stack gap={64}>
      <HeaderTitle>Nabiq | Settings</HeaderTitle>

      <Stack gap={64}>
        <div className="flex justify-between">
          <Stack gap={4}>
            <p className="text-gray-900 font-semibold text-3xl">Settings</p>
            <p className="text-gray-600 font-normal">
              Customize and configure your nabiq profile.
            </p>
          </Stack>
          <Group>
            <Button variant="secondary">Cancel</Button>
            <Button>Save changes</Button>
          </Group>
        </div>
      </Stack>

      <Stack gap={64}>
        <Grid>
          <Grid.Col span={6}>
            <p className="font-open text-md font-semibold leading-6 text-left text-gray-700">
              Personal details
            </p>
            <p className="text-gray-600 font-normal">
              Your personal and security settings.
            </p>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className="space-y-5">
              <TextInput
                label="Name"
                placeholder="Enter your name"
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Email"
                placeholder="Enter your email"
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                description="Password must contain at least 8 characters."
                {...form.getInputProps("password")}
              />

              <div className="flex flex-col gap-1.5">
                <p className="font-open text-sm font-medium leading-5 text-left text-gray-700">
                  Avatar
                </p>

                <div className="flex gap-5">
                  {!files.length ? (
                    <Image
                      className="w-16 h-16 rounded-full"
                      src="./img.png"
                      alt="no preview img"
                    />
                  ) : (
                    previews
                  )}

                  <Dropzone
                    className="w-full"
                    onDrop={setFiles}
                    // onReject={(file) => console.log('rejected files', file)}
                  />
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Stack>

      <Stack gap={64}>
        <Grid>
          <Grid.Col span={6}>
            <p className="font-open text-md font-semibold leading-6 text-left text-gray-700">
              Business details
            </p>
            <p className="text-gray-600 font-normal">Your business details.</p>
          </Grid.Col>
          <Grid.Col span={6}>
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
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Settings;
