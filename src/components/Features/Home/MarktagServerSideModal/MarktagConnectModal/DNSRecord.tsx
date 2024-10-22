import { FiCopy01 } from '@nabiq-icons';
import { Alert, Button, Stack, Text, TextInput, useGetColors } from '@nabiq-ui';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useVerifyTagSetupMutation } from 'src/store/marktag/markopoloMarktagApi';

import HowItWorksModal from '../HowItworksModal';

const DNSRecord = () => {
  const { gray500, gray900 } = useGetColors();
  const { domainData, setStep } = useContext<MarktagContextType>(MarkTagContext);
  const [verifyTagSetup, { isLoading }] = useVerifyTagSetupMutation();

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success('Copy to clipboard');
  };

  const handleVerifyRecords = async () => {
    const res = await verifyTagSetup({ markTagId: domainData?.markTagId }).unwrap();

    if (res) {
      setStep('code');
    }
  };

  return (
    <div>
      <Stack gap={2}>
        <Text color={gray900} size='18px' weight={600}>
          DNS Records
        </Text>
      </Stack>

      <Stack gap={12} py={12}>
        <TextInput label='Type' value={domainData?.records?.[0]?.type} />

        <TextInput
          label='Name'
          value={domainData?.records?.[0]?.name}
          rightSection={
            <FiCopy01
              style={{ cursor: 'pointer' }}
              color={gray500}
              onClick={() => handleCopy(domainData?.records?.[0]?.name)}
            />
          }
        />

        <TextInput
          label='Value'
          value={domainData?.records?.[0]?.value}
          rightSection={
            <FiCopy01
              style={{ cursor: 'pointer' }}
              color={gray500}
              onClick={() => handleCopy(domainData?.records?.[0]?.value)}
            />
          }
        />

        <TextInput label='TTL' value={domainData?.records?.[0]?.ttl} />
        <Alert color='orange'>
          <Text size='14px'>
            Please add record to your domain to complete setup. It may take upto 72 hours for dns
            record to propagate.
          </Text>
        </Alert>
      </Stack>

      <Stack gap={12} pt={20}>
        <Button fullWidth variant='primary' loading={isLoading} onClick={handleVerifyRecords}>
          Verify records
        </Button>
        <HowItWorksModal />
      </Stack>
    </div>
  );
};

export default DNSRecord;
