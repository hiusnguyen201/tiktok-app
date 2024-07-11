import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { createContext, useState } from "react";

import videos from "~/assets/videos";
import Video from "~/components/Video";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import ActionsMenu from "./ActionsMenu";

import styles from "./MediaItem.module.scss";
const cx = classNames.bind(styles);

export const VideoContext = createContext();

function MediaItem({ data }) {
  const [video, setVideo] = useState();

  return (
    <div className={cx("item-container")}>
      <div className={cx("media-wrapper")}>
        <CardTop />

        <Video
          onLoadedData={(e) => setVideo(e.target)}
          src={videos.vid}
          loop
        />

        {video && (
          <VideoContext.Provider value={{ video }}>
            <CardBottom data={data} />
          </VideoContext.Provider>
        )}
      </div>

      <ActionsMenu />
    </div>
  );
}

MediaItem.propTypes = {
  data: PropTypes.object,
};

export default MediaItem;
