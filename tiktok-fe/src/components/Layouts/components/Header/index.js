import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import {
  MessageIcon,
  InboxIcon,
  SeeMoreIcon,
  CloseIcon,
  LoadingIcon,
  SearchIcon,
  PlusIcon,
} from "~/components/Icons";
import { MENU_ITEMS, USER_MENU } from "./ConstantMenu";

import { Wrapper as PopperWrapper, Menu } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Image from "~/components/Image";

import images from "~/assets/images";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles); // Support specified object ( .asd-asda )

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
              <CloseIcon />
            </button>
            <span className={cx("loading-icon")}>
              <LoadingIcon />
            </span>
            <button className={cx("search-btn")}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        {/* Item 3 */}
        <div className={cx("actions-box")}>
          {currentUser ? (
            <>
              <Button
                className={cx("upload-btn")}
                primary
                outline
                leftIcon={<PlusIcon />}
              >
                Upload
              </Button>

              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? USER_MENU : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7324513474774728705.jpeg?lk3s=a5d48078&nonce=56210&refresh_token=f702cd06050aa4ff4a4289b03e9d5885&x-expires=1719392400&x-signature=%2FA6cWB%2F%2Fp1ic0mDXyzl9GB6lzFQ%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("user-avatar")}
                alt="user avatar"
              />
            ) : (
              <button className={cx("more-action-btn")}>
                <SeeMoreIcon />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
