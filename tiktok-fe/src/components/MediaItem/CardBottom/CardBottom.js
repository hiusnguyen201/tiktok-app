import PropTypes from "prop-types";
import { useState, memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import ControlsBottom from "./ControlsBottom";

import styles from "./CardBottom.module.scss";
const cx = classNames.bind(styles);

function CardBottom({ data }) {
  // const [expanded, setExpanded] = useState(false);
  // const [played, setPlayed] = useState(false);

  // const handleToggleExpandDescription = () => {
  //   setExpanded(!expanded);
  // };

  //   setPlayed(!played);
  // };

  return (
    <div className={cx("wrapper")}>
      {/* <h3 className={cx("author")}>
        <Link to={"/@luongquynhnhu1422"}>luongquynhnhu1422</Link>
      </h3> */}

      {/* tach */}
      {/* <div className={cx("multiline-text", { expanded })}>
        <p className={cx("description")}>
          <span>
            Mày sai voi xa hoi , bo me may bao ve may Nhung may sai voi chi em
            tao , may mat het ! Cho TNT lên trend thôi nào 😉
          </span>
          <Link className={cx("tag")} to={"/@Lương Quỳnh Như"}>
            @Lương Quỳnh Như
          </Link>
          <span className={cx("span-text")}></span>
          <Link className={cx("tag")} to={"/tag/xuhuong"}>
            #xuhuong
          </Link>
          <span className={cx("span-text")}></span>
          <Link className={cx("tag")} to={"/tag/fyb"}>
            #fyb
          </Link>
          <span className={cx("span-text")}></span>
        </p>

        <button
          onClick={handleToggleExpandDescription}
          className={cx("more-btn")}
        >
          {expanded ? "less" : "more"}
        </button>
      </div> */}

      <ControlsBottom />
    </div>
  );
}

// CardBottom.propTypes = {
//   videoRef: PropTypes.object,
//   data: PropTypes.object,
// };

export default memo(CardBottom);
