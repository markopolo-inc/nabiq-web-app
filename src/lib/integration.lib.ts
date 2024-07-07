import {
  FiNotificationMessage,
  FiMail01,
  FiMessageDotCircle,
} from "@nabiq-icons";

export const appCategories = [
  {
    key: "email",
    title: "Email apps",
    Icon: FiMail01,
  },
  {
    key: "sms",
    title: "SMS apps",
    Icon: FiMessageDotCircle,
  },
  {
    key: "push",
    title: "Push notification apps",
    Icon: FiNotificationMessage,
  },
];

export const appOptions = [
  {
    category: "email",
    name: "Klaviyo",
    headline:
      "Enhance your e-commerce marketing with data-driven email automation.",
    key: "klaviyo",
    learnMoreLink: "",
    isApiKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "Hubspot",
    headline:
      "Increase sales with personalized email campaigns designed for online retailers.",
    key: "hubspot",
    learnMoreLink: "",
    isApiKeyIntegration: false,
    isOauthIntegration: true,
  },
  {
    category: "email",
    name: "Postmark",
    headline:
      "Increase sales with personalized email campaigns designed for online retailers.",
    key: "postmark",
    learnMoreLink: "",
    isApiKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Twilio",
    headline:
      "Enhance customer engagement with flexible and powerful communication APIs for messaging, voice, and video.",
    key: "twilio",
    learnMoreLink: "",
    isApiKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Sinch",
    headline:
      "Boost your customer interactions with scalable and reliable messaging, voice, and video communication solutions.",
    key: "sinch",
    learnMoreLink: "",
    isApiKeyIntegration: true,
    isOauthIntegration: false,
  },
];
