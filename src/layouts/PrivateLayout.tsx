import { Outlet } from "react-router-dom";

import { useGetCompanyQuery } from "store/company/companyApi";

const PrivateLayout = () => {
  console.log("--- I am from PrivateLayout ---");
  const { data } = useGetCompanyQuery();
  console.log("--- company data ---", data);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
