import { Breadcrumbs } from "@mantine/core";
import { useLocation } from "react-router-dom";

const CustomBreadCrumbs = () => {
  const { pathname } = useLocation();
  const links = pathname.split("/")?.slice(1);
  return (
    <Breadcrumbs separator=">">
      {links?.map((item, idx) => (
        <p key={idx} className="capitalize">
          {item?.split("-")?.join(" ")}
        </p>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
