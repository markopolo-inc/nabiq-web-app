import { FiPlus } from '@nabiq-icons';
import {
  Button,
  CloseButton,
  GatewayLogo,
  Modal,
  Select,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  TextInput,
  Th,
} from '@nabiq-ui';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import _, { capitalize } from 'lodash';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMappedField, TDataSourcePlatform } from 'src/interfaces/brand.interface';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetDataSourcePropertiesQuery,
  useSaveDataSourcePropertiesMutation,
} from 'src/store/integrations/data-sources.api';

const ModalBody = ({
  setOpened,
  platform,
}: {
  setOpened: Dispatch<SetStateAction<boolean>>;
  platform: TDataSourcePlatform;
}) => {
  const { t } = useTranslation();
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const { data, isLoading } = useGetDataSourcePropertiesQuery({
    brandId,
    platform,
  });

  const savedDataSourceFields = datasourceIntegrations?.mappedFields?.[platform] || [];

  const [saveDataSourceProperties, { isLoading: isSaving }] = useSaveDataSourcePropertiesMutation();

  const [selectedRequiredFields, setSelectedRequiredFields] = useState<IMappedField[]>([]);
  const [selectedOptionalFields, setSelectedOptionalFields] = useState<IMappedField[]>([]);

  const requiredFields = [
    { label: t('integrations.company'), value: 'company' },
    { label: t('onboarding.email'), value: 'email' },
    { label: t('integrations.phone'), value: 'phone' },
    { label: t('settings.name'), value: 'name' },
  ];

  useEffect(() => {
    if (Object.keys(savedDataSourceFields).length > 0) {
      setSelectedRequiredFields(
        requiredFields?.map((_field) => {
          const savedField = savedDataSourceFields.find((field) => field.name === _field.value);
          return {
            label: _field.label,
            name: _field.value,
            nabiqPropertyLabel: savedField?.nabiqPropertyLabel || '',
            nabiqPropertyName: savedField?.nabiqPropertyName || '',
          };
        }),
      );
      setSelectedOptionalFields(
        savedDataSourceFields?.filter(
          (field) => !requiredFields.map((item) => item.value).includes(field.name),
        ),
      );
    }
  }, [savedDataSourceFields]);

  const nabiqFields = data?.data || [];

  const groupedFields = useMemo(() => {
    const result = [];
    const seenNames = new Set();
    const uniqueData = [];

    // Filter out duplicates based on 'name'
    (nabiqFields || []).forEach((item) => {
      if (!seenNames.has(item.name)) {
        seenNames.add(item.name);
        uniqueData.push(item);
      }
    });

    // Create a map to group items by 'group'
    const groupMap = {};

    uniqueData.forEach(({ group, name, label }) => {
      if (!groupMap[group]) {
        groupMap[group] = [];
      }
      groupMap[group].push({ label, value: name });
    });

    // Convert the map into the desired structure
    for (const [group, items] of Object.entries(groupMap)) {
      result.push({ group, items });
    }

    return result;
  }, [nabiqFields]);

  const handleSave = async () => {
    const res = await saveDataSourceProperties({
      brandId,
      platform,
      data: [...selectedRequiredFields, ...selectedOptionalFields],
    })?.unwrap();
    if (res.success) {
      setOpened(false);
    }
  };

  const mappedRequiredFieldsLength =
    selectedRequiredFields?.filter(
      (_field) => _field.nabiqPropertyName && _field.nabiqPropertyLabel,
    ).length || 0;

  const mappedOptionalFieldsLength =
    selectedOptionalFields?.filter(
      (_field) => _field.nabiqPropertyName && _field.nabiqPropertyLabel && _field.name,
    ).length || 0;

  return (
    <div className='relative'>
      <Stack className='p-8 pb-5 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm'>
        <GatewayLogo app={platform} width={32} />
        <Stack gap={0}>
          <p className='text-2xl font-semibold text-gray-900'>
            {t('integrations.integrate')} {capitalize(platform)}
          </p>
          <p className='text-base text-gray-600'>
            {t('integrations.choose_data_fields')} {capitalize(platform)}.
          </p>
        </Stack>
        <div className='absolute top-8 right-8'>
          <CloseButton onClick={() => setOpened(false)} />
        </div>
      </Stack>
      <Stack className='px-8 py-5' gap={0}>
        <p className='text-lg font-semibold text-gray-900'>{t('integrations.mandatory_field')}</p>
        <p className='text-sm text-gray-600'>
          {t('mapped_fields', {
            mappedRequiredFieldsLength,
            requiredFieldsLength: requiredFields.length || 0,
          })}
        </p>
      </Stack>
      <Table
        striped
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
      >
        <TableHead>
          <TableRow>
            <Th>{t('integrations.template_property')}</Th>
            <Th>{t('integrations.mapping')}</Th>
            <Th>{t('integrations.nabiq_property')}</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedRequiredFields.map((field) => (
            <TableRow key={field.name}>
              <Td>
                <Select data={requiredFields} value={field.name} size='sm' disabled />
              </Td>
              <Td>
                <div className='flex items-center justify-center'>
                  <IconArrowNarrowRight color='#17B26A' />
                </div>
              </Td>
              <Td>
                <Select
                  disabled={isLoading}
                  data={groupedFields || []}
                  size='sm'
                  searchable
                  defaultDropdownOpened={false}
                  value={field.nabiqPropertyName}
                  onChange={(value, option) => {
                    setSelectedRequiredFields((prev) =>
                      prev?.map((_field) =>
                        _field.name === field.label
                          ? {
                              ..._field,
                              nabiqPropertyName: value,
                              nabiqPropertyLabel: option?.label,
                            }
                          : _field,
                      ),
                    );
                  }}
                />
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack className='px-8 py-5' gap={0}>
        <p className='text-lg font-semibold text-gray-900'>{t('integrations.optional_fields')}</p>
        <p className='text-sm text-gray-600'>
          {t('mapped_fields', {
            mappedOptionalFieldsLength,
            requiredFieldsLength: selectedOptionalFields.length || 0,
          })}
        </p>
      </Stack>
      <Table
        striped
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
      >
        <TableHead>
          <TableRow>
            <Th>{t('integrations.template_property')}</Th>
            <Th>{t('integrations.mapping')}</Th>
            <Th>{t('integrations.nabiq_property')}</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedOptionalFields.map((field, index) => (
            <TableRow key={index}>
              <Td>
                <TextInput
                  value={field.name}
                  size='sm'
                  onChange={(e) => {
                    setSelectedOptionalFields((prev) =>
                      prev?.map((_field, idx) =>
                        index === idx
                          ? { ..._field, name: e.target.value, label: e.target.value }
                          : _field,
                      ),
                    );
                  }}
                />
              </Td>
              <Td>
                <div className='flex items-center justify-center'>
                  <IconArrowNarrowRight color='#17B26A' />
                </div>
              </Td>
              <Td>
                <Select
                  disabled={isLoading}
                  data={groupedFields || []}
                  size='sm'
                  searchable
                  value={field.nabiqPropertyName}
                  onChange={(value, option) => {
                    setSelectedOptionalFields((prev) =>
                      prev?.map((_field, idx) =>
                        idx === index
                          ? {
                              ..._field,
                              nabiqPropertyName: value,
                              nabiqPropertyLabel: option?.label,
                            }
                          : _field,
                      ),
                    );
                  }}
                />
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        className='m-8'
        variant='secondary-black'
        size='sm'
        onClick={() =>
          setSelectedOptionalFields([...selectedOptionalFields, { name: '', label: '' }])
        }
        leadingIcon={<FiPlus size={18} />}
      >
        {t('integrations.add_field')}
      </Button>
      <Stack className='p-8 sticky bottom-0 bg-white border-t border-gray-200'>
        <Button
          fullWidth
          loading={isSaving}
          onClick={handleSave}
          disabled={
            mappedRequiredFieldsLength !== requiredFields.length ||
            mappedOptionalFieldsLength !== selectedOptionalFields.length
          }
        >
          {t('integrations.confirm')}
        </Button>
        <Button disabled={isSaving} variant='secondary' onClick={() => setOpened(false)} fullWidth>
          {t('settings.cancel')}
        </Button>
      </Stack>
    </div>
  );
};

export const DataSourceModal = ({ platform }: { platform: TDataSourcePlatform }) => {
  const { t } = useTranslation();
  return (
    <Modal
      withNoHeader
      body={({ setOpened }) => <ModalBody setOpened={setOpened} platform={platform} />}
    >
      {({ setOpened }) => (
        <Button className='!w-40' variant='secondary' onClick={() => setOpened(true)}>
          {t('create_campaign.configure')}
        </Button>
      )}
    </Modal>
  );
};
