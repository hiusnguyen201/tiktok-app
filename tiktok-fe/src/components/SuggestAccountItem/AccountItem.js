import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { CircleCheckIconSolid } from "~/components/Icons";
import Image from "~/components/Image";
import EllipsisText from "~/components/EllipsisText";
import fakeUser from "~/fakeUser";

import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
  return (
    <div className={cx("wrapper", className)}>
      <Link to={`/@${fakeUser.nickname}`} className={cx("link-item")}>
        <Image
          className={cx("avatar-img")}
          src={fakeUser.avatar}
          alt={fakeUser.username}
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

      <div className={cx("actions-box")}></div>
    </div>
  );
}

AccountItem.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default AccountItem;
