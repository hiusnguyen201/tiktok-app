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

import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For you"
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
            <UserIconRegular
              className={cx("smallIcon")}
              width="3.2rem"
              height="3.2rem"
            />
          }
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
