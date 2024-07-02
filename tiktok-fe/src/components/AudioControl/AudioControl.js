import classNames from "classnames/bind";
import { useRef, useState, memo, useEffect } from "react";

import { VolumeIcon } from "~/components/Icons";
import styles from "./AudioControl.module.scss";
const cx = classNames.bind(styles);

function AudioControl({ videoRef, className }) {
  const [dragging, setDragging] = useState(false);
  const barRef = useRef();
  const progressRef = useRef();

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleChangeVolume = (e) => {
    if (!dragging && e.type !== "click") return;

    let progress = barRef.current.getBoundingClientRect().bottom - e.clientY;

    if (progress < 0) {
      progress = 0;
    } else if (progress > barRef.current.offsetHeight) {
      progress = barRef.current.offsetHeight;
    }

    progressRef.current.style.height = progress + "px";

    videoRef.current.volume = 1 * (progress / barRef.current.offsetHeight);
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
    <div className={cx("wrapper")}>
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

      <VolumeIcon />
    </div>
  );
}

export default memo(AudioControl);
