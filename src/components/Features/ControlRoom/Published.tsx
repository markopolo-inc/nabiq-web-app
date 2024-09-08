import { Stack } from '@nabiq-ui';
import { ControlRoomConfigInterface } from 'src/interfaces/controlRoom.interface';

import ConfigCard from './ConfigCard';

const Published: React.FC<{
  configs: ControlRoomConfigInterface[];
}> = ({ configs }) => {
  return (
    <Stack gap={32}>
      {configs.map((item, idx) => (
        <ConfigCard config={item} key={idx} isPublished />
      ))}
    </Stack>
  );
};

export default Published;
