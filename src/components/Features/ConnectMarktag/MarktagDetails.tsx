import { Button, Image, Select, Text } from "@nabiq-ui";
import { Command } from "@nabiq-icons";

const MarktagDetails = () => {
  return (
    <div className="px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32">
      <div className="mx-auto lg:max-w-md lg:mx-0 space-y-5">
        <Text className="display-sm font-medium text-gray-900 mb-7">
          Your business details
        </Text>

        <div className="flex gap-3">
          <div className="flex items-center gap-1 py-1 pl-1.5 pr-3 border border-primary-200 rounded-2xl">
            <Image className="h-4 w-4 rounded-full" src="/img.png" alt="John" />
            <Text
              size="14px"
              weight={500}
              className="text-primary-700 leading-5"
            >
              John Doe v2
            </Text>
          </div>

          <div className="py-1 px-3 border border-primary-200 rounded-2xl">
            <Text
              size="14px"
              weight={500}
              className="text-primary-700 leading-5"
            >
              johndoe2@gmail.com
            </Text>
          </div>
        </div>

        <Select
          className="mb-0"
          label="Brand"
          placeholder="Select brand"
          defaultValue="Select brand"
          data={["Select brand"]}
          leftSection={
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-semibold leading-4">
              N
            </div>
          }
        />

        <Select
          className="mb-0"
          label="Marktag"
          placeholder="Select ‘Marktag’ container"
          defaultValue="Select ‘Marktag’ container"
          data={["Select ‘Marktag’ container"]}
          leftSection={<Command size={20} />}
        />

        <Button className="w-full !mt-12" variant="secondary" disabled>
          Connect
        </Button>
      </div>
    </div>
  );
};

export default MarktagDetails;
