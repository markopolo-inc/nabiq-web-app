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
    headline: 'Connect your Shopify store to upload products directly',
    icon: FiShopify,
  },
  {
    title: 'integrations.salla',
    platform: 'salla',
    headline: 'Connect your Salla store to import products easily.',
    icon: FiSalla,
  },
];

export const waCampaignTemplates = [
  {
    title: 'New/ First-Time Visitor',
    template:
      "You're interacting with a new visitor who has just landed on the website for the first time. Greet them warmly and provide a quick introduction to [Business Name]. Your goal is to make the visitor feel welcome and engaged while learning more about their interests. Based on their responses, guide the conversation towards helping them find something they'll love. If the visitor hesitates or seems unsure, offer helpful suggestions or direct them to a featured product, service, or resource.",
  },
  {
    title: 'Casual & Conversational',
    template:
      "You're speaking with a visitor checking out the website for the first time. Approach the conversation with curiosity and a bit of intrigue. Your tone should be light and exploratory, with a sense of excitement about all the possibilities they can discover. Start by asking questions that invite them to share what brought them to the website and then offer personalized suggestions to pique their interest.",
  },
  {
    title: 'Friendly & Curiosity-Driven',
    template:
      "You're speaking with a visitor who's checking out the website for the first time. Approach the conversation with curiosity and a bit of intrigue. Your tone should be light and exploratory, with a sense of excitement about all the possibilities they can discover. Start by asking questions that invite them to share what brought them to the website and then offer personalized suggestions to pique their interest.",
  },
  {
    title: 'Warm & Appreciative',
    template:
      "You're speaking with someone who has visited the site before but hasn't made a commitment yet. Start with a warm acknowledgment of their return and express appreciation. Your tone should be friendly, inviting, and slightly inquisitive, aiming to reconnect them to their interests and guide them toward conversion.",
  },
  {
    title: 'Curious & Supportive',
    template:
      "You're engaging with a visitor who has returned after showing initial interest. Your tone should be curious and supportive, aiming to uncover what brought them back. Use conversational questions to explore their needs and offer tailored suggestions based on their previous visit or browsing history.",
  },
  {
    title: 'Playful & Encouraging',
    template:
      "You're interacting with a visitor who's returned for more. The tone should be playful and encouraging, creating a sense of confidence that they're close to finding what they're looking for. Use positive language to nudge them toward exploring their options or completing an action.",
  },
  {
    title: 'Helpful & Insightful',
    template:
      "You're engaging with a visitor who has spent a notable amount of time on the site, possibly evaluating options. Acknowledge their exploration and offer to provide clarity or help them move forward. Use a tone that is helpful, insightful, and confident.",
  },
  {
    title: 'Empathetic & Respectful',
    template:
      "You're engaging with someone who is carefully evaluating their options. Acknowledge their effort and provide reassurance, while subtly encouraging them to move forward. Use a tone that is empathetic and professional.",
  },
  {
    title: 'Assertive & Motivating',
    template:
      "You're interacting with a visitor who has shown clear intent by spending significant time on key pages. Acknowledge their progress and use a motivating tone to nudge them toward action.",
  },
  {
    title: 'Informative & Enthusiastic',
    template:
      "You're engaging with someone interested in a specific product. Acknowledge their interest and provide more details to spark excitement. Use an enthusiastic, helpful tone to encourage them to take the next step.",
  },
  {
    title: 'Empathetic & Reassuring',
    template:
      "You're interacting with a visitor who is evaluating a product. Acknowledge their exploration and address any potential concerns while providing reassurance. Use a tone that is empathetic and professional.",
  },
  {
    title: 'Assertive & Action-Oriented',
    template:
      "You're engaging with a visitor who is showing interest in a product. Build excitement and urgency around moving forward with the product. Use an assertive and motivational tone.",
  },
  {
    title: 'Informative & Encouraging',
    template:
      "You're interacting with someone who is clearly interested but has not yet converted. Acknowledge their repeated visits and provide information to build confidence. Use a tone that is warm and reassuring.",
  },
  {
    title: 'Empathetic & Solution-Oriented',
    template:
      "You're engaging with a user who has shown repeated interest. Address any possible hesitation and guide them toward making a confident decision. Use a tone that is understanding and supportive.",
  },
  {
    title: 'Friendly & Reassuring',
    template:
      "You're engaging with someone who showed clear purchase intent by adding items to their cart. Remind them of their selections, and create excitement about moving forward. Use a friendly and non-pushy tone.",
  },
  {
    title: 'Motivational & Urgent',
    template:
      "You're re-engaging with a user who added items to their cart but didn't finish the purchase. Highlight urgency or exclusivity to motivate them to act now. Use an enthusiastic and compelling tone.",
  },
  {
    title: 'Value-Oriented & Supportive',
    template:
      "You're interacting with a user who showed purchase intent. Reinforce the value of their choices and provide a final nudge to close the deal. Use a tone that is supportive and focused on benefits.",
  },
  {
    title: 'Warm & Inviting',
    template:
      "You're engaging with someone who hasn't interacted in over 30 days. Reassure them they're important and create a sense of welcome. Use a warm and inviting tone.",
  },
  {
    title: 'Informative & Curious',
    template:
      "You're reaching out to a user who has been inactive for over 30 days. Highlight new updates or benefits they've missed to spark curiosity. Use an engaging and enthusiastic tone.",
  },
  {
    title: 'Incentive-Driven & Actionable',
    template:
      "You're reaching out to a user who hasn't been active in a while. Offer an exclusive incentive to motivate them to return. Use a persuasive and friendly tone.",
  },
  {
    title: 'Reflective & Nostalgic',
    template:
      "You're reaching out to a user who showed interest but hasn't interacted recently. Remind them of past engagements and highlight the value they experienced. Use a reflective and nostalgic tone.",
  },
  {
    title: 'Clear & Encouraging',
    template:
      "You're reaching out to someone who filled out an email form but didn't proceed. Gently nudge them toward the next step, such as signing up, booking a demo, or exploring more.",
  },
  {
    title: 'Informative & Motivational',
    template:
      "You're reconnecting with a user who showed interest but didn't follow through. Highlight the benefits of continuing the process. Be motivating and informative.",
  },
  {
    title: 'Personalized & Enticing',
    template:
      "You're addressing someone who took the first step but hasn't continued. Position your message as an exclusive invitation, creating a sense of urgency or privilege.",
  },
  {
    title: 'Supportive & Reassuring',
    template:
      "You're addressing someone who may be hesitant to continue. Offer to help, answer questions, or clarify their next steps. Be supportive and approachable.",
  },
  {
    title: 'Friendly & Encouraging',
    template:
      "Reconnect with users who started the sign-up process but didn't finish. Be positive and reassuring, emphasizing the simplicity and benefits of completing the process.",
  },
  {
    title: 'Value-Oriented & Motivational',
    template:
      "Address the user's hesitation by presenting compelling reasons to finish signing up. Highlight benefits or exclusive features waiting for them.",
  },
  {
    title: 'Supportive & Empathetic',
    template:
      'Reconnect with users by offering assistance and resolving doubts or concerns. Provide reassurance and show readiness to help.',
  },
  {
    title: 'Enticing & Inviting',
    template:
      'Make the user feel special and valued. Emphasize the unique opportunities or limited-time benefits available upon completing their sign-up.',
  },
  {
    title: 'Friendly & Curious',
    template:
      'Use a conversational and warm tone to engage users who abandoned their cart. Focus on curiosity and gentle nudges to bring them back.',
  },
  {
    title: 'Incentivizing & Persuasive',
    template:
      'Highlight exclusive offers or benefits to rekindle user interest in the abandoned items. Create a sense of urgency if applicable.',
  },
  {
    title: 'FOMO & Urgency',
    template:
      'Create a sense of urgency by emphasizing scarcity or time-limited availability of the items in their cart.',
  },
  {
    title: 'Supportive & Empathetic',
    template:
      'Offer assistance and resolve potential concerns that may have led to cart abandonment. Show readiness to help and simplify the process.',
  },
  {
    title: 'Value-Oriented & Motivational',
    template:
      "Remind users of the value and benefits they'll receive from the items in their cart.",
  },
  {
    title: 'Warm & Appreciative',
    template:
      'Use a friendly and welcoming tone to acknowledge their first purchase and gently nudge them toward making a second one.',
  },
  {
    title: 'Exclusive & Persuasive',
    template:
      'Entice the customer with a personalized discount or benefit, making them feel valued for their initial engagement.',
  },
  {
    title: 'Personalized & Value-Driven',
    template:
      'Leverage their past purchase to suggest complementary products or upgrades in a helpful, tailored tone.',
  },
  {
    title: 'Social & Community-Oriented',
    template:
      'Inspire loyalty and engagement by making the customer feel like part of a larger community.',
  },
  {
    title: 'Curious & Explorative',
    template:
      'Spark curiosity by suggesting new ways they can benefit from your products or services, using a tone that is exploratory and engaging.',
  },
  {
    title: 'Warm & Appreciative',
    template:
      'Use a warm and grateful tone to highlight their repeat purchases and build a deeper connection.',
  },
  {
    title: 'Rewarding & VIP',
    template: 'Create a sense of exclusivity and offer special perks to encourage further loyalty.',
  },
  {
    title: 'Personalized & Thoughtful',
    template:
      'Leverage past purchases to suggest personalized recommendations or upgrades in a thoughtful tone.',
  },
  {
    title: 'Celebratory & Engaging',
    template: 'Use a celebratory tone to acknowledge a milestone in their journey with your brand.',
  },
  {
    title: 'Social & Inclusive',
    template: 'Foster community engagement and encourage brand advocacy in a fun, inclusive tone.',
  },
  {
    title: 'Exciting & Future-Focused',
    template:
      'Use an exciting and forward-looking tone to invite them to continue engaging with your brand.',
  },
];
