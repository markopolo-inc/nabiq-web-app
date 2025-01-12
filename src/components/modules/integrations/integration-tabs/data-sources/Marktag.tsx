import { FiCommand } from '@nabiq-icons';
import { Badge, Button, useGetColors } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { IntegrationCard } from 'src/components/modules/integrations/components';
import { useAppSelector } from 'src/store/hooks';

type ConnectMarktagPropsTypes = {
  onShowMarktag: () => void;
};

export const Marktag = ({ onShowMarktag }: ConnectMarktagPropsTypes) => {
  const { t } = useTranslation();
  const { markTag } = useAppSelector((state) => state.brand);
  const { primary500 } = useGetColors();
  return (
    <IntegrationCard
      description={t('integrations.datasource.tracking_desc')}
      icon={<FiCommand size={32} color={primary500} fill={primary500} />}
      title='Marktag'
      isConnected={!!markTag}
      badge={
        markTag && (
          <div className='flex items-center gap-3'>
            <Badge color='gray'>{markTag?.domain}</Badge>
            <Badge color='gray'>{markTag?.hostname}</Badge>
          </div>
        )
      }
    >
      <div className='flex gap-8'>
        {markTag ? (
          <Button variant='secondary' onClick={onShowMarktag} className='!w-36'>
            Reconfigure
          </Button>
        ) : (
          <>
            <Button onClick={onShowMarktag} className='!w-36'>
              {t('home_page.common_connect')}
            </Button>
            <Button
              onClick={() =>
                window.open('https://www.markopolo.ai/products/marktag/marktag', '_blank')
              }
              variant='link'
            >
              Learn more
            </Button>
          </>
        )}
      </div>
    </IntegrationCard>
  );
};
