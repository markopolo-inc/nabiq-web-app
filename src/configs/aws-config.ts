const liveRedirectUrl = 'https://nabiq.markopolo.ai/login';

const config = {
  Auth: {
    region: import.meta.env.VITE_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_CLIENT_ID,
    // accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    // secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
    oauth: {
      domain: 'markopoloai.auth.ap-southeast-1.amazoncognito.com',
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: liveRedirectUrl,
      redirectSignOut: liveRedirectUrl,
      responseType: 'token',
    },
  },
};

export default config;
