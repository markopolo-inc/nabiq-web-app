import { FiMail01 } from '@nabiq-icons';
import { Button, Group, Stack, Text, TextArea, TextInput, useGetColors } from '@nabiq-ui';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppSelector } from 'src/store/hooks';
import { useSendEmailInstructionMutation } from 'src/store/marktag/analyticsMarktagApi';

const EmailToDeveloper = ({ setOpened }) => {
  const { gray600, gray900, primary500, primary700 } = useGetColors();
  const { userName } = useAppSelector((state) => state.user);
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [sendEmailInstruction, { isLoading, isSuccess }] = useSendEmailInstructionMutation();

  const handleSendInstructions = () => {
    if (!recipientEmail) {
      toast('Please enter a valid email address!', {
        icon: '⚠️',
      });
      return;
    }

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(recipientEmail)) {
      sendEmailInstruction({
        email: recipientEmail,
        username: userName,
      });
    } else {
      toast.error('Invalid email address!');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setOpened(false);
    }
  }, [isSuccess, setOpened]);

  return (
    <>
      <div style={{ width: '100%' }}>
        <Group gap={8} style={{ paddingBottom: 12 }}>
          <FiMail01 color={primary500} />
          <Text size='16px' weight={600} color={primary700}>
            Email to developer
          </Text>
        </Group>
      </div>

      <Stack gap={32}>
        <Stack gap={24}>
          <Text color={gray900} size='18px' weight={600}>
            Email details
          </Text>

          <TextInput
            label='To:'
            placeholder='Add recipient email'
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />

          <TextArea
            label='Draft message'
            placeholder='Write the message'
            autosize
            value={`[User] sent you instructions for installing the Marktag on your website.

Please first setup the Marktag inside the website following the first document and then setup the events for tracking following the second document.

Marktag Setup Guide: https://markopolo-inc.github.io/marktag-docs/web-sdk/installation

Event Setup Guide: https://markopolo-inc.github.io/marktag-docs/web-sdk/usage
`}
          />

          <Stack gap={4}>
            <Text color={gray900} size='18px' weight={600}>
              Email setup instructions
            </Text>
            <Stack gap={12}>
              <Text color={gray600} size='14px'>
                Marktag offers a robust event collection feature, allowing businesses to track user
                interactions on their websites accurately. By strategically implementing event
                tracking, businesses can optimize their marketing campaigns and enhance overall
                effectiveness.
              </Text>
              <Text color={gray600} size='14px'>
                To complete the setup of Marktag you have to first install the &quot;MarkTag
                Script&quot; to your web application and then manual event triggers for each of the
                event you want to track via Marktag. You can track more than 20 type of events with
                Marktag along with all the meta data you want to capture.
              </Text>
              <Text color={gray600} size='14px'>
                Send the instructions on how to setup the Marktag and events to your developers by
                clicking the button below.
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Group>
          <Button
            style={{ marginTop: '16px' }}
            loading={isLoading}
            onClick={handleSendInstructions}
          >
            Send instructions to developer
          </Button>
        </Group>
      </Stack>
    </>
  );
};

export default EmailToDeveloper;
