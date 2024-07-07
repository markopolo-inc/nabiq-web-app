import { Auth } from "aws-amplify";

const getAuthToken = async () => {
  const res = await Auth.currentSession();
  return res.getIdToken().getJwtToken();
};

export { getAuthToken };
