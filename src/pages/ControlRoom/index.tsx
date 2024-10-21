import { FiCheckVerified01, FiHourglass03 } from '@nabiq-icons';
import { ContentLoader, OptionTabs, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { Published, Queued } from 'src/components/modules/control-room';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';
import { useGetConfigsQuery } from 'src/store/controlRoom/controlRoom.api';

export const appCategories = [
  {
    value: 'queued',
    label: 'Queued',
    icon: FiHourglass03,
  },
  {
    value: 'published',
    label: 'Published',
    icon: FiCheckVerified01,
  },
];

const ControlRoom = () => {
  const [category, setCategory] = useState<'queued' | 'published'>('queued');

  const { data, isLoading } = useGetConfigsQuery({ type: category, limit: 10, page: 1 });

  const configs: IControlRoomConfig[] = data?.data?.configs || [];

  return (
    <Stack gap={32}>
      <Stack gap={64}>
        <Stack>
          <Stack gap={4}>
            <p className='text-gray-900 text-3xl font-semibold'>Control room</p>
            <p className='text-gray-600 text-base font-normal'>
              View cohorts and approve content generated for campaigns.
            </p>
          </Stack>
        </Stack>
        <OptionTabs setActive={setCategory} active={category} options={appCategories} />
      </Stack>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <Stack align='center'>
          {category === 'queued' && <Queued configs={configs} />}
          {category === 'published' && <Published configs={configs} />}
        </Stack>
      )}
    </Stack>
  );
};

export default ControlRoom;
