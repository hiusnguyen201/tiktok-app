import classNames from "classnames/bind";

import { VolumeIcon, VolumeMuteIconSolid } from "~/components/Icons";

import styles from "./CardBottom.module.scss";
const cx = classNames.bind(styles);

function AudioControl() {
  return (
    <div className={cx("audio-control-wrapper")}>
      {/* <div className={cx("volume-control-container")}>
        <div className={cx("volume-control-progress")}></div>
        <div className={cx("volume-control-circle")}></div>
      </div> */}
      <button className={cx("icon-wrapper")}>
        <VolumeIcon />
        {/* <VolumeMuteIconSolid /> */}
      </button>
    </div>
  );
}

export default AudioControl;
