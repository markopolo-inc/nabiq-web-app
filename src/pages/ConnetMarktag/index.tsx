import MarktagDetails from 'components/Features/ConnectMarktag/MarktagDetails';
import MarktagSidebar from 'components/Features/ConnectMarktag/MarktagSidebar';
import { HeaderTitle } from 'layouts';

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
