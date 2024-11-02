import { HeaderTitle } from 'layouts';
import { MarktagDetails } from 'src/components/modules/home';
import { MarktagSidebar } from 'src/components/modules/home/components/screens/ConnectMarktag/MarktagSidebar';

const ConnectMarktag = () => {
  return (
    <>
      <HeaderTitle>Nabiq | Connect Marktag</HeaderTitle>

      <div className='min-h-screen mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <MarktagSidebar />
        <MarktagDetails />
      </div>
    </>
  );
};

export default ConnectMarktag;
