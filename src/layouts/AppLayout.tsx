import { Image } from "@nabiq-ui";
import { Outlet } from "react-router-dom";

import { useGetCompanyQuery } from "src/store/company/companyApi";
import LoaderGif from "src/assets/loader/loading.gif";

const AppLayout = () => {
  console.log("--- I am from AppLayout ---");
  const { isLoading: isLoadingCompany } = useGetCompanyQuery();
  return isLoadingCompany ? (
    <Image src={LoaderGif} alt="Loading..." />
  ) : (
    <Outlet />
  );
};

export default AppLayout;
