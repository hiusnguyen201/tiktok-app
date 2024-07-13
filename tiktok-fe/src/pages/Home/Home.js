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
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
];

function Home() {
  const [indexItemPlaying, setIndexItemPlaying] = useState(0);
  const [playerVolume, setPlayerVolume] = useState(() => {
    if (!getDataPlayerVolume()) initDataPlayerVolume(100, false);
    return getDataPlayerVolume();
  });

  useEffect(() => {
    const mediaList = window.document.querySelectorAll("#mediaItem");

    const handleScrollAutoPlayVideo = () => {
      if (window.scrollY % 100 !== 0) return;

      const item = mediaList[indexItemPlaying];
      const previousItem = mediaList[indexItemPlaying - 1];

      const conditionNextItem =
        item && window.scrollY > item.offsetTop + item.offsetHeight / 2;
      const previousTriggerOffsetY =
        previousItem &&
        window.scrollY <
          previousItem.offsetTop + previousItem.offsetHeight / 2;

      if (conditionNextItem) {
        setIndexItemPlaying(indexItemPlaying + 1);
      } else if (previousTriggerOffsetY) {
        setIndexItemPlaying(indexItemPlaying - 1);
      }
    };

    window.addEventListener("scroll", handleScrollAutoPlayVideo);

    return () => {
      window.removeEventListener("scroll", handleScrollAutoPlayVideo);
    };
  }, [indexItemPlaying]);

  const value = {
    playerVolume,
    setPlayerVolume,
  };

  return (
    <div className={cx("wrapper")}>
      {dataVids.length > 0 &&
        dataVids.map((item, index) => (
          <MediaItem
            playerVolume={value}
            autoPlay={index === indexItemPlaying}
            key={index}
            id={"mediaItem"}
            data={item}
          />
        ))}
    </div>
  );
}

export default Home;
