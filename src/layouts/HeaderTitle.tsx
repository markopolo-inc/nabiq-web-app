import { Helmet } from 'react-helmet-async';

export const HeaderTitle = ({ children }: { children: string }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};
