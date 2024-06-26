const isLocalhost = true;
const config = {
  Auth: {
    region: import.meta.env.VITE_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_CLIENT_ID,
    oauth: {
      domain: "markopoloai.auth.ap-southeast-1.amazoncognito.com",
      scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
      redirectSignIn: isLocalhost
        ? "http://127.0.0.1:5173/login"
        : "https://app.markopolo.ai/login",
      redirectSignOut: isLocalhost
        ? "http://127.0.0.1:5173/"
        : "https://app.markopolo.ai",
      responseType: "token",
    },
  },
};

export default config;
