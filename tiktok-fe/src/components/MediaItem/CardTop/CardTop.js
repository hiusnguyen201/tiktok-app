import PropTypes from "prop-types";
import { memo } from "react";
import classNames from "classnames/bind";

import Menu from "~/components/Popper/Menu";
import { EllipsisIcon } from "~/components/Icons";
import POPUPS from "./constantsPopUp";

import styles from "./CardTop.module.scss";
const cx = classNames.bind(styles);

function CardTop({ className }) {
  return (
    <div className={cx("wrapper", className)}>
      <div></div>
      <Menu
        className={cx("controls-top")}
        offset={[-4, 24]}
        delay={[0, 0]}
        placement="right-start"
        items={POPUPS}
      >
        <button className={cx("icon-wrapper")}>
          <EllipsisIcon />
        </button>
      </Menu>
    </div>
  );
}

export default memo(CardTop);
