import { Children, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCircleNotch,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faPlus,
  faCoins,
  faGear,
  faMicrophone,
  faMoon,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
  faCircleQuestion,
  faBell,
  faUser,
  faBookmark,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper, Menu } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import images from "~/assets/images";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles); // Support specified object ( .asd-asda )

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
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
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shorcuts",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Dark mode",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@user",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Favorites",
      to: "/@user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get Coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faMicrophone} />,
      title: "LIVE Studio",
      to: "/studio",
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "LIVE Creator Hub",
      to: "/creator",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("header")}>
      <div className={cx("header-wrapper")}>
        {/* Item 1 */}
        <div className={cx("logo-box")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Item 2 */}
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result-box")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search-box")}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon
              className={cx("loading-icon")}
              icon={faCircleNotch}
            />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon
                className={cx("search-icon")}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
        </HeadlessTippy>

        {/* Item 3 */}
        <div className={cx("actions-box")}>
          {currentUser ? (
            <>
              <Button
                primary
                outline
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Upload
              </Button>

              <div className={cx("actions-box-right")}>
                <Tippy deplay={[0, 200]} content="Messages" placement="bottom">
                  <button className={cx("action-btn")}>
                    <FontAwesomeIcon icon={faMessage} />
                  </button>
                </Tippy>
                <Tippy deplay={[0, 200]} content="Inbox" placement="bottom">
                  <button className={cx("action-btn")}>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/68c697b7a2697fb898ac15c1374ad28b.jpeg?lk3s=a5d48078&nonce=66442&refresh_token=9a0c5c6e35d139823ef1bbea588da1a3&x-expires=1719212400&x-signature=Wxhz2xJV%2BXjIKoTVbRhdWVKdVDQ%3D&shp=a5d48078&shcp=b59d6b55"
                className={cx("user-avatar")}
                alt="user"
              />
            ) : (
              <button className={cx("more-action-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
