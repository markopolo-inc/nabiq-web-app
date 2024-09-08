import { Stack } from '@nabiq-ui';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';

import ConfigCard from './ConfigCard';

const Queued: React.FC<{
  configs: IControlRoomConfig[];
}> = ({ configs }) => {
  return (
    <Stack gap={32}>
      {configs.map((item, idx) => (
        <ConfigCard config={item} key={idx} />
      ))}
    </Stack>
  );
};

export default Queued;
