import classNames from "classnames/bind";
import { useRef, useState, memo, useEffect } from "react";

import styles from "./AudioControl.module.scss";
const cx = classNames.bind(styles);

function AudioControl({ video, icon, mutedIcon, className }) {
  const [dragging, setDragging] = useState(false);
  const [volumeValue, setVolumeValue] = useState({ prev: null, curr: 1 });
  const seekBarCurrentRef = useRef();
  const seekBarProgressRef = useRef();

  const handleToggleMute = () => {
    const seekBarCurrent = seekBarCurrentRef.current;
    if (volumeValue.curr > 0) {
      video.volume = 0;
      setVolumeValue({ prev: volumeValue.curr, curr: 0 });
      seekBarCurrent.style.height = 0 + "px";
    } else {
      video.volume = volumeValue.prev;
      setVolumeValue({ prev: volumeValue.curr, curr: volumeValue.prev });
      seekBarCurrent.style.height = (volumeValue.prev / 1) * 100 + "%";
    }
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setVolumeValue({
      prev: volumeValue.curr,
      curr: video.volume,
    });
    setDragging(false);
  };

  const handleChangeVolume = (e) => {
    if (!dragging && e.type !== "click") return;

    const seekBarProgress = seekBarProgressRef.current;

    let diffHeightPercent =
      (seekBarProgress.getBoundingClientRect().bottom - e.clientY) /
      seekBarProgress.offsetHeight;

    if (diffHeightPercent < 0) {
      diffHeightPercent = 0;
    } else if (diffHeightPercent > 1) {
      diffHeightPercent = 1;
    }

    seekBarCurrentRef.current.style.height = diffHeightPercent * 100 + "%";

    video.volume = 1 * diffHeightPercent;
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleChangeVolume);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "pointer";
    }

    return () => {
      window.removeEventListener("mousemove", handleChangeVolume);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, [dragging]);

  return (
    <div className={cx("wrapper", className)}>
      <div className={cx("audio-control-top", { dragging })}>
        <div className={cx("volume-control-container")}>
          <div
            ref={seekBarCurrentRef}
            className={cx("volume-control-current")}
          >
            <div
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleChangeVolume}
              className={cx("volume-control-circle")}
            ></div>
          </div>
          <div
            ref={seekBarProgressRef}
            onClick={handleChangeVolume}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleChangeVolume}
            className={cx("volume-control-progress")}
          ></div>
        </div>
      </div>

      <div className={cx("icon-wrapper")} onClick={handleToggleMute}>
        {volumeValue.curr > 0 ? icon : mutedIcon}
      </div>
    </div>
  );
}

export default memo(AudioControl);
