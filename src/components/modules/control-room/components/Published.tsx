import { Stack } from '@nabiq-ui';
import { ConfigCard } from 'components/modules/control-room/components/ConfigCard.tsx';
import { IControlRoomConfig } from 'src/interfaces/controlRoom.interface';

export const Published: React.FC<{
  configs: IControlRoomConfig[];
}> = ({ configs }) => {
  return (
    <Stack gap={32}>
      {configs.map((item, idx) => (
        <ConfigCard config={item} key={idx} isPublished />
      ))}
    </Stack>
  );
};
