import { FiDataFlow02, FiHomeLine } from "@nabiq-icons";

export const sidebarOptions = [
  {
    title: "Home",
    Icon: FiHomeLine,
    to: "/",
    menuRegex: new RegExp(/^\/$/, "i"),
  },
  {
    title: "Co-Pilot",
    Icon: FiDataFlow02,
    to: "/co-pilot",
    menuRegex: new RegExp(/^\/co-pilot/, "i"),
  },
];
