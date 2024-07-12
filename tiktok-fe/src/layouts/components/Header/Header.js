import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import IconTooltip, {
  MessageIcon,
  InboxIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from "~/components/Icons";
import { MENU_ITEMS, USER_MENU } from "./constantMenu";
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
        <div className={cx("logo-container")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        {/* Item 2 */}
        <Search />

        {/* Item 3 */}
        <div className={cx("header-right-container")}>
          {fakeUser ? (
            <>
              <Button
                className={cx("upload-btn")}
                primary2
                outline
                leftIcon={<PlusIcon />}
              >
                Upload
              </Button>

              <IconTooltip
                className={cx("message-icon-wrapper")}
                content="Messages"
              >
                <MessageIcon />
              </IconTooltip>

              <IconTooltip
                className={cx("inbox-icon-wrapper")}
                content="Inbox"
              >
                <span className={cx("badge")}>3</span>
                <InboxIcon />
              </IconTooltip>
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
                <EllipsisVerticalIcon />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
