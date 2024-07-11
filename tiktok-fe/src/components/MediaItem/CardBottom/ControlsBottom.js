import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useState, useContext } from "react";

import { VideoContext } from "../MediaItem";
import IconTooltip, {
  VolumeIcon,
  VolumeMuteIconSolid,
  PlayIcon,
  PauseIcon,
  ConvertMobileScreenIcon,
  ArrowUpIconSolid,
  ArrowUpMuteIconSolid,
} from "~/components/Icons";
import { AudioSeekBar, VideoSeekBar } from "~/components/SeekBar";

import styles from "./CardBottom.module.scss";
const cx = classNames.bind(styles);

function ControlsBottom() {
  const { video } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const handleTogglePlayVideo = () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleToggleAutoScroll = () => {
    console.log(1);
    setIsAutoScroll(!isAutoScroll);
  };

  return (
    <div className={cx("controls-bottom")}>
      <button
        onClick={handleTogglePlayVideo}
        className={cx("togglePlay-icon-wrapper")}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <VideoSeekBar
        isPlaying={isPlaying}
        video={video}
        className={cx("seek-bar-box")}
      />

      <div className={cx("actions-right")}>
        <IconTooltip
          className={cx("convertMobileScreen-icon-wrapper")}
          content="Floating Player"
          placement="top"
        >
          <ConvertMobileScreenIcon />
        </IconTooltip>

        <IconTooltip
          onClick={handleToggleAutoScroll}
          className={cx("toggleAutoScroll-icon-wrapper")}
          content={`Auto Scroll is ${isAutoScroll ? "on" : "off"} `}
        >
          {isAutoScroll ? <ArrowUpIconSolid /> : <ArrowUpMuteIconSolid />}
        </IconTooltip>

        <AudioSeekBar
          video={video}
          icon={<VolumeIcon />}
          mutedIcon={<VolumeMuteIconSolid />}
        />
      </div>
    </div>
  );
}

export default ControlsBottom;
