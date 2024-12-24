import { FiMail01, FiMessageDotCircle, FiThumbsDown, FiThumbsUp } from '@nabiq-icons';
import { Button, Group, Stack } from '@nabiq-ui';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store/hooks';
import { setSampleContents } from 'src/store/onboarding/onboardingSlice';

export const GeneratedContents = () => {
  const { sampleContents } = useAppSelector((state) => state.onboarding);
  const dispatch = useDispatch();
  const handleMarkContent = (index: number) => {
    dispatch(setSampleContents(sampleContents.slice(0, index)));
  };
  const contents = sampleContents?.slice(0, 3);
  return (
    <Stack className='relative h-full' justify='center' style={{ marginTop: -250 }}>
      {contents?.map((content, index) => (
        <div
          key={index}
          className={cn(
            'rounded-[20px] border border-white absolute p-8',
            'transform -translate-x-1/2',
            index !== contents?.length - 1 && 'h-[40px]',
          )}
          style={{
            zIndex: 10 + index,
            width: `calc(90% + ${index * 30}px)`,
            top: `${index * 25}px`,
            left: '50%',
            boxShadow:
              '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
            background: 'rgba(255, 255, 255, 0.48)',
            backdropFilter: 'blur(16px)',
            overflow: 'hidden',
          }}
        >
          <Stack gap={64}>
            <Group>
              {content.channel === 'email' && <FiMail01 color='#EE46BC' size={32} />}
              {content.channel === 'sms' && <FiMessageDotCircle color='#2E90FA' size={32} />}
              <p className='text-lg font-semibold text-gray-950'>
                Sample content {contents?.length - index}
              </p>
            </Group>
            <Stack gap={32} className='text-sm text-gray-950 font-semibold'>
              {content.subject && (
                <p>
                  Subject: <span dangerouslySetInnerHTML={{ __html: content.subject }} />
                </p>
              )}
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </Stack>
            <Group>
              <Button
                trailingIcon={<FiThumbsUp size={17} />}
                onClick={() => {
                  handleMarkContent(index);
                }}
              >
                I like this
              </Button>
              <Button variant='secondary-black' onClick={() => handleMarkContent(index)}>
                <FiThumbsDown size={17} />
              </Button>
            </Group>
          </Stack>
        </div>
      ))}
      {/* <div
        className={cn(
          `rounded-[20px] border border-white h-fit absolute w-[calc(100%-60px)] p-8`,
          `z-${8}`,
          `top-0 left-1/2 transform -translate-x-1/2`,
        )}
        style={{
          boxShadow:
            '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
          background: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Sample text goes here. This is additional sample text to provide more content for display
        purposes. Here is even more sample text to further illustrate the content. Adding more text
        to ensure there is enough sample content for testing. More sample text is added here to
        fulfill the requirement of having more content. Continuing to add more sample text to make
        sure there is plenty of content available. Even more sample text is being added to ensure
        there is an abundance of content for display.
      </div>
      <div
        className={cn(
          `rounded-[20px] border border-white h-fit absolute w-[calc(100%-30px)] p-8`,
          `z-${9}`,
          `top-[25px] left-1/2 transform -translate-x-1/2`,
        )}
        style={{
          boxShadow:
            '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
          background: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Sample text goes here. This is additional sample text to provide more content for display
        purposes. Here is even more sample text to further illustrate the content. Adding more text
        to ensure there is enough sample content for testing. More sample text is added here to
        fulfill the requirement of having more content. Continuing to add more sample text to make
        sure there is plenty of content available. Even more sample text is being added to ensure
        there is an abundance of content for display. Sample text goes here. This is additional
        sample text to provide more content for display purposes. Here is even more sample text to
        further illustrate the content. Adding more text to ensure there is enough sample content
        for testing. More sample text is added here to fulfill the requirement of having more
        content. Continuing to add more sample text to make sure there is plenty of content
        available. Even more sample text is being added to ensure there is an abundance of content
        for display. Sample text goes here. This is additional sample text to provide more content
        for display purposes. Here is even more sample text to further illustrate the content.
        Adding more text to ensure there is enough sample content for testing. More sample text is
        added here to fulfill the requirement of having more content. Continuing to add more sample
        text to make sure there is plenty of content available. Even more sample text is being added
        to ensure there is an abundance of content for display.
      </div>
      <div
        className={cn(
          `rounded-[20px] border border-white h-fit absolute w-full p-8`,
          `z-${10}`,
          `top-[50px] left-1/2 transform -translate-x-1/2`,
        )}
        style={{
          boxShadow:
            '0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
          background: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Sample text goes here. This is additional sample text to provide more content for display
        purposes. Here is even more sample text to further illustrate the content. Adding more text
        to ensure there is enough sample content for testing. More sample text is added here to
        fulfill the requirement of having more content. Continuing to add more sample text to make
        sure there is plenty of content available. Even more sample text is being added to ensure
        there is an abundance of content for display. Sample text goes here. This is additional
        sample text to provide more content for display purposes. Here is even more sample text to
        further illustrate the content. Adding more text to ensure there is enough sample content
        for testing. More sample text is added here to fulfill the requirement of having more
        content. Continuing to add more sample text to make sure there is plenty of content
        available. Even more sample text is being added to ensure there is an abundance of content
        for display.
      </div> */}
    </Stack>
  );
};
