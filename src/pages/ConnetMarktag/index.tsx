import HeaderTitle from "src/layouts/HeaderTitle";
import MarktagSidebar from "src/components/Features/ConnectMarktag/MarktagSidebar.tsx";
import MarktagDetails from "src/components/Features/ConnectMarktag/MarktagDetails.tsx";

const ConnectMarktag = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Connect Marktag</HeaderTitle>

      <div className="min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8">
        <MarktagSidebar />
        <MarktagDetails />
      </div>
    </>
  );
};

export default ConnectMarktag;
