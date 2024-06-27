import { Outlet } from "react-router-dom";

const AppLayout = () => {
  console.log("--- I am from AppLayout ---");
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
