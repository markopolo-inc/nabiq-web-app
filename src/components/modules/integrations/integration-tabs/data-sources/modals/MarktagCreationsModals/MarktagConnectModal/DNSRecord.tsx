import { FiCopy01 } from '@nabiq-icons';
import { Button, Stack, Text, TextInput, useGetColors } from '@nabiq-ui';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useVerifyTagSetupMutation } from 'src/store/marktag/markopoloMarktagApi';

import HowItWorksModal from '../HowItworksModal';

const DNSRecord = () => {
  const { t } = useTranslation();
  const { gray500, gray600, gray900 } = useGetColors();
  const { domainData, setStep } = useContext<MarktagContextType>(MarkTagContext);
  const [verifyTagSetup, { isLoading }] = useVerifyTagSetupMutation();

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success(t('home_page.copy_to_clipboard'), { id: 'copy-to-clipboard' });
  };

  const handleVerifyRecords = async () => {
    const res = await verifyTagSetup({ markTagId: domainData?.markTagId }).unwrap();

    if (res) {
      setStep('choose');
    }
  };

  return (
    <Stack gap={0}>
      <Stack gap={8} mt={16}>
        <Text color={gray900} size='24px' weight={600}>
          {t('home_page.dns_records')}
        </Text>
        <Text color={gray600} size='16px' className='leading-6'>
          {t('home_page.add_dns_record')}
        </Text>
      </Stack>

      <Stack gap={16} py={12}>
        <TextInput label='Type' readOnly value={domainData?.records?.[0]?.type} />

        <TextInput
          label={t('home_page.name')}
          value={domainData?.records?.[0]?.name}
          readOnly
          rightSection={
            <FiCopy01
              size={16}
              style={{ cursor: 'pointer' }}
              color={gray500}
              onClick={() => handleCopy(domainData?.records?.[0]?.name)}
            />
          }
        />

        <TextInput
          label={t('home_page.value')}
          value={domainData?.records?.[0]?.value}
          readOnly
          rightSection={
            <FiCopy01
              size={16}
              style={{ cursor: 'pointer' }}
              color={gray500}
              onClick={() => handleCopy(domainData?.records?.[0]?.value)}
            />
          }
        />

        <TextInput label='TTL' readOnly value={domainData?.records?.[0]?.ttl} />
      </Stack>

      <Stack gap={12} pt={20}>
        <Button fullWidth variant='primary' loading={isLoading} onClick={handleVerifyRecords}>
          {t('home_page.verify_records')}
        </Button>
        <HowItWorksModal />
      </Stack>
    </Stack>
  );
};

export default DNSRecord;
