import classNames from "classnames/bind";
import { useRef, useState, memo, useEffect } from "react";

import { saveDataPlayerVolume } from "~/utils/dataPlayerVolume";
import styles from "./AudioControl.module.scss";
const cx = classNames.bind(styles);

function AudioControl({ data, icon, mutedIcon, className }) {
  const { video, setPlayerVolumeBrowser, playerVolumeBrowser } = data;
  const { data: dataPlayerVolume } = playerVolumeBrowser;

  const [dragging, setDragging] = useState(false);
  const [historyVolume, setHistoryVolume] = useState({
    prev: 1,
    curr: dataPlayerVolume?.volume / 100,
  });
  const seekBarCurrentRef = useRef();
  const seekBarProgressRef = useRef();

  const handleToggleMute = () => {
    const newVolume =
      historyVolume.curr > 0 ? 0 : historyVolume.prev * 100;
    const newData = saveDataPlayerVolume(
      Math.floor(newVolume),
      !!historyVolume.curr
    );
    setPlayerVolumeBrowser(newData);
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
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

    const newData = saveDataPlayerVolume(
      Math.floor(video.volume * 100),
      video.volume > 0 ? false : true
    );
    setPlayerVolumeBrowser(newData);
  };

  useEffect(() => {
    if (video.muted) {
      const newData = saveDataPlayerVolume(0, true);
      setPlayerVolumeBrowser(newData);
    }
  }, [video.muted]);

  // Re-render when data player volume change in local storage
  useEffect(() => {
    setHistoryVolume({
      prev: historyVolume.prev,
      curr: dataPlayerVolume?.volume / 100,
    });
  }, [playerVolumeBrowser]);

  // Re-render when history volume change in here
  useEffect(() => {
    seekBarCurrentRef.current.style.height =
      historyVolume.curr * 100 + "%";
  }, [historyVolume]);

  // Allow cursor holding control when onBlur component
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

      <button className={cx("volume-btn")} onClick={handleToggleMute}>
        {historyVolume.curr > 0 ? icon : mutedIcon}
      </button>
    </div>
  );
}

export default memo(AudioControl);
