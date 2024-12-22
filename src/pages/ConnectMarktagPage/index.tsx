import { HeaderTitle } from 'layouts';
import { MarktagDetails, MarktagSidebar } from 'src/components/modules/home';

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
