import { Stack } from '@nabiq-ui';
import { ConfigCard } from 'components/modules/control-room/components/ConfigCard';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';

export const Queued: React.FC<{
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
