import { Stack } from '@nabiq-ui';
import { ContentCard } from 'src/components/modules/control-room';

export const Samples: React.FC<{
  contents: any[];
  handleMarkContent: (contentId: string, status: 'relevant' | 'not_marked' | 'irrelevant') => void;
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
