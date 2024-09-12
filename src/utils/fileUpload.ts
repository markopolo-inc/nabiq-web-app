import filesApi from 'store/files';

export const uploadFile = async (file: File, companyId = '') => {
  try {
    const res: {
      url: string;
    } = await filesApi.uploadToServer(companyId, file);
    return res?.url;
  } catch (exception) {
    throw new Error(exception);
  }

  /* End of uploadFile.ts */
};
