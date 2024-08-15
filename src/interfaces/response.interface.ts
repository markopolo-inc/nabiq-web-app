export type APIResponseType = {
  success: boolean;
  message: string;
  selectableObjects?: Record<string, any[]>;
};

export type GetConfigsDataType = {
  resourceId: string;
  resourceType: string;
  brandId: string;
  tagId: string;
  status: "processing";
  goal: "acquisition";
  name: string;
  details: string;
};

export type APIGetConfigsResponseType = {
  success: boolean;
  message: string;
  data?: GetConfigsDataType;
};
