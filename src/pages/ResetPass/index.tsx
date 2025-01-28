import { Stack } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { ResetPass } from 'src/components/modules/reset-pass';

const ResetPassPage = () => {
  return (
    <>
      <HeaderTitle>Reset Pass</HeaderTitle>
      <div className='min-h-screen pt-14 w-full flex items-center justify-center'>
        <Stack className='max-w-[468px] w-full mx-auto' align='center' gap={24}>
          <ResetPass />
          {/*<CheckEmail />*/}
          {/*<NewPass />*/}
          {/*<PassResetSuccess />*/}
        </Stack>
      </div>
    </>
  );
};

export default ResetPassPage;
