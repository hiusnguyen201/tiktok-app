import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { createContext, useEffect, useRef, useState } from "react";

import Video from "~/components/Video";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import ActionsMenu from "./ActionsMenu";

import styles from "./MediaItem.module.scss";
const cx = classNames.bind(styles);

export const VideoContext = createContext();

function MediaItem({ id, index, autoPlay = false, data }) {
  const [videoElement, setVideoElement] = useState();

  const handleLoadedData = (e) => {
    setVideoElement(e.target);
  };

  return (
    <div id={id} className={cx("wrapper")}>
      <div className={cx("item-container")}>
        <div className={cx("media-wrapper")}>
          <CardTop />

          <Video
            onLoadedData={handleLoadedData}
            src={data.src}
            loop
            muted
          />

          {videoElement && (
            <VideoContext.Provider
              value={{ video: videoElement, autoPlay }}
            >
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
