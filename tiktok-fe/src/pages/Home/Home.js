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
  const [autoScroll, setAutoScroll] = useState(true);

  // const handleEnded = () => {
  //   if (idItemPlaying < 0) return;

  //   const mediaList = window.document.querySelectorAll("#mediaItem");

  //   const indexCurrentItem = dataVids.findIndex(
  //     (item) => item.id === idItemPlaying
  //   );

  //   if (dataVids[indexCurrentItem + 1]) {
  //     window.scrollTo(
  //       0,
  //       mediaList[indexCurrentItem].offsetTop +
  //         mediaList[indexCurrentItem].offsetHeight -
  //         60 // 60 is header
  //     );
  //   } else {
  //     window.scrollTo(0, 0);
  //     return;
  //   }
  // };

  // Autoplay video of <MediaItem> when scrolling
  useEffect(() => {
    const mediaList = window.document.querySelectorAll("#mediaItem");

    const handleScrollAutoPlayVideo = () => {
      if (idItemPlaying < 0) return;

      const indexCurrentItem = dataVids.findIndex(
        (item) => item.id === idItemPlaying
      );

      const currentItem = mediaList[indexCurrentItem];
      const previousItem = mediaList[indexCurrentItem - 1];

      console.log(window.scrollY);

      const conditionMoveToNextItem =
        currentItem &&
        window.scrollY >
          currentItem.offsetTop + currentItem.offsetHeight / 2;

      const conditionMoveToPreviousItem =
        previousItem &&
        window.scrollY <
          previousItem.offsetTop + previousItem.offsetHeight / 2;

      let itemTriggered = null;
      if (conditionMoveToNextItem) {
        itemTriggered = dataVids[indexCurrentItem + 1];
      } else if (conditionMoveToPreviousItem) {
        itemTriggered = dataVids[indexCurrentItem - 1];
      } else {
        itemTriggered = dataVids[0];
      }

      console.log(itemTriggered);

      // if (itemTriggered) {
      //   setIdItemPlaying(itemTriggered.id);
      // }
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
              // onEnded={handleEnded}
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
