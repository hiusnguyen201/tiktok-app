import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Image from "~/components/Image";
import { CheckedIcon } from "~/components/Icons";
import styles from "./FollowingAccounts.module.scss";
import fakeUser from "~/fakeUser";
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${fakeUser.nickname}`} className={cx("account-item")}>
      <Image
        className={cx("avatar-img")}
        src={fakeUser.avatar}
        alt={fakeUser.full_name}
      />
      <div className={cx("info-box")}>
        <h4 className={cx("title-wrapper")}>
          <span className={cx("nickname")}>{fakeUser.nickname}</span>
          {fakeUser.tick && <CheckedIcon className={cx("check-icon")} />}
        </h4>
        <p className={cx("fullname")}>{fakeUser.full_name}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default AccountItem;
