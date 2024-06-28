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
import Search from "~/layouts/components/Search";
import images from "~/assets/images";
import config from "~/config";

import fakeUser from "~/fakeUser";

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
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        {/* Item 2 */}
        <Search />

        {/* Item 3 */}
        <div className={cx("actions-box")}>
          {fakeUser ? (
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
            items={fakeUser ? USER_MENU : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {fakeUser ? (
              <Image
                src={fakeUser.avatar}
                className={cx("user-avatar")}
                alt={fakeUser.full_name}
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
