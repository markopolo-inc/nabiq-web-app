import axios, { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { getAuthToken } from 'src/utils/auth';

const uploadToServer = async (companyId: string, file: File) => {
  try {
    const data = new FormData();
    data.append('file', file);
    data.append('companyId', companyId);

    const res: AxiosResponse = await axios({
      url: `${import.meta.env.VITE_FILE_UPLOAD_URL}/company/upload-file`,
      method: 'POST',
      data,
      headers: {
        Authorization: `Bearer ${await getAuthToken()}`,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.errors?.[0] || `Failed to upload file!`, {
      id: 'upload-file-error',
    });
  }
};

export default {
  uploadToServer,
};
