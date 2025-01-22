import {
  FiAnnouncement01,
  FiCursorClick01,
  FiInfinity,
  FiSalla,
  FiShopify,
  FiWhatsApp,
  FiZapFast,
} from '@nabiq-icons';

export const goals = [
  {
    title: 'create_campaign.goal_acquisition',
    headline: 'create_campaign.goal_acquisition_desc',
    tooltip: 'create_campaign.attract_new_customers',
    icon: FiZapFast,
    color: '#EE46BC',
    type: 'acquisition',
    isDisabled: false,
    badgeLabel: '',
  },
  {
    title: 'create_campaign.goal_activation',
    headline: 'create_campaign.goal_activation_desc',
    tooltip: 'create_campaign.convert_users',
    icon: FiCursorClick01,
    color: '#2E90FA',
    type: 'activation',
    isDisabled: false,
    badgeLabel: '',
  },
  {
    title: 'create_campaign.goal_retention',
    headline: 'create_campaign.goal_retention_desc',
    tooltip: 'create_campaign.increase_loyalty',
    icon: FiInfinity,
    color: '#17B26A',
    type: 'retention',
    isDisabled: false,
    badgeLabel: '',
  },
];

export const mediums = [
  {
    title: 'create_campaign.whatsapp',
    description: 'create_campaign.whatsapp_desc',
    icon: FiWhatsApp,
    isRecommended: true,
    color: '#387AF6',
    type: 'whatsapp',
  },
  {
    title: 'home_page.email_sms',
    description: 'create_campaign.one_way_desc',
    icon: FiAnnouncement01,
    isRecommended: false,
    color: '#387AF6',
    type: 'email-sms',
  },
];

export const emailSmsCampaignSteps = [
  {
    label: 'create_campaign_form.details_title',
    description: 'create_campaign_form.create_campaign_form',
  },
  {
    label: 'create_campaign_form.timing_title',
    description: 'create_campaign_form.timing_desc',
  },
  {
    label: 'create_campaign.channels',
    description: 'create_campaign.choose_channels',
  },
];

export const whatsappCampaignSteps = [
  {
    label: 'create_campaign.connection',
    description: 'create_campaign_whatsapp.sync_products',
  },
  {
    label: 'Creation',
    description: 'create_campaign_whatsapp.set_priorities',
  },
  {
    label: 'Completion',
    description: 'create_campaign_whatsapp.captain_working',
  },
];

export const productSources = [
  {
    title: 'integrations.shopify',
    platform: 'shopify',
    headline: 'create_campaign.connect_shopify',
    icon: FiShopify,
  },
  {
    title: 'integrations.salla',
    platform: 'salla',
    headline: 'create_campaign.connect_salla',
    icon: FiSalla,
  },
];

