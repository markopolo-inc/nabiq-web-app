import { ArrowNarrowUpRight, Command2 } from "@nabiq-icons";
import { Button, Text, useGetColors } from "@nabiq-ui";

const ConnectedMarktag = () => {
  const { primary500 } = useGetColors();

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex gap-3 flex-nowrap">
        <div>
          <Command2 size={32} color={primary500} fill={primary500} />
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-lg font-semibold">Sandbox.com</p>
            <p className="text-gray-600 text-sm font-normal">mtag-4.sandbox</p>

            <div className="flex items-center gap-1 px-1.5 py-1 border border-success-500 rounded-2xl mt-4">
              <div className="w-2 h-2 rounded-full bg-success-500"></div>
              <Text
                size="14px"
                weight={500}
                className="text-success-700 leading-5"
              >
                Pixel: 621000359117182
              </Text>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              trailingIcon={<ArrowNarrowUpRight size={20} color="#4B5565" />}
            >
              Reconfigure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedMarktag;
