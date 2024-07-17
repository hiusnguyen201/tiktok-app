import PropTypes from "prop-types";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import {
  CommentIconSolid,
  HeartIconSolid,
  BookMarkIconSolid,
  ShareArrowIconSolid,
  PlusThinIcon,
  CheckThinIcon,
  ArrowDownIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import ActionItem from "./ActionItem";
import ProfileBox from "./ProfileBox";
import { Menu } from "~/components/Popper";
import shareItems from "./constantShareItems";
import { spliceArray } from "~/utils/convertData";

import styles from "./ActionsMenu.module.scss";
const cx = classNames.bind(styles);

function ActionsMenu({ data }) {
  const [hearted, setHearted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [followed, setFollowed] = useState(true);

  const handleChangeData = (item, setHistory) => {
    switch (item.type) {
      case "more":
        setHistory((prev) => [...prev, { data: shareItems }]);
        break;
    }
  };

  return (
    <ul className={cx("wrapper")}>
      <div className={cx("user-wrapper")}>
        <ProfileBox>
          <Link to={"/"} className={cx("image-box")}>
            <Image className={cx("avatar")} src="" />
          </Link>
        </ProfileBox>

        <button
          className={cx("follow-btn", { active: followed })}
          onClick={() => setFollowed(!followed)}
        >
          {followed ? <CheckThinIcon /> : <PlusThinIcon />}
        </button>
      </div>
      <ActionItem
        onClick={() => setHearted(!hearted)}
        icon={
          <HeartIconSolid
            className={cx("heart-icon", { active: hearted })}
          />
        }
        text={"11.2K"}
      />
      <ActionItem icon={<CommentIconSolid />} text={"421"} />
      <ActionItem
        onClick={() => setBookmarked(!bookmarked)}
        icon={
          <BookMarkIconSolid
            className={cx("bookmark-icon", { active: bookmarked })}
          />
        }
        text={"1777"}
      />

      <Menu
        className={cx("share-menu")}
        offset={[-25, 0]}
        delay={[0, 400]}
        onChange={handleChangeData}
        placement="top-start"
        items={[
          ...spliceArray(shareItems, 5),
          {
            icon: <ArrowDownIcon />,
            type: "more",
          },
        ]}
      >
        <div>
          <ActionItem icon={<ShareArrowIconSolid />} text={"263"} />
        </div>
      </Menu>
    </ul>
  );
}

ActionsMenu.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default memo(ActionsMenu);
