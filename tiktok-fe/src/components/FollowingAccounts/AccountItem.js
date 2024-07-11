import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Image from "~/components/Image";
import { CircleCheckIconSolid } from "~/components/Icons";

import fakeUser from "~/fakeUser";
import styles from "./FollowingAccounts.module.scss";
import EllipsisText from "~/components/EllipsisText";
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
          <EllipsisText className={cx("nickname")}>
            {fakeUser.nickname}
          </EllipsisText>
          {fakeUser.tick && (
            <CircleCheckIconSolid className={cx("check-icon")} />
          )}
        </h4>
        <EllipsisText className={cx("username")}>
          {fakeUser.username}
        </EllipsisText>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default AccountItem;
