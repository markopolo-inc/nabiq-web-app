import { Helmet } from 'react-helmet-async';

const HeaderTitle = ({ children }: { children: string }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default HeaderTitle;
