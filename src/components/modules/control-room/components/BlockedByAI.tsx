import { Stack } from '@nabiq-ui';
import { ContentCard } from 'components/modules/control-room/components/ContentCard';
import { IContentSampleType } from 'src/interfaces/controlRoom.interface.ts';

export const BlockedByAI: React.FC<{
  contents: IContentSampleType[];
  handleMarkContent: (contentId: string, status: 'approved' | 'blocked') => void;
  isLoading: boolean;
}> = ({ contents, handleMarkContent, isLoading }) => {
  return (
    <Stack gap={32}>
      {contents.map((item, idx) => (
        <ContentCard
          content={item}
          key={idx}
          handleMarkContent={handleMarkContent}
          isLoading={isLoading}
          isBlockedByAI
        />
      ))}
    </Stack>
  );
};
