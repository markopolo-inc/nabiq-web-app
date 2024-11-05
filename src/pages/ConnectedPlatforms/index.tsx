import { FiPlatformIcon } from '@nabiq-icons';
import { ConnectionButton } from 'src/components/modules/home';
import { HeaderTitle } from 'src/layouts';
import { platformOptions } from 'src/lib/platform.lib';

const ConnectedPlatforms = () => {
  return (
    <>
      <HeaderTitle>Nabiq - Platforms</HeaderTitle>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col'>
          <p className='text-gray-900 font-semibold text-4xl'>Platforms</p>
          <p className='text-gray-600 font-normal text-lg'>
            Connect your platforms to Nabiq to enable seamless communication and data sharing.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            {platformOptions.map((platform) => (
              <div
                className='rounded-xl border border-gray-200 p-6 shadow-sm min-h-60 flex flex-col justify-between gap-8'
                key={platform.name}
              >
                <div>
                  <div className='flex gap-6 justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <FiPlatformIcon platform={platform.value} size={32} />
                      <p className='text-gray-900 font-semibold text-lg'>{platform.name}</p>
                    </div>
                  </div>

                  <p className='mt-6 text-gray-600 font-normal text-sm'>{platform.headline}</p>
                </div>

                <ConnectionButton platform={platform.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectedPlatforms;
