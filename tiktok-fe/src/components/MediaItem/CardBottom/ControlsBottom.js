import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import { VideoContext } from "../MediaItem";
import IconWrapper, {
  PlayIcon,
  PauseIcon,
  ConvertMobileScreenIcon,
} from "~/components/Icons";
import { AudioSeekBar, VideoSeekBar } from "~/components/SeekBar";

import styles from "./CardBottom.module.scss";
import { useContext } from "react";
const cx = classNames.bind(styles);

function ControlsBottom() {
  const { video } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayVideo = () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cx("controls-bottom")}>
      <button
        onClick={handleTogglePlayVideo}
        className={cx("icon-wrapper", "togglePlay-icon-wrapper")}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <VideoSeekBar video={video} className={cx("seek-bar-box")} />

      <div className={cx("actions-right")}>
        <IconWrapper
          className={cx(
            "icon-wrapper",
            "convertMobileScreen-icon-wrapper"
          )}
          content="Floating Player"
          placement="top"
        >
          <ConvertMobileScreenIcon />
        </IconWrapper>

        <AudioSeekBar video={video} />
      </div>
    </div>
  );
}

export default ControlsBottom;
