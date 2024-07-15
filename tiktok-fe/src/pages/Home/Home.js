import classNames from "classnames/bind";
import { useCallback, useEffect, useState } from "react";

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
  const [autoScroll, setAutoScroll] = useState(true);

  const getPositionItems = useCallback(() => {
    const mediaList = window.document.querySelectorAll("#mediaItem");
    let data = [];

    mediaList.forEach((item, index) => {
      const previousItem = mediaList[index - 1];
      const previousTriggerPos = previousItem
        ? previousItem.offsetTop + previousItem.offsetHeight / 2
        : 0;
      const nextTriggerPos = mediaList[index + 1]
        ? item.offsetTop + item.offsetHeight / 2
        : Infinity;
      return data.push({
        previousTriggerPos,
        nextTriggerPos,
        index,
      });
    });

    return data;
  }, [dataVids]);

  const handleEnded = () => {
    if (idItemPlaying < 0) return;

    const mediaList = window.document.querySelectorAll("#mediaItem");
    const currentIndex = dataVids.findIndex(
      (item) => item.id === idItemPlaying
    );

    const dataScrollTo = {
      left: 0,
      behavior: "smooth",
    };

    if (dataVids[currentIndex + 1]) {
      window.scrollTo({
        top: mediaList[currentIndex].offsetHeight * (currentIndex + 1),
        ...dataScrollTo,
      });
    } else {
      window.scrollTo({
        top: 0,
        ...dataScrollTo,
      });
    }
  };

  // Autoplay video of <MediaItem> when scrolling
  useEffect(() => {
    let delayAutoPlayTimeout;

    const handleScrollAutoPlayVideo = () => {
      if (idItemPlaying < 0) return;

      const positions = getPositionItems();
      const currentPosition = positions.find(
        (item) =>
          window.scrollY >= item.previousTriggerPos &&
          window.scrollY <= item.nextTriggerPos
      );

      delayAutoPlayTimeout = setTimeout(() => {
        setIdItemPlaying(dataVids[currentPosition.index].id);
      }, 1000);
    };

    window.addEventListener("scroll", handleScrollAutoPlayVideo);

    return () => {
      if (delayAutoPlayTimeout) clearInterval(delayAutoPlayTimeout);
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

  const value = {
    playerVolumeBrowser,
    setPlayerVolumeBrowser,
    setIdItemPlaying,
    autoScroll,
    setAutoScroll,
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("column-container")}>
        {dataVids.length > 0 &&
          dataVids.map((item) => (
            <MediaItem
              otherData={value}
              onEnded={handleEnded}
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
