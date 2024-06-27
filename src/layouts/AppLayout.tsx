import { Outlet } from "react-router-dom";
import PageLoader from "components/UI/PageLoader";

import { useGetCompanyQuery } from "src/store/company/companyApi";

const AppLayout = () => {
  console.log("--- I am from AppLayout ---");
  const { isLoading: isLoadingCompany } = useGetCompanyQuery();
  return isLoadingCompany ? <PageLoader /> : <Outlet />;
};

export default AppLayout;
