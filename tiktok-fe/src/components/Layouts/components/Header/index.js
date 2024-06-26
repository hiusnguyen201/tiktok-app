import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import {
  MessageIcon,
  InboxIcon,
  SeeMoreIcon,
  PlusIcon,
} from "~/components/Icons";
import { MENU_ITEMS, USER_MENU } from "./ConstantMenu";
import { Menu } from "~/components/Popper";
import Button from "~/components/Button";
import Image from "~/components/Image";
import Search from "~/components/Layouts/components/Search";
import images from "~/assets/images";
import routesConfig from "~/config/routes";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles); // Support specified object ( .asd-asda )

function Header() {
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
        <Link to={routesConfig.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        {/* Item 2 */}
        <Search />

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
                  <span className={cx("badge")}>3</span>
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
