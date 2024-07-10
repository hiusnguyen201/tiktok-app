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
} from "~/components/Icons";
import { AudioSeekBar, VideoSeekBar } from "~/components/SeekBar";

import styles from "./CardBottom.module.scss";
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

  console.log(3);

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
