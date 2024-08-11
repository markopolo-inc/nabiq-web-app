import {
  FiNotificationMessage,
  FiMail01,
  FiMessageDotCircle,
} from "@nabiq-icons";
import type {
  GatewayInterface,
  GatewayType,
} from "src/interfaces/brand.interface";

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
    category: "email",
    name: "OneSignal",
    headline:
      "Engage your audience effectively with push notifications, emails, SMS, and in-app messages all from one platform.",
    gateway: "onesignal",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "SendGrid",
    headline:
      "Enhance your email deliverability for both transactional and marketing emails with a trusted cloud-based service.",
    gateway: "sendgrid",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "Resend",
    headline:
      "Simplify your transactional email delivery with reliable and scalable API service.",
    gateway: "resend",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "MailGun",
    headline:
      "Automate your email workflows effortlessly with robust APIs for sending, receiving, and tracking emails.",
    gateway: "mailgun",
    learnMoreLink: "",
    isKeyIntegration: true,
    isOauthIntegration: false,
  },
  {
    category: "email",
    name: "Click Send",
    headline:
      "Streamline your business communications with versatile platform for SMS, email, and direct mail.",
    gateway: "clicksend",
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

export const gatewayFields: Record<
  "email" | "sms",
  Partial<Record<GatewayType, string[]>>
> = {
  email: {
    klaviyo: ["apiKey"],
    postmark: ["apiKey"],
    mailgun: ["username", "password"],
    onesignal: ["authKey", "appId"],
    resend: ["apiKey"],
    sendgrid: ["apiKey"],
    hubspot: [],
    clicksend: ["userName", "apiKey"],
  },
  sms: {
    clicksend: ["userName", "apiKey"],
    flowroute: ["accessKey", "secretKey"],
    sinch: ["servicePlanId", "apiToken"],
    twilio: ["accountSid", "authToken"],
  },
};
