import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import MediaItem from "~/components/MediaItem";
import videos from "~/assets/videos";
import {
  getDataPlayerVolume,
  initDataPlayerVolume,
} from "~/utils/dataPlayerVolume";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

const dataVids = [
  {
    id: 1,
    src: videos.vid,
  },
  {
    id: 2,
    src: videos.vid2,
  },
  {
    id: 3,
    src: videos.vid,
  },
];

function Home() {
  const [idItemPlaying, setIdItemPlaying] = useState(-1);
  const [playerVolumeBrowser, setPlayerVolumeBrowser] = useState(() => {
    if (!getDataPlayerVolume()) initDataPlayerVolume();
    return getDataPlayerVolume();
  });

  const value = {
    playerVolumeBrowser,
    setPlayerVolumeBrowser,
    setIdItemPlaying,
  };

  // Autoplay video of <MediaItem> when scrolling
  useEffect(() => {
    const mediaList = window.document.querySelectorAll("#mediaItem");

    const handleScrollAutoPlayVideo = () => {
      const indexCurrentItem = dataVids.findIndex(
        (item) => item.id === idItemPlaying
      );
      const item = mediaList[indexCurrentItem];
      const previousItem = mediaList[indexCurrentItem - 1];

      const conditionNextItem =
        item && window.scrollY > item.offsetTop + item.offsetHeight / 2;

      const previousTriggerOffsetY =
        previousItem &&
        window.scrollY <
          previousItem.offsetTop + previousItem.offsetHeight / 2;

      if (conditionNextItem) {
        setIdItemPlaying(dataVids[indexCurrentItem + 1].id);
      } else if (previousTriggerOffsetY) {
        setIdItemPlaying(dataVids[indexCurrentItem - 1].id);
      }
    };

    window.addEventListener("scroll", handleScrollAutoPlayVideo);

    return () => {
      window.removeEventListener("scroll", handleScrollAutoPlayVideo);
    };
  }, [idItemPlaying]);

  // Refresh go to top
  useEffect(() => {
    const handleLoaded = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleLoaded);

    return () => {
      window.removeEventListener("beforeunload", handleLoaded);
    };
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("column-container")}>
        {dataVids.length > 0 &&
          dataVids.map((item) => (
            <MediaItem
              playerVolume={value}
              autoPlay={item.id === idItemPlaying}
              key={item.id}
              id={"mediaItem"}
              data={item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
