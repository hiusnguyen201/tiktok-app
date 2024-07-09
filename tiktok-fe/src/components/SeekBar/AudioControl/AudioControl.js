import classNames from "classnames/bind";
import { useRef, useState, memo, useEffect } from "react";

import { VolumeIcon, VolumeMuteIconSolid } from "~/components/Icons";
import styles from "./AudioControl.module.scss";
const cx = classNames.bind(styles);

function AudioControl({ video, className }) {
  const [dragging, setDragging] = useState(false);
  const [volumeValue, setVolumeValue] = useState({ pre: null, curr: 1 });
  const barRef = useRef();
  const progressRef = useRef();

  const handleToggleMute = () => {
    if (volumeValue.curr > 0) {
      video.volume = 0;
      setVolumeValue({ pre: volumeValue.curr, curr: 0 });
      progressRef.current.style.height = 0 + "px";
    } else {
      video.volume = volumeValue.pre;
      setVolumeValue({ pre: volumeValue.curr, curr: volumeValue.pre });
      progressRef.current.style.height = (volumeValue.pre / 1) * 100 + "%";
    }
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setVolumeValue({
      pre: volumeValue.curr,
      curr: video.volume,
    });
    setDragging(false);
  };

  const handleChangeVolume = (e) => {
    if (!dragging && e.type !== "click") return;

    let progress =
      barRef.current.getBoundingClientRect().bottom - e.clientY;

    if (progress < 0) {
      progress = 0;
    } else if (progress > barRef.current.offsetHeight) {
      progress = barRef.current.offsetHeight;
    }

    progressRef.current.style.height = progress + "px";

    video.volume = 1 * (progress / barRef.current.offsetHeight);
    setVolumeValue({ ...volumeValue, curr: video.volume });
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
            ref={progressRef}
            onClick={handleChangeVolume}
            className={cx("progress")}
          >
            <div
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleChangeVolume}
              className={cx("circle")}
            ></div>
          </div>
          <div
            ref={barRef}
            onClick={handleChangeVolume}
            className={cx("bar")}
          ></div>
        </div>
      </div>

      <div className={cx("icon-wrapper")} onClick={handleToggleMute}>
        {volumeValue.curr > 0 ? <VolumeIcon /> : <VolumeMuteIconSolid />}
      </div>
    </div>
  );
}

export default memo(AudioControl);
