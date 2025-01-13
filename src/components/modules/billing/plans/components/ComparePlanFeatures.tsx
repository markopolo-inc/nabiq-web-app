import { Stack, Table, TableBody, TableHead, TableRow, Td, Th } from '@nabiq-ui';
import { isString } from 'lodash';
import { FiCheck, FiCrossX } from 'src/components/Icons';
import { features } from 'src/lib/billing';

export const ComparePlanFeatures = () => {
  const banner = (
    <div className='p-5 px-6'>
      <p className='text-lg font-semibold text-gray-900'>Compare plan features</p>
    </div>
  );
  return (
    <div className='max-w-[864px]'>
      <Table maxHeight={100000} banner={banner} withBanner striped>
        <TableHead>
          <TableRow>
            <Th>Feature</Th>
            <Th>Pro</Th>
            <Th>Enterprise</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {features?.map((feature) => (
            <TableRow key={feature.name}>
              <Td>
                <Stack gap={4}>
                  <p className='text-sm font-medium text-gray-900'>{feature.name}</p>
                  {feature.description && (
                    <p className='text-sm text-gray-600 font-normal'>{feature.description}</p>
                  )}
                </Stack>
              </Td>
              <Td>
                {isString(feature.pro) ? (
                  feature.pro
                ) : Boolean(feature.pro) ? (
                  <FiCheck color='#079455' size={16} strokeWidth={1.67} />
                ) : (
                  <FiCrossX color='#D92D20' size={14} strokeWidth={1.67} />
                )}
              </Td>
              <Td>
                {isString(feature.enterprise) ? (
                  feature.enterprise
                ) : Boolean(feature.enterprise) ? (
                  <FiCheck color='#079455' size={16} strokeWidth={1.67} />
                ) : (
                  <FiCrossX color='#D92D20' size={14} strokeWidth={1.67} />
                )}
              </Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
