import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { createContext, useState, useEffect } from "react";

import Video from "~/components/Video";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import ActionsMenu from "./ActionsMenu";
import styles from "./MediaItem.module.scss";
const cx = classNames.bind(styles);

export const VideoContext = createContext();

function MediaItem({ id, onEnded, autoPlay = false, data, otherData }) {
  const [videoElement, setVideoElement] = useState();

  const handleLoadedData = (e) => {
    setVideoElement(e.target);
  };

  const value = {
    video: videoElement,
    autoPlay,
    ...otherData,
  };

  return (
    <div id={id} className={cx("wrapper")}>
      <div className={cx("item-container")}>
        <div className={cx("media-wrapper")}>
          <CardTop />

          <Video
            onLoadedData={handleLoadedData}
            onEnded={onEnded}
            src={data.src}
            loop={!otherData.autoScroll}
            autoPlay={autoPlay}
            muted={value.playerVolumeBrowser.data.muted}
          />

          {videoElement && (
            <VideoContext.Provider value={value}>
              <CardBottom data={data} />
            </VideoContext.Provider>
          )}
        </div>

        <ActionsMenu />
      </div>
    </div>
  );
}

MediaItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MediaItem;
