import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FollowingAccounts.module.scss";
import AccountItem from "./AccountItem";
const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("label")}>{label}</h3>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <button className={cx("more-btn")}>See more</button>
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
