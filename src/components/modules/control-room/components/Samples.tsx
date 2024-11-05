import { Stack } from '@nabiq-ui';
import { ContentCard } from 'src/components/modules/control-room';
import { IContentSampleType } from 'src/interfaces/controlRoom.interface.ts';

export const Samples: React.FC<{
  contents: IContentSampleType[];
  handleMarkContent: (contentId: string, status: 'relevant' | 'irrelevant') => void;
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
        />
      ))}
    </Stack>
  );
};
