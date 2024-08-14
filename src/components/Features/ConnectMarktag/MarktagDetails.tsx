import { Button, Select, Text } from "@nabiq-ui";
import { Command } from "@nabiq-icons";
import { useAppSelector } from "src/store/hooks.ts";
import {
  MarktagsResponseInterface,
  useConnectMarktagMutation,
  useGetBrandsListQuery,
  useLazyGetMarktagUnderBrandQuery,
} from "src/store/marktag/marktagApi.ts";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type MarktagsType = MarktagsResponseInterface;

const MarktagDetails = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);
  const company = useAppSelector((state) => state.company);

  const [resourceId, setResourceId] = useState<string>("");
  const [marktagsResourceId, setMarktagsResourceId] = useState<string>("");
  const [marktags, setMarktags] = useState<MarktagsType[]>([]);

  const { data: brandsList } = useGetBrandsListQuery();
  const [getMarktag] = useLazyGetMarktagUnderBrandQuery();
  const [connect] = useConnectMarktagMutation();

  const brandsListOptions = useMemo(
    () =>
      brandsList?.map(({ brandName: label, resourceId: value }) => ({
        label,
        value,
      })),
    [brandsList],
  );

  const selectedBrand = useMemo(
    () => brandsListOptions?.find((item) => item.value === resourceId),
    [brandsListOptions, resourceId],
  );

  const marktagsListOptions = useMemo(
    () =>
      marktags?.map(({ hostname: label, resourceId: value }) => ({
        label,
        value,
      })),
    [marktags],
  );

  const selectedMarktag = useMemo(
    () => marktags?.find((item) => item.resourceId === marktagsResourceId),
    [marktagsListOptions, marktagsResourceId],
  );

  const onClick = async () => {
    if (!resourceId || !marktagsResourceId) return;

    const res = await connect(selectedMarktag);
    if (res?.data?.success) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (resourceId) {
      getMarktag(resourceId)
        .unwrap()
        .then((response) => {
          setMarktags(response);
        });
    }
  }, [resourceId]);

  return (
    <div className="px-8 pt-20 lg:col-span-8 lg:px-20 lg:pt-48 pb-20 lg:pb-32">
      <div className="mx-auto lg:max-w-md lg:mx-0 space-y-5">
        <Text className="display-sm font-medium text-gray-900 mb-7">
          Your business details
        </Text>

        <div className="flex gap-3">
          <div className="py-1 px-3 border border-primary-200 rounded-2xl">
            <Text
              size="14px"
              weight={500}
              className="text-primary-700 leading-5"
            >
              {company?.companyName}
            </Text>
          </div>

          <div className="py-1 px-3 border border-primary-200 rounded-2xl">
            <Text
              size="14px"
              weight={500}
              className="text-primary-700 leading-5"
            >
              {user?.userEmail}
            </Text>
          </div>
        </div>

        <Select
          className="mb-0"
          label="Brand"
          placeholder="Select brand"
          value={resourceId}
          onChange={setResourceId}
          data={brandsListOptions}
          leftSection={
            resourceId && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-center text-xs font-semibold leading-4">
                {selectedBrand?.label?.charAt(0)?.toUpperCase()}
              </div>
            )
          }
        />

        <Select
          className="mb-0"
          label="Marktag"
          placeholder="Select ‘Marktag’ container"
          value={marktagsResourceId}
          onChange={setMarktagsResourceId}
          data={marktagsListOptions}
          leftSection={<Command size={20} />}
        />

        <Button
          className="w-full !mt-12"
          variant="secondary"
          disabled={!resourceId || !marktagsResourceId}
          onClick={onClick}
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default MarktagDetails;
