import { FiAlertTriangle } from '@nabiq-icons';
import { Alert, Group, Text, useGetColors } from '@nabiq-ui';

const MarktagCodeSnippetAlert = ({ isVisible = true }) => {
  const { warning700 } = useGetColors();
  return (
    isVisible && (
      <Alert color='orange'>
        <Group align='flex-start'>
          <FiAlertTriangle color={warning700} size={20} />
          <Text color={warning700} size='14px' weight={600}>
            Attention! Setup this code directly into your website. Using third party tools like
            Google Tag Manager may concur issues.
          </Text>
        </Group>
      </Alert>
    )
  );
};

export default MarktagCodeSnippetAlert;
