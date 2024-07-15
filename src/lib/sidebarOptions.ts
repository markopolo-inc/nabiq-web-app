import {
  // FiDataFlow02,
  FiAnnouncement01,
  FiHomeLine,
  FiPuzzlePiece02,
} from "@nabiq-icons";

export const sidebarOptions = [
  {
    title: "Home",
    Icon: FiHomeLine,
    to: "/",
    menuRegex: new RegExp(/^\/$/, "i"),
  },
  // {
  //   title: "Co-Pilot",
  //   Icon: FiDataFlow02,
  //   to: "/co-pilot",
  //   menuRegex: new RegExp(/^\/co-pilot/, "i"),
  // },
  {
    title: "Campaigns",
    Icon: FiAnnouncement01,
    to: "/campaigns",
    menuRegex: new RegExp(/^\/campaigns/, "i"),
  },
  {
    title: "Integrations",
    Icon: FiPuzzlePiece02,
    to: "/integrations",
    menuRegex: new RegExp(/^\/integrations/, "i"),
  },
];
