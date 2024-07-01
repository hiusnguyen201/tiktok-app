import PropTypes from "prop-types";
import { memo, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./SeekBar.module.scss";
const cx = classNames.bind(styles);

function Video({ videoRef, className }) {
  const [dragging, setDragging] = useState(false);
  const seekBarRef = useRef();
  const seekBarProgressRef = useRef();

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleChangeCurrentTime = (e) => {
    if (!dragging && e.type !== "click") return;

    let progress = e.clientX - seekBarRef.current.getBoundingClientRect().left;

    if (progress < 0) {
      progress = 0;
    } else if (progress > seekBarRef.current.offsetWidth) {
      progress = seekBarRef.current.offsetWidth;
    }

    seekBarProgressRef.current.style.width = progress + "px";

    videoRef.current.currentTime =
      videoRef.current.duration * (progress / seekBarRef.current.offsetWidth);
  };

  useEffect(() => {
    videoRef.current.addEventListener("timeupdate", () => {
      const diffDuration =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      seekBarProgressRef.current.style.width = diffDuration + "%";
    });
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleChangeCurrentTime);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleChangeCurrentTime);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className={cx("wrapper", className)}>
      <div className={cx("seek-bar-container")}>
        <div ref={seekBarProgressRef} className={cx("seek-bar-progress")}>
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleChangeCurrentTime}
            className={cx("seek-bar-circle")}
          ></div>
        </div>
        <div
          ref={seekBarRef}
          onClick={handleChangeCurrentTime}
          className={cx("seek-bar")}
        ></div>
      </div>
    </div>
  );
}

Video.propTypes = {
  videoRef: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default memo(Video);
