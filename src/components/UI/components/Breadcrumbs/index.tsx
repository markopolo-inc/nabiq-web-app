import { Breadcrumbs } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { FiChevronRight } from "src/components/Icons";

const CustomBreadCrumbs = () => {
  const { pathname } = useLocation();
  const links = pathname.split("/")?.slice(1);
  return (
    <Breadcrumbs separator={<FiChevronRight size={16} color="#9AA4B2" />}>
      {links?.map((item, idx) => (
        <p
          key={idx}
          className={`capitalize text-sm ${
            idx === links.length - 1
              ? "text-primary-700 font-semibold"
              : "text-gray-600 font-medium"
          }`}
        >
          {item?.split("-")?.join(" ")}
        </p>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
