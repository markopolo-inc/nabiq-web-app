import { Stack } from '@nabiq-ui';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CampaignGoalModal } from 'src/components/modules/campaigns';
import { ConstitutionalAIModerationModal, QuickActionsCard } from 'src/components/modules/home';
import { useQuickActions } from 'src/hooks/modules/home';
import { useGetConstitutionalAIConfigQuery } from 'src/store/constitutional-ai/constitutional-ai.api';
import { useAppSelector } from 'src/store/hooks';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

export const QuickActions: React.FC = () => {
  const { t } = useTranslation();
  const [showCampaignGoalModal, setShowCampaignGoalModal] = useState(false);
  const [showConstitutionalAIModerationModal, setShowConstitutionalAIModerationModal] =
    useState(false);
  const quickActions = useQuickActions({
    setShowCampaignGoalModal,
    setShowConstitutionalAIModerationModal,
  });

  const brand = useAppSelector((state) => state.brand);
  const { data: constitutionalAIConfig } = useGetConstitutionalAIConfigQuery({
    brandId: brand?.resourceId,
  });
  const rules = constitutionalAIConfig?.data?.rules || [];
  const isCompleted = constitutionalAIConfig?.success;

  return (
    <Stack gap={12}>
      <p className='text-gray-600 text-base font-medium'>{t('home_page.quick_actions')}</p>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 md:grid-cols-2 gap-6'
      >
        {quickActions?.map((item) => (
          <QuickActionsCard
            icon={item.icon}
            key={item.id}
            header={item.header}
            subHeader={item.subHeader}
            onClick={item.onClick}
          />
        ))}
      </motion.div>
      <CampaignGoalModal
        showModal={showCampaignGoalModal}
        setShowModal={setShowCampaignGoalModal}
      />
      <ConstitutionalAIModerationModal
        savedRules={rules}
        isCompleted={isCompleted}
        showModal={showConstitutionalAIModerationModal}
        setShowModal={setShowConstitutionalAIModerationModal}
      />
    </Stack>
  );
};
