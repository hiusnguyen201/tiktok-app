import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { CheckedIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Button from "~/components/Button";
import EllipsisText from "~/components/EllipsisText";
import fakeUser from "~/fakeUser";

import styles from "./MenuActions.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function ProfileBox({ children }) {
  const [followersText, setFollowersText] = useState("--");
  const [likesText, setLikesText] = useState("--");

  useEffect(() => {
    const convertToShortTextNumber = (number) => {
      let digits = 0;

      let numberCalDigits = number;
      while (numberCalDigits > 0) {
        numberCalDigits = Math.floor(numberCalDigits / 10);
        digits++;
      }

      const data = {};
      if (digits >= 4 && digits <= 6) {
        data.floatNum = (number / 1000).toFixed(1);
        data.type = "K";
      } else if (digits >= 7 && digits <= 9) {
        data.floatNum = (number / 1000000).toFixed(1);
        data.type = "M";
      } else if (digits >= 10) {
        data.floatNum = (number / 1000000000).toFixed(1);
        data.type = "T";
      }

      return (
        (+data.floatNum.split(".")[1]
          ? data.floatNum
          : (+data.floatNum).toFixed(0)) + "M"
      );
    };

    setTimeout(() => {
      setFollowersText(convertToShortTextNumber(fakeUser.countFollowers));
      setLikesText(convertToShortTextNumber(fakeUser.countLikes));
    }, 2000);
  }, []);

  const renderResult = (attrs) => (
    <div className={cx("profile-container")}>
      <div className={cx("header")}>
        <Link to={"/"} className={cx("image-box", "profile-image")}>
          <Image className={cx("avatar")} src="" />
        </Link>
        <Button primary outline>
          Follow
        </Button>
      </div>
      <h4 className={cx("title-wrapper")}>
        <Link className={cx("title-link")} to={"/"}>
          <EllipsisText className={cx("nickname")}>
            {fakeUser.nickname}
          </EllipsisText>
          {fakeUser.tick && <CheckedIcon className={cx("check-icon")} />}
        </Link>
      </h4>
      <Link className={cx("username")} to={"/"}>
        <EllipsisText>{fakeUser.username}</EllipsisText>
      </Link>

      <p className={cx("user-stat")}>
        <span className={cx("text")}>{followersText}</span>
        <span className={cx("desc")}>Followers</span>
        <span className={cx("text")}>{likesText}</span>
        <span className={cx("desc")}>Likes</span>
      </p>

      <p className={cx("bio-text")}>{fakeUser.bio}</p>
    </div>
  );

  return (
    <div>
      <Tippy
        tabIndex="-1"
        offset={[0, 30]}
        placement="bottom-start"
        delay={[700, 400]}
        interactive
        render={renderResult}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default ProfileBox;
