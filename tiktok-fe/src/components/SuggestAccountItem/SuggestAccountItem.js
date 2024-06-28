import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { CheckedIcon } from "~/components/Icons";
import Image from "~/components/Image";

import styles from "./SuggestAccountItem.module.scss";
const cx = classNames.bind(styles);

function SuggestAccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar-img")}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={cx("info-box")}>
        <h4 className={cx("title-wrapper")}>
          <span className={cx("nickname")}>{data.nickname}</span>
          {data.tick && <CheckedIcon className={cx("check-icon")} />}
        </h4>
        <p className={cx("fullname")}>{data.full_name}</p>
      </div>
    </Link>
  );
}

SuggestAccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SuggestAccountItem;
