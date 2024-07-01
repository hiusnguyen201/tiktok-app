import classNames from "classnames/bind";

import MediaItem from "~/components/MediaItem";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <MediaItem />
    </div>
  );
}

export default Home;
