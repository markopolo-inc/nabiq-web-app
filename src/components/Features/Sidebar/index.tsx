import { Link, useLocation } from "react-router-dom";
import { useGetColors } from "@nabiq-ui";
import { sidebarOptions } from "src/utils/sidebarOptions";

const Sidebar = () => {
  const { gray400, primary500 } = useGetColors();
  const { pathname } = useLocation();
  const style = {
    borderRadius: 12,
    border: "1px solid #E3E8EF",
    background: "#FCFCFD",
    boxShadow:
      "0px 2px 3px 0px rgba(18, 25, 38, 0.10), 0px 1px 2px 0px rgba(18, 25, 38, 0.06)",
  };
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col justify-between overflow-y-auto">
        <div className="flex-1">
          <ul className="flex flex-col gap-3">
            {sidebarOptions?.map((item, idx) => {
              const isSelected = item?.menuRegex?.test(pathname);
              return (
                <Link
                  key={idx}
                  to={item.to}
                  className="p-3"
                  style={{
                    ...(isSelected ? style : {}),
                  }}
                >
                  <div className="flex gap-3 items-center">
                    <item.Icon
                      size={24}
                      color={isSelected ? primary500 : gray400}
                    />
                    <span
                      className={`${
                        isSelected ? "text-primary-500" : "text-gray-600"
                      } text-sm font-medium`}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* <div className="bg-gray-800 text-white">Lower part</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
