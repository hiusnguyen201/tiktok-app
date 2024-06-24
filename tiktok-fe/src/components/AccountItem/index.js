import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { CheckedIcon } from "~/components/Icons";
import Image from "~/components/Image";

import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar-img")}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={cx("info-box")}>
        <h4 className={cx("username")}>
          <span>{data.nickname}</span>
          {data.tick && <CheckedIcon />}
        </h4>
        <p className={cx("name")}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
