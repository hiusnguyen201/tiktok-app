import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import {
  CommentIconSolid,
  HeartIconSolid,
  BookMarkIconSolid,
  ShareArrowIconSolid,
  PlusThinIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import ActionItem from "./ActionItem";

import styles from "./MenuActions.module.scss";
import ProfileBox from "./ProfileBox";
const cx = classNames.bind(styles);

function MenuActions({ data }) {
  return (
    <ul className={cx("wrapper")}>
      <div className={cx("user-wrapper")}>
        <ProfileBox>
          <Link to={"/"} className={cx("image-box")}>
            <Image className={cx("avatar")} src="" />
          </Link>
        </ProfileBox>

        <button className={cx("follow-btn")}>
          <PlusThinIcon />
        </button>
      </div>

      <ActionItem
        icon={
          <HeartIconSolid className={cx("heart-icon", { active: true })} />
        }
        text={"11.2K"}
      />
      <ActionItem icon={<CommentIconSolid />} text={"421"} />
      <ActionItem
        icon={
          <BookMarkIconSolid
            className={cx("bookmark-icon", { active: true })}
          />
        }
        text={"1777"}
      />
      <ActionItem icon={<ShareArrowIconSolid />} text={"263"} />
    </ul>
  );
}

MenuActions.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default memo(MenuActions);
