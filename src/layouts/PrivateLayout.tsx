import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "src/store/hooks";

const PrivateLayout = () => {
  // console.log("--- I am from PrivateLayout ---");
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return <>{!isAuthenticated ? <Navigate to={"/login"} /> : <Outlet />}</>;
};

export default PrivateLayout;
