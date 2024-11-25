import { FiPlus } from '@nabiq-icons';
import {
  Button,
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
import _ from 'lodash';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { IMappedField } from 'src/interfaces/brand.interface';
import { useAppSelector } from 'src/store/hooks';
import {
  useGetDataSourcePropertiesQuery,
  useSaveDataSourcePropertiesMutation,
} from 'src/store/integrations/data-sources.api';

const ModalBody = ({ setOpened }: { setOpened: Dispatch<SetStateAction<boolean>> }) => {
  const { resourceId: brandId, datasourceIntegrations } = useAppSelector((state) => state.brand);
  const { data, isLoading } = useGetDataSourcePropertiesQuery({
    brandId,
    platform: 'hubspot',
  });

  const savedDataSourceFields = datasourceIntegrations?.mappedFields?.hubspot || [];

  const [saveDataSourceProperties, { isLoading: isSaving }] = useSaveDataSourcePropertiesMutation();

  const [selectedRequiredFields, setSelectedRequiredFields] = useState<IMappedField[]>([]);
  const [selectedOptionalFields, setSelectedOptionalFields] = useState<IMappedField[]>([]);

  const requiredFields = [
    { label: 'company', value: 'company' },
    { label: 'email', value: 'email' },
    { label: 'phone', value: 'phone' },
    { label: 'name', value: 'name' },
  ];

  useEffect(() => {
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
  }, [savedDataSourceFields]);

  useEffect(() => {
    setSelectedOptionalFields(
      savedDataSourceFields?.filter(
        (field) => !requiredFields.map((item) => item.value).includes(field.name),
      ),
    );
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
      platform: 'hubspot',
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
    <div>
      <Stack className='p-8 pb-5 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm'>
        <GatewayLogo app='hubspot' width={32} />
        <Stack gap={0}>
          <p className='text-2xl font-semibold text-gray-900'>Integrate Salesforce</p>
          <p className='text-base text-gray-600'>
            Choose the data fields you want to bring over from Salesforce.
          </p>
        </Stack>
      </Stack>
      <Stack className='px-8 py-5' gap={0}>
        <p className='text-lg font-semibold text-gray-900'>Mandatory field</p>
        <p className='text-sm text-gray-600'>
          {selectedRequiredFields.length || 0} out of {mappedOptionalFieldsLength} mapped
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
            <Th>Template property</Th>
            <Th>Mapping</Th>
            <Th>Nabiq property</Th>
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
        <p className='text-lg font-semibold text-gray-900'>Optional fields</p>
        <p className='text-sm text-gray-600'>
          {selectedOptionalFields.length} out of {mappedOptionalFieldsLength} mapped
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
            <Th>Template property</Th>
            <Th>Mapping</Th>
            <Th>Nabiq property</Th>
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
                      prev?.map((_field) =>
                        _field.name === field.name
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
        className='m-8 mb-0'
        variant='secondary-black'
        size='sm'
        onClick={() =>
          setSelectedOptionalFields([...selectedOptionalFields, { name: '', label: '' }])
        }
        leadingIcon={<FiPlus size={18} />}
      >
        Add field
      </Button>
      <Stack className='p-8'>
        <Button
          fullWidth
          loading={isSaving}
          onClick={handleSave}
          disabled={
            mappedRequiredFieldsLength !== requiredFields.length ||
            mappedOptionalFieldsLength !== selectedOptionalFields.length
          }
        >
          Confirm
        </Button>
        <Button disabled={isSaving} variant='secondary' onClick={() => setOpened(false)} fullWidth>
          Cancel
        </Button>
      </Stack>
    </div>
  );
};

export const DataSourceModal = () => {
  return (
    <Modal withNoHeader body={({ setOpened }) => <ModalBody setOpened={setOpened} />}>
      {({ setOpened }) => (
        <Button className='!w-40' variant='secondary' onClick={() => setOpened(true)}>
          Configure
        </Button>
      )}
    </Modal>
  );
};
