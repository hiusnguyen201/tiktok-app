import PropTypes from "prop-types";
import classNames from "classnames/bind";

import images from "~/assets/images";
import fakeUsers from "~/fakeUser";
import AccountItem from "./AccountItem";
import styles from "./FollowingAccounts.module.scss";
const cx = classNames.bind(styles);

const followingAccounts = [
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
  {
    avatar: fakeUsers.avatar,
    username: fakeUsers.username,
    nickname: fakeUsers.nickname,
  },
];

function FollowingAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("label")}>{label}</h3>

      {followingAccounts.length > 0 &&
        followingAccounts.map((item, index) => (
          <AccountItem key={index} data={item} />
        ))}

      <button className={cx("more-btn")}>See more</button>
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
