import { FiCursorClick01, FiHelpCircle, FiInfinity, FiZapFast } from '@nabiq-icons';
import { Badge, Button, Group, Modal, Stack, Tooltip } from '@nabiq-ui';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

const goals = [
  {
    title: 'Acquisition',
    headline: 'To acquire new customers either for paying, trial or freemium.',
    tooltip:
      'Select this goal to attract new customers. Focus on acquiring paying users, trial users, or freemium users, depending on your business model.',
    icon: FiZapFast,
    color: '#EE46BC',
    type: 'acquisition',
    isDisabled: true,
    badgeLabel: 'Coming soon',
  },
  {
    title: 'Activation',
    headline: 'To convert trail/freemium users to paying customers.',
    tooltip:
      'Choose this goal to convert trial or freemium users into paying customers. It’s all about getting existing users to take the next step.',
    icon: FiCursorClick01,
    color: '#2E90FA',
    type: 'activation',
    isDisabled: false,
    badgeLabel: '',
  },
  {
    title: 'Retention',
    headline: 'To push recurring subscription, cross-sell and upsell.',
    tooltip:
      'Use this goal to increase customer loyalty. Boost recurring subscriptions, encourage cross-sells, or promote upsells to maintain and grow your customer base.',
    icon: FiInfinity,
    color: '#17B26A',
    type: 'retention',
    isDisabled: false,
    badgeLabel: '',
  },
];

const ModalBody = ({ setOpened }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { resourceId: brandId, markTag } = useAppSelector((state) => state.brand);

  return (
    <Stack className='p-8' gap={64} align='center'>
      <Stack align='center' gap={8}>
        <p className='text-gray-900 text-[24px] font-semibold'>New campaign</p>
        <p className='text-gray-600 text-base font-normal'>
          Select the campaign goal that matches your objective.
        </p>
      </Stack>
      <Stack align='center'>
        <Group>
          {goals?.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <Stack
                gap={24}
                key={idx}
                className='w-[310px] p-8 border shadow-sm border-gray-200 rounded-xl'
              >
                <Group justify={goal.badgeLabel ? 'space-between' : 'end'}>
                  {goal.badgeLabel ? <Badge color='warning'>{goal.badgeLabel}</Badge> : <></>}
                  <Tooltip text={goal.tooltip}>
                    <FiHelpCircle color='#9AA4B2' size={20} style={{ cursor: 'pointer' }} />
                  </Tooltip>
                </Group>
                <Stack align='center'>
                  <Icon size={32} color={goal.color} />
                  <p className='text-gray-900 font-semibold text-lg'>{goal.title}</p>
                </Stack>
                <p className='text-gray-600 font-normal text-sm text-center'>{goal.headline}</p>
                <Button
                  onClick={() => {
                    if (goal.isDisabled) return;

                    dispatch(
                      setCampaign({
                        brandId,
                        tagId: markTag?.resourceId,
                        goal: goal.type as 'acquisition' | 'retention' | 'activation',
                      }),
                    );

                    navigate('/campaigns/campaign-configuration');
                    setOpened(false);
                  }}
                  disabled={goal.isDisabled}
                  fullWidth
                >
                  Create
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
