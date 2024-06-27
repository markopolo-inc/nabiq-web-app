import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "src/store/hooks";

const NavigationLayout = () => {
  console.log("--- I am from Navigationlayout ---");
  const navigate = useNavigate();
  const { resourceId: companyId } = useAppSelector((state) => state.company);

  useEffect(() => {
    if (!companyId) {
      navigate("/onboarding");
    }
  }, [companyId]);
  
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NavigationLayout;
