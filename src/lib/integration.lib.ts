import {
  FiNotificationMessage,
  FiMail01,
  FiMessageDotCircle,
} from "@nabiq-icons";
import type { GatewayInterface } from "src/interfaces/brand.interface";

export const appCategories = [
  {
    value: "email",
    label: "Email apps",
    icon: FiMail01,
  },
  {
    value: "sms",
    label: "SMS apps",
    icon: FiMessageDotCircle,
  },
  {
    value: "push",
    label: "Push notification apps",
    icon: FiNotificationMessage,
  },
];

export const appOptions: GatewayInterface[] = [
  {
    category: "email",
    name: "Klaviyo",
    headline:
      "Enhance your e-commerce marketing with data-driven email automation.",
    gateway: "klaviyo",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "Hubspot",
    headline:
      "Increase sales with personalized email campaigns designed for online retailers.",
    gateway: "hubspot",
    learnMoreLink: "",
    isKeyIntegration: false,
    isOauthIntegration: true,
  },
  {
    category: "email",
    name: "Postmark",
    headline:
      "Increase sales with personalized email campaigns designed for online retailers.",
    gateway: "postmark",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Twilio",
    headline:
      "Enhance customer engagement with flexible and powerful communication APIs for messaging, voice, and video.",
    gateway: "twilio",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Sinch",
    headline:
      "Boost your customer interactions with scalable and reliable messaging, voice, and video communication solutions.",
    gateway: "sinch",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Flow Route",
    headline:
      "Simplify your communication infrastructure with robust SIP trunking and messaging solutions.",
    gateway: "flowroute",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "sms",
    name: "Click Send",
    headline:
      "Streamline your business communications with versatile platform for SMS, email, and direct mail.",
    gateway: "clicksend",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
];
