import { FiCheck, FiCrossX, FiShield02 } from '@nabiq-icons';
import { Badge, Button, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { IContentSampleType } from 'src/interfaces/controlRoom.interface';

export const ContentCard = ({
  content,
  isBlockedByAI = false,
  handleMarkContent,
  isLoading,
}: {
  content: IContentSampleType;
  isBlockedByAI?: boolean;
  handleMarkContent: (contentId: string, status: 'relevant' | 'irrelevant') => void;
  isLoading: boolean;
}) => {
  return (
    <Stack className='rounded-xl border-gray-200 border p-6 max-w-[744px]' gap={24}>
      <Stack className='font-medium text-[12px] text-gray-600'>
        <p>Subject: {content?.subject}</p>
        <p>{content?.content}</p>
      </Stack>

      <Group gap={24} justify='space-between' align='flex-end'>
        {isBlockedByAI && content.status === 'not_marked' && (
          <>
            <Badge color='gray' size='lg'>
              <FiShield02 size={16} strokeWidth={1} />
              Blocked by AI due to constitution breach
            </Badge>
            <Button
              disabled={isLoading}
              variant='secondary-black'
              size='md'
              trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
            >
              Approve
            </Button>
          </>
        )}
        {!isBlockedByAI && <GatewayLogo app={content.platform ?? 'hubspot'} width={20} />}
        {!isBlockedByAI && content.status === 'not_marked' && (
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
        )}

        {!isBlockedByAI && content.status === 'relevant' && (
          <Group justify='flex-end'>
            <Button variant='link' onClick={() => handleMarkContent(content?.id, 'irrelevant')}>
              Change feedback
            </Button>
            <Badge color='success' size='lg'>
              <FiCheck size={16} strokeWidth={1} />
              Relevant
            </Badge>
          </Group>
        )}

        {!isBlockedByAI && content.status === 'irrelevant' && (
          <Group justify='flex-end'>
            <Button variant='link' onClick={() => handleMarkContent(content?.id, 'relevant')}>
              Change feedback
            </Button>
            <Badge color='error' size='lg'>
              <FiCheck size={16} strokeWidth={1} color='#B42318' />
              Irrelevant
            </Badge>
          </Group>
        )}
      </Group>
    </Stack>
  );
};
