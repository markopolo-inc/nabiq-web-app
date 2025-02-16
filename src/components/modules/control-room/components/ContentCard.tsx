import { FiCheck, FiCrossX, FiShield02, SlashCircle01 } from '@nabiq-icons';
import { Badge, Button, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { IContentSampleType } from 'src/interfaces/controlRoom.interface';

export const ContentCard = ({
  content,
  isBlockedByAI = false,
  handleMarkContent,
  isLoading,
}: {
  content: IContentSampleType;
  isBlockedByAI?: boolean;
  handleMarkContent: (
    contentId: string,
    status: 'relevant' | 'irrelevant' | 'approved' | 'blocked',
    _content?: string,
  ) => void;
  isLoading: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Stack className='rounded-xl border-gray-200 border p-6 max-w-[744px]' gap={24}>
      <Stack className='font-medium text-[12px] text-gray-600'>
        <p>{t('content_samples.subject', { subject: content?.subject })}</p>
        <pre className='whitespace-pre-wrap text-gray-600'>{content?.content}</pre>
      </Stack>

      <Group gap={24} justify='space-between' align='flex-end'>
        {isBlockedByAI && (content?.action === 'not_marked' || content?.action === 'blocked') && (
          <>
            <Badge color='gray' size='lg'>
              <FiShield02 size={16} strokeWidth={1} />
              {t('content_samples.blocked_by_ai_breach')}
            </Badge>
            <Button
              disabled={isLoading}
              variant='secondary-black'
              size='sm'
              trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
              onClick={() => handleMarkContent(content?.id, 'approved')}
            >
              {t('content_samples.approve')}
            </Button>
          </>
        )}

        {isBlockedByAI && content?.action === 'approved' && (
          <Group justify='flex-end' className='!w-full'>
            <Button
              variant='tertiary-destructive'
              leadingIcon={<SlashCircle01 color='#B42318' size={11} />}
              onClick={() => handleMarkContent(content?.id, 'blocked')}
            >
              {t('content_samples.block')}
            </Button>
            <Badge color='success' size='lg'>
              <FiCheck size={16} strokeWidth={1} />
              {t('content_samples.approved')}
            </Badge>
          </Group>
        )}

        {!isBlockedByAI && <GatewayLogo app={content.platform ?? 'hubspot'} width={20} />}
        {!isBlockedByAI && content.status === 'not_marked' && (
          <Group justify='flex-end'>
            <Button
              disabled={isLoading}
              variant='secondary'
              size='sm'
              trailingIcon={<FiCrossX color='#4B5565' size={11} />}
              onClick={() => handleMarkContent(content?.id, 'irrelevant', content?.content)}
            >
              {t('content_samples.irrelevant')}
            </Button>
            <Button
              disabled={isLoading}
              variant='secondary-black'
              size='sm'
              trailingIcon={<FiCheck size={16} color='white' strokeWidth={1} />}
              onClick={() => handleMarkContent(content?.id, 'relevant', content?.content)}
            >
              {t('content_samples.find_relevant')}
            </Button>
          </Group>
        )}

        {!isBlockedByAI && content.status === 'relevant' && (
          <Group justify='flex-end'>
            <Button
              variant='link'
              onClick={() => handleMarkContent(content?.id, 'irrelevant', content?.content)}
            >
              {t('content_samples.change_feedback')}
            </Button>
            <Badge color='success' size='lg'>
              <FiCheck size={16} strokeWidth={1} />
              {t('content_samples.relevant')}
            </Badge>
          </Group>
        )}

        {!isBlockedByAI && content.status === 'irrelevant' && (
          <Group justify='flex-end'>
            <Button
              variant='link'
              onClick={() => handleMarkContent(content?.id, 'relevant', content?.content)}
            >
              {t('content_samples.change_feedback')}
            </Button>
            <Badge color='error' size='lg'>
              <FiCheck size={16} strokeWidth={1} color='#B42318' />
              {t('content_samples.irrelevant')}
            </Badge>
          </Group>
        )}
      </Group>
    </Stack>
  );
};
