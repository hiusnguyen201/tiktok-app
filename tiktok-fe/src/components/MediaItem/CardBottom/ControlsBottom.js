import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useState, useContext } from "react";

import { VideoContext } from "../MediaItem";
import IconWrapper, {
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
      <IconWrapper
        tooltip={false}
        onClick={handleTogglePlayVideo}
        className={cx("togglePlay-icon-wrapper")}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconWrapper>

      <VideoSeekBar
        isPlaying={isPlaying}
        video={video}
        className={cx("seek-bar-box")}
      />

      <div className={cx("actions-right")}>
        <IconWrapper
          className={cx("convertMobileScreen-icon-wrapper")}
          content="Floating Player"
          placement="top"
        >
          <ConvertMobileScreenIcon />
        </IconWrapper>

        <IconWrapper
          onClick={handleToggleAutoScroll}
          className={cx("toggleAutoScroll-icon-wrapper")}
          content={`Auto Scroll is ${isAutoScroll ? "on" : "off"} `}
        >
          {isAutoScroll ? <ArrowUpIconSolid /> : <ArrowUpMuteIconSolid />}
        </IconWrapper>

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
