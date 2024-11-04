import { FiCheck, FiCrossX, FiShield02 } from '@nabiq-icons';
import { Badge, Button, Group, Stack } from '@nabiq-ui';
import { IContentSampleType } from 'src/interfaces/controlRoom.interface';

export const ContentCard = ({
  content,
  isBlockedByAI = false,
  handleMarkContent,
  isLoading,
}: {
  content: IContentSampleType;
  isBlockedByAI?: boolean;
  handleMarkContent: (contentId: string, status: 'relevant' | 'not_marked' | 'irrelevant') => void;
  isLoading: boolean;
}) => {
  return (
    <Stack className='rounded-xl border-gray-200 border p-6 max-w-[744px]' gap={24}>
      <Stack className='font-medium text-[12px] text-gray-600'>
        <p>Subject: {content?.subject}</p>
        <p>{content?.content}</p>
      </Stack>

      {/*{!isBlockedByAI ? <Group gap={24} justify='space-between'>*/}
      {/*</Group> : <></>}*/}

      {!Boolean(content?.status) || content?.status === 'not_marked' ? (
        <Group justify='flex-end'>
          <Button
            disabled={isLoading}
            variant='secondary'
            size='md'
            trailingIcon={<FiCrossX color='#4B5565' size={11} />}
            onClick={() => handleMarkContent(content?.id, 'irrelevant')}
          >
            Irrelavant
          </Button>
          <Button
            disabled={isLoading}
            variant='secondary-black'
            size='md'
            trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
            onClick={() => handleMarkContent(content?.id, 'relevant')}
          >
            I find this relevant
          </Button>
        </Group>
      ) : (
        <>
          <Group justify='flex-start'>
            {isBlockedByAI && (
              <Badge color='gray' size='lg'>
                <FiShield02 size={16} strokeWidth={1} />
                Blocked by AI due to constitution breach
              </Badge>
            )}
          </Group>

          <Group justify='flex-end'>
            {content?.status === 'relevant' && <Button variant='link'>Change feedback</Button>}

            {content?.status === 'relevant' && (
              <Badge color='success' size='lg'>
                <FiCheck size={16} strokeWidth={1} />
                Relevant
              </Badge>
            )}

            {isBlockedByAI && (
              <Button
                disabled={isLoading}
                variant='secondary-black'
                size='md'
                trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
                onClick={() => handleMarkContent(content?.id, 'relevant')}
              >
                Approve
              </Button>
            )}
          </Group>
        </>
      )}
    </Stack>
  );
};
