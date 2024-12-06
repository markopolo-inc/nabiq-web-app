import { HeaderTitle } from 'layouts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConstitutionalAIModerationCard, IntegrateApps } from 'src/components/modules/home';
import {
  clearShopifyCookies,
  getShopifyCookies,
} from 'src/utils/modules/integrations/shopify.utils';
import { useAppSelector } from 'store/hooks';

const Home = () => {
  const company = useAppSelector((state) => state.company);
  const navigate = useNavigate();
  const { installationInit, shop } = getShopifyCookies();

  useEffect(() => {
    if (installationInit && shop) {
      clearShopifyCookies();
      navigate(`/integrations?selectedTab=ecommerce&connected=shopify`);
    }
  }, [installationInit, shop]);

  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>

      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Hello, {company?.meta?.userName}</p>
          <p className='text-gray-600 font-normal text-lg'>
            Welcome to your marketing co-pilot captain.
          </p>
        </div>
        <div className='p-12 bg-gray-100 rounded-xl'>
          <div className='flex flex-col justify-center items-center'>
            <div className='gap-3 w-fit grid grid-cols-1 xl:grid-cols-2 justify-center'>
              <IntegrateApps />
              <ConstitutionalAIModerationCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
