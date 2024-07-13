import PropTypes from "prop-types";
import { memo, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./VideoControl.module.scss";
const cx = classNames.bind(styles);

function VideoControl({ data, className }) {
  const { isPlaying, video } = data;
  const [dragging, setDragging] = useState(false);
  const seekBarCurrentRef = useRef();
  const seekBarProgressRef = useRef();

  const handleMouseDown = () => {
    video.pause();
    setDragging(true);
  };

  const handleMouseUp = () => {
    if (isPlaying) video.play();
    setDragging(false);
  };

  const handleChangeCurrentTime = (e) => {
    if (!dragging && e.type !== "click") return;

    const seekBarProgress = seekBarProgressRef.current;

    let diffWidthPercent =
      (e.clientX - seekBarProgress.getBoundingClientRect().left) /
      seekBarProgress.offsetWidth;

    if (diffWidthPercent < 0) {
      diffWidthPercent = 0;
    } else if (diffWidthPercent > 1) {
      diffWidthPercent = 1;
    }

    seekBarCurrentRef.current.style.width = diffWidthPercent * 100 + "%";
    video.currentTime = video.duration * diffWidthPercent;
  };

  useEffect(() => {
    const updateSeekBarCurrent = () => {
      const diffDuration = (video.currentTime / video.duration) * 100;
      seekBarCurrentRef.current.style.width = diffDuration + "%";
    };

    video.addEventListener("timeupdate", updateSeekBarCurrent);

    return () => {
      video.removeEventListener("timeupdate", updateSeekBarCurrent);
    };
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleChangeCurrentTime);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "pointer";
    }

    return () => {
      window.removeEventListener("mousemove", handleChangeCurrentTime);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, [dragging]);

  return (
    <div className={cx("wrapper", className)}>
      <div className={cx("video-control-container")}>
        <div
          ref={seekBarCurrentRef}
          className={cx("video-control-current")}
        >
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleChangeCurrentTime}
            className={cx("video-control-circle")}
          ></div>
        </div>
        <div
          ref={seekBarProgressRef}
          onClick={handleChangeCurrentTime}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleChangeCurrentTime}
          className={cx("video-control-progress")}
        ></div>
      </div>
    </div>
  );
}

VideoControl.propTypes = {
  className: PropTypes.string,
};

export default memo(VideoControl);