export const waCampaignTemplates = [
  {
    title: 'create_campaign.new_visitor',
    template: 'create_campaign.greet_new_visitor',
  },
  {
    title: 'create_campaign.casual_conversational',
    template: 'create_campaign.curiosity_driven',
  },
  {
    title: 'create_campaign.friendly_curiosity',
    template: 'create_campaign.first_time_visitor',
  },
  {
    title: 'create_campaign.warm_appreciative',
    template: 'create_campaign.acknowledge_return',
  },
  {
    title: 'create_campaign.curious_supportive',
    template: 'create_campaign.engage_return_visitor',
  },
  {
    title: 'create_campaign.playful_encouraging',
    template: 'create_campaign.interact_return_visitor',
  },
  {
    title: 'create_campaign.helpful_insightful',
    template: 'create_campaign.acknowledge_exploration',
  },
  {
    title: 'create_campaign.empathetic_respectful',
    template: 'create_campaign.engage_careful_evaluator',
  },
  {
    title: 'create_campaign.assertive_motivating',
    template: 'create_campaign.interact_intent_visitor',
  },
  {
    title: 'create_campaign.informative_enthusiastic',
    template: 'create_campaign.engage_interested_user',
  },
  {
    title: 'create_campaign.empathetic_reassuring',
    template: 'create_campaign.interact_product_evaluator',
  },
  {
    title: 'create_campaign.assertive_action_oriented',
    template: 'create_campaign.engage_interested_visitor',
  },
  {
    title: 'create_campaign.informative_encouraging',
    template: 'create_campaign.interact_repeated_visitor',
  },
  {
    title: 'create_campaign.empathetic_solution_oriented',
    template: 'create_campaign.engage_repeated_interest',
  },
  {
    title: 'create_campaign.friendly_reassuring',
    template: 'create_campaign.engage_purchase_intent',
  },
  {
    title: 'create_campaign.motivational_urgent',
    template: 'create_campaign.reengage_user',
  },
  {
    title: 'create_campaign.value_oriented_supportive',
    template: 'create_campaign.purchase_intent',
  },
  {
    title: 'create_campaign.warm_inviting',
    template: 'create_campaign.inactive_user',
  },
  {
    title: 'create_campaign.informative_curious',
    template: 'create_campaign.highlight_updates',
  },
  {
    title: 'create_campaign.incentive_driven_actionable',
    template: 'create_campaign.exclusive_incentive',
  },
  {
    title: 'create_campaign.reflective_nostalgic',
    template: 'create_campaign.past_engagements',
  },
  {
    title: 'create_campaign.clear_encouraging',
    template: 'create_campaign.email_form_nudge',
  },
  {
    title: 'create_campaign.informative_motivational',
    template: 'create_campaign.reconnect_interest',
  },
  {
    title: 'create_campaign.personalized_enticing',
    template: 'create_campaign.exclusive_invitation',
  },
  {
    title: 'create_campaign.supportive_reassuring',
    template: 'create_campaign.offer_help',
  },
  {
    title: 'create_campaign.friendly_encouraging',
    template: 'create_campaign.signup_process',
  },
  {
    title: 'create_campaign.value_oriented_motivational',
    template: 'create_campaign.address_hesitation',
  },
  {
    title: 'create_campaign.supportive_empathetic',
    template: 'create_campaign.offer_assistance',
  },
  {
    title: 'create_campaign.enticing_inviting',
    template: 'create_campaign.make_user_feel_special',
  },
  {
    title: 'create_campaign.friendly_curious',
    template: 'create_campaign.abandoned_cart',
  },
  {
    title: 'create_campaign.incentivizing_persuasive',
    template: 'create_campaign.highlight_offers',
  },
  {
    title: 'create_campaign.fomo_urgency',
    template: 'create_campaign.create_urgency',
  },
  {
    title: 'create_campaign.supportive_empathetic',
    template: 'create_campaign.offer_assistance_cart',
  },
  {
    title: 'create_campaign.value_oriented_motivational',
    template: 'create_campaign.remind_value',
  },
  {
    title: 'create_campaign.warm_appreciative',
    template: 'create_campaign.acknowledge_first_purchase',
  },
  {
    title: 'create_campaign.exclusive_persuasive',
    template: 'create_campaign.personalized_discount',
  },
  {
    title: 'create_campaign.personalized_value_driven',
    template: 'create_campaign.suggest_complementary_products',
  },
  {
    title: 'create_campaign.social_community_oriented',
    template: 'create_campaign.inspire_loyalty',
  },
  {
    title: 'create_campaign.curious_explorative',
    template: 'create_campaign.spark_curiosity',
  },
  {
    title: 'create_campaign.warm_appreciative',
    template: 'create_campaign.warm_grateful',
  },
  {
    title: 'create_campaign.rewarding_vip',
    template: 'create_campaign.offer_special_perks',
  },
  {
    title: 'create_campaign.personalized_thoughtful',
    template: 'create_campaign.suggest_recommendations',
  },
  {
    title: 'create_campaign.celebratory_engaging',
    template: 'create_campaign.acknowledge_milestone',
  },
  {
    title: 'create_campaign.social_inclusive',
    template: 'create_campaign.foster_community_engagement',
  },
  {
    title: 'create_campaign.exciting_future_focused',
    template: 'create_campaign.invite_future_engagement',
  },
];
