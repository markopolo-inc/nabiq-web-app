const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

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
      redirectSignIn: isLocalhost
        ? 'https://localhost:3000/login'
        : 'https://nabiq.markopolo.ai/login',
      redirectSignOut: isLocalhost ? 'https://localhost:3000' : 'https://nabiq.markopolo.ai',
      responseType: 'token',
    },
  },
};

export default config;
