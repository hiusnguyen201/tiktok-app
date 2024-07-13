import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useState, useContext, useEffect } from "react";

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
  const { video, autoPlay } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const handleTogglePlayVideo = () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (autoPlay) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }

    setIsPlaying(autoPlay);
  }, [autoPlay]);

  const handleToggleAutoScroll = () => {
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
        data={{ ...useContext(VideoContext), isPlaying }}
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
          data={useContext(VideoContext)}
          icon={<VolumeIcon />}
          mutedIcon={<VolumeMuteIconSolid />}
        />
      </div>
    </div>
  );
}

export default ControlsBottom;
