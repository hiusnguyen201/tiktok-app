import PropTypes from "prop-types";
import { useRef } from "react";
import classNames from "classnames/bind";

import videos from "~/assets/videos";

import CardTop from "./CardTop";
import CardBottom from "./CardBottom";

import styles from "./MediaItem.module.scss";
const cx = classNames.bind(styles);

function MediaItem({ data }) {
  const videoRef = useRef();

  const handleEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  console.log(1);

  return (
    <div className={cx("item-container")}>
      <div className={cx("media-wrapper")}>
        <CardTop className={cx("card-top")} />

        <video onEnded={handleEnded} ref={videoRef} src={videos.vid} />

        <CardBottom videoRef={videoRef} />
      </div>

      <div className={cx("actions-wrapper")}>actions</div>
    </div>
  );
}

export default MediaItem;
