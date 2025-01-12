import { FiHelpCircle } from '@nabiq-icons';
import { Badge, Button, Group, Modal, Stack, Tooltip } from '@nabiq-ui';
import cn from 'classnames';
import moment from 'moment-timezone';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TCampaignGoal } from 'src/interfaces/modules/campaign';
import { goals, mediums } from 'src/lib/campaign.lib';
import { useAppSelector, useCampaignDispatch } from 'src/store/hooks';

const title = {
  goal: 'New campaign',
  medium: 'Select medium of campaign',
};

const subtitle = {
  goal: 'create_campaign.goal_selection_prompt',
  medium: 'create_campaign.medium_selection_prompt',
};

const ModalBody = ({ setOpened }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resourceId: brandId, markTag } = useAppSelector((state) => state.brand);
  const dispatchCampaign = useCampaignDispatch();
  const [step, setStep] = useState<'goal' | 'medium'>('goal');
  const [selectedGoal, setSelectedGoal] = useState<TCampaignGoal | null>(null);

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>{title[step]}</p>
        <p className='text-gray-600 text-base font-normal'>{t(subtitle[step])}</p>
      </Stack>
      <Stack align='center' justify='center'>
        <Group align='center' justify='center'>
          {step === 'goal' &&
            goals?.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <Stack
                  gap={24}
                  key={idx}
                  className='w-[310px] p-6 border shadow-sm border-gray-200 rounded-xl'
                >
                  <Group justify={goal.badgeLabel ? 'space-between' : 'end'}>
                    {goal.badgeLabel ? <Badge color='warning'>{t(goal.badgeLabel)}</Badge> : <></>}
                    <Tooltip label={goal.tooltip} multiline maw={300} zIndex={9999}>
                      <FiHelpCircle color='#9AA4B2' size={20} style={{ cursor: 'pointer' }} />
                    </Tooltip>
                  </Group>
                  <Stack align='center'>
                    <Icon size={32} color={goal.color} />
                    <p className='text-gray-900 font-semibold text-lg'>{t(goal.title)}</p>
                  </Stack>
                  <p className='text-gray-600 font-normal text-sm text-center'>
                    {t(goal.headline)}
                  </p>
                  <Button
                    onClick={() => {
                      if (goal.isDisabled) return;

                      setSelectedGoal(goal.type as TCampaignGoal);

                      setStep('medium');
                    }}
                    disabled={goal.isDisabled}
                    fullWidth
                  >
                    Create
                  </Button>
                </Stack>
              );
            })}

          {step === 'medium' &&
            mediums?.map((medium, idx) => {
              const Icon = medium.icon;

              return (
                <Stack
                  gap={24}
                  key={idx}
                  className='w-[310px] p-6 border shadow-sm border-gray-200 rounded-xl'
                >
                  <Group
                    justify='end'
                    className={cn(medium.isRecommended ? 'opacity-100' : 'opacity-0')}
                  >
                    <Badge color='success'>Recommended</Badge>
                  </Group>
                  <Stack align='center'>
                    <Icon size={32} color={medium.color} />
                    <p className='text-gray-900 font-semibold text-lg'>{t(medium.title)}</p>
                  </Stack>
                  <Stack align='center' className='text-center'>
                    <p className='text-gray-600 font-normal text-sm w-56 text-center'>
                      {t(medium.description)}
                    </p>
                  </Stack>

                  <Button
                    fullWidth
                    onClick={() => {
                      dispatchCampaign({
                        brandId,
                        tagId: markTag?.resourceId,
                        goal: selectedGoal,
                        name: `Untitled Campaign-${moment().format('DD-MM-YYYY')}`,
                      });

                      navigate(
                        `/campaigns/create-campaign?campaign-mode=${medium.type}&goal=${selectedGoal}`,
                      );
                      setOpened(false);
                    }}
                  >
                    Select
                  </Button>
                </Stack>
              );
            })}
        </Group>
      </Stack>
    </Stack>
  );
};

export const CampaignGoalModal: React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal
      zIndex={999}
      size='fit-content'
      withCustomClose
      toggleFromOutside={showModal}
      setToggleFromOutside={setShowModal}
      body={({ setOpened }) => <ModalBody setOpened={setOpened} />}
    >
      {() => <></>}
    </Modal>
  );
};
