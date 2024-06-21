import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faCircleNotch,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

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
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <header className={cx("header")}>
      <div className={cx("header-wrapper")}>
        {/* Item 1 */}
        <div className={cx("logo-box")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Item 2 */}
        <Tippy
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
        </Tippy>

        {/* Item 3 */}
        <div className={cx("actions-box")}>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx("more-action-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
