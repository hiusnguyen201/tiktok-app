import {
  UserIconRegular,
  FavoriteIcon,
  CoinIcon,
  LiveStudioIcon,
  LiveCreatorIcon,
  SettingIcon,
  LanguageIcon,
  QuestionIcon,
  KeyboardIcon,
  DarkIcon,
  LogoutIcon,
} from "~/components/Icons";

export const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      level: 2,
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "ar",
          title: "العربية",
        },
        {
          type: "language",
          code: "en",
          title: "বাঙ্গালি (ভারত)",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <QuestionIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Keyboard shorcuts",
  },
  {
    icon: <DarkIcon />,
    title: "Dark mode",
  },
];

export const USER_MENU = [
  {
    icon: <UserIconRegular />,
    title: "View Profile",
    to: "/@user",
  },
  {
    icon: <FavoriteIcon />,
    title: "Favorites",
    to: "/@user",
  },
  {
    icon: <CoinIcon />,
    title: "Get Coins",
    to: "/coin",
  },
  {
    icon: <LiveStudioIcon />,
    title: "LIVE Studio",
    to: "/studio",
  },
  {
    icon: <LiveCreatorIcon />,
    title: "LIVE Creator Hub",
    to: "/creator",
  },
  {
    icon: <SettingIcon />,
    title: "Settings",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];
