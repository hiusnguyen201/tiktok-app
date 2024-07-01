import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { SeekBarVideo } from "~/components/SeekBar";
import {
  PlayIcon,
  PauseIcon,
  ConvertMobileScreenIcon,
} from "~/components/Icons";
import AudioControl from "./AudioControl";

import styles from "./CardBottom.module.scss";
const cx = classNames.bind(styles);

function CardBottom({ data, videoRef }) {
  const [expanded, setExpanded] = useState(false);
  const [played, setPlayed] = useState(false);

  const handleToggleExpandDescription = () => {
    setExpanded(!expanded);
  };

  const handleTogglePlayVideo = () => {
    if (played) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlayed(!played);
  };

  console.log(3);

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("author")}>
        <Link to={"/@luongquynhnhu1422"}>luongquynhnhu1422</Link>
      </h3>

      {/* tach */}
      <div className={cx("multiline-text", { expanded })}>
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
      </div>

      <div className={cx("controls-bottom")}>
        <button
          onClick={handleTogglePlayVideo}
          className={cx("icon-wrapper", "togglePlay-icon-wrapper")}
        >
          {played ? <PauseIcon /> : <PlayIcon />}
        </button>

        <SeekBarVideo className={cx("seek-bar-box")} videoRef={videoRef} />

        <div className={cx("controls-right")}>
          <button className={cx("icon-wrapper")}>
            <ConvertMobileScreenIcon />
          </button>
          <AudioControl />
        </div>
      </div>
    </div>
  );
}

export default CardBottom;
