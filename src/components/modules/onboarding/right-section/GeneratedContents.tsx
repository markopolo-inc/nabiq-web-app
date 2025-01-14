import {
  FiGreenCheckCircle,
  FiMail01,
  FiMessageDotCircle,
  FiThumbsDown,
  FiThumbsUp,
} from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store/hooks';
import { setIsMarkedContent, setSampleContents } from 'src/store/onboarding/onboardingSlice';

export const GeneratedContents = () => {
  const { t } = useTranslation();
  const { sampleContents, isMarkedContent } = useAppSelector((state) => state.onboarding);
  const dispatch = useDispatch();

  const contents = sampleContents?.slice(0, 3);
  const handleMarkContent = (index: number) => {
    if (contents?.length === 1) {
      dispatch(setIsMarkedContent(true));
    }
    dispatch(setSampleContents(sampleContents.slice(0, index)));
  };
  return isMarkedContent ? (
    <motion.div
      className='relative p-8 flex-col rounded-[20px] border border-white bg-white/48 backdrop-blur-lg flex justify-center items-center gap-[32px]'
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <FiGreenCheckCircle color='#079455' size={32} />
      <Stack gap={8} justify='center' align='center'>
        <p className='text-2xl font-semibold text-gray-950'>{t('onboarding.feedback_thanks')}</p>
        <p className='text-base font-normal text-gray-600'>
          {t('onboarding.business_understanding')}
        </p>
      </Stack>
    </motion.div>
  ) : (
    <Stack className='relative h-full' justify='center' style={{ marginTop: -250 }}>
      <AnimatePresence>
        {contents?.map((content, index) => (
          <div
            key={index}
            className={cn(
              'rounded-[20px] border border-white absolute p-8 backdrop-blur-lg',
              'transform -translate-x-1/2 bg-white/48',
              index !== contents?.length - 1 && 'h-[40px]',
            )}
            style={{
              zIndex: 10 + index,
              width: `calc(90% + ${index * 30}px)`,
              top: `${index * 25}px`,
              left: '50%',
              boxShadow:
                '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Stack gap={64}>
                <Group>
                  {content.channel === 'email' && <FiMail01 color='#EE46BC' size={32} />}
                  {content.channel === 'sms' && <FiMessageDotCircle color='#2E90FA' size={32} />}
                  <p className='text-lg font-normal text-gray-950'>Sample content</p>
                </Group>
                <Stack gap={32}>
                  {content.subject && (
                    <Group gap={8}>
                      <p className='text-sm text-gray-950 font-semibold'>Subject:</p>
                      <span
                        className='text-sm text-gray-950 font-semibold'
                        dangerouslySetInnerHTML={{ __html: content.subject }}
                      />
                    </Group>
                  )}
                  <div
                    className='text-sm text-gray-950 font-semibold'
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  />
                </Stack>
                <Group>
                  <Button
                    trailingIcon={<FiThumbsUp size={17} />}
                    onClick={() => {
                      handleMarkContent(index);
                    }}
                  >
                    {t('onboarding.like_feedback')}
                  </Button>
                  <Button variant='secondary-black' onClick={() => handleMarkContent(index)}>
                    <FiThumbsDown size={17} />
                  </Button>
                </Group>
              </Stack>
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </Stack>
  );
};
