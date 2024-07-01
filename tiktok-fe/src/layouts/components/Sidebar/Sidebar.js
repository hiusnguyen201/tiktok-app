import classNames from "classnames/bind";

import config from "~/config";
import {
  HomeIconRegular,
  HomeIconSolid,
  UserArrowLeftIconRegular,
  UserArrowLeftIconSolid,
  UserGroupIconRegular,
  UserGroupIconSolid,
  CompassIconRegular,
  CompassIconSolid,
  LiveIconRegular,
  LiveIconSolid,
  UserIconRegular,
} from "~/components/Icons";
import Menu, { MenuItem } from "./Menu";
import Image from "~/components/Image";
import FollowingAccounts from "~/components/FollowingAccounts";
import constantLink from "./constantLink";
import LinkItem from "./LinkItem";
import images from "~/assets/images";

import fakeUser from "~/fakeUser";

import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("aside-wrapper")}>
      {/* Item 1 */}
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          leftIcon={<HomeIconRegular />}
          leftIconActive={<HomeIconSolid />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          leftIcon={<UserArrowLeftIconRegular className={cx("smallIcon")} />}
          leftIconActive={
            <UserArrowLeftIconSolid className={cx("smallIcon")} />
          }
        />
        <MenuItem
          title="Friends"
          to={config.routes.friends}
          leftIcon={<UserGroupIconRegular />}
          leftIconActive={<UserGroupIconSolid />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          leftIcon={<CompassIconRegular />}
          leftIconActive={<CompassIconSolid />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          leftIcon={<LiveIconRegular />}
          leftIconActive={<LiveIconSolid />}
        />
        <MenuItem
          title="Profile"
          to={config.routes.profile.slice(
            0,
            config.routes.profile.indexOf("@") + 1
          )}
          leftIcon={
            fakeUser ? (
              <Image
                className={cx("avatar-img")}
                src={fakeUser.avatar}
                alt={fakeUser.full_name}
              />
            ) : (
              <UserIconRegular
                className={cx("smallIcon")}
                width="3.2rem"
                height="3.2rem"
              />
            )
          }
          leftIconActive={
            <Image src={fakeUser.avatar} alt={fakeUser.full_name} />
          }
        />
      </Menu>

      {/* Item 2 */}
      <FollowingAccounts label="Following accounts" />

      {/* Item 3 */}
      <footer className={cx("footer-wrapper")}>
        <a
          href="/effecthouse"
          target="_blank"
          className={cx("effecthouse-btn")}
        >
          <img
            className={cx("effecthouse-img")}
            src={images.effectHouse}
            alt="Create TikTok effects, get a reward"
          />
          <h4 className={cx("effecthouse-title")}>
            Create TikTok effects, get a reward
          </h4>
        </a>

        {constantLink.map((item, index) => (
          <LinkItem key={index} data={item} />
        ))}

        <p className={cx("copyright")}>© 2024 TikTok</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
