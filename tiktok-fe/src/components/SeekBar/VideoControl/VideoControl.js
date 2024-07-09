import PropTypes from "prop-types";
import { memo, useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./VideoControl.module.scss";
const cx = classNames.bind(styles);

function VideoControl({ video, className }) {
  const [dragging, setDragging] = useState(false);
  const seekBarCurrentRef = useRef();
  const seekBarProgressRef = useRef();

  const handleMouseDown = () => {
    video.pause();
    setDragging(true);
  };

  const handleMouseUp = () => {
    video.play();
    setDragging(false);
  };

  const handleChangeCurrentTime = (e) => {
    if (!dragging && e.type !== "click") return;

    const progressWidth = seekBarProgressRef.current.offsetWidth;
    let currentWidth =
      e.clientX - seekBarProgressRef.current.getBoundingClientRect().left;

    if (currentWidth < 0) {
      currentWidth = 0;
    } else if (currentWidth > progressWidth) {
      currentWidth = progressWidth;
    }

    seekBarCurrentRef.current.style.width = currentWidth + "px";
    video.currentTime = video.duration * (currentWidth / progressWidth);
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
      <div className={cx("seek-bar-container")}>
        <div ref={seekBarCurrentRef} className={cx("seek-bar-current")}>
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleChangeCurrentTime}
            className={cx("seek-bar-circle")}
          ></div>
        </div>
        <div
          ref={seekBarProgressRef}
          onClick={handleChangeCurrentTime}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleChangeCurrentTime}
          className={cx("seek-bar-progress")}
        ></div>
      </div>
    </div>
  );
}

VideoControl.propTypes = {
  className: PropTypes.string,
};

export default memo(VideoControl);
