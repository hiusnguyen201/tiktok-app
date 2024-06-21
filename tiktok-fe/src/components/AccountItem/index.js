import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar-img")}
        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
        alt="Van A"
      />
      <div className={cx("info-box")}>
        <h4 className={cx("username")}>
          hatieuplay
          <span>
            <FontAwesomeIcon
              className={cx("check-icon")}
              icon={faCircleCheck}
            />
          </span>
        </h4>
        <p className={cx("name")}>Hat Tieu Play</p>
      </div>
    </div>
  );
}

export default AccountItem;
