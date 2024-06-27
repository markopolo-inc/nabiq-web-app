import { Image } from "@nabiq-ui";
import { useNavigate } from "react-router-dom";
import NabiqLogo from "src/assets/logo/nabiq-logo.png";
import HeaderTitle from "src/layouts/HeaderTitle";
import { useLogoutMutation } from "src/store/auth/authApi";
import { useAppSelector } from "src/store/hooks";

const Home = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { isAuthenticated, username } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await logout({}).unwrap();
  };

  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>

      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center">
            <Image src={NabiqLogo} alt="Nabiq" className="w-40" />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to your marketing co-pilot captain.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center justify-center rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {isAuthenticated
              ? `Hello ${username}!`
              : "You are not authenticated!"}{" "}
            <div
              onClick={() => {
                if (isAuthenticated) {
                  handleLogout();
                } else {
                  navigate("/login");
                }
              }}
              className="font-semibold text-indigo-600 pl-2 cursor-pointer"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {isAuthenticated ? "Logout" : "Login"}{" "}
              <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
