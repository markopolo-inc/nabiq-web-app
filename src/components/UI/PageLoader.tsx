import { Image } from "@nabiq-ui";
import LoaderGif from "src/assets/loader/loading.gif";

const PageLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image src={LoaderGif} alt="Loading..." className="w-48" />
    </div>
  );
};

export default PageLoader;
