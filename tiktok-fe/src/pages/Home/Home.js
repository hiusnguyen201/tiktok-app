import classNames from "classnames/bind";

import MediaItem from "~/components/MediaItem";
import videos from "~/assets/videos";

import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const dataVids = [
  {
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
  {
    src: videos.vid,
  },
];

function Home() {
  const [indexItemPlaying, setIndexItemPlaying] = useState(0);

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

  return (
    <div className={cx("wrapper")}>
      {dataVids.length > 0 &&
        dataVids.map((item, index) => (
          <MediaItem
            autoPlay={index === indexItemPlaying}
            index={index}
            key={index}
            id={"mediaItem"}
            data={item}
          />
        ))}
    </div>
  );
}

export default Home;
