import { Auth } from 'aws-amplify';

const getAuthToken = async () => {
  try {
    const res = await Auth.currentSession();
    return res.getIdToken().getJwtToken();
  } catch {
    localStorage.clear();
  }
};

export { getAuthToken };
