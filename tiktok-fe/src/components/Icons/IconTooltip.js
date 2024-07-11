import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./IconTooltip.module.scss";
const cx = classNames.bind(styles);

function IconTooltip({
  animation = false,
  interactive = true,
  placement = "bottom",
  visible,
  className,
  content,
  children,
  onClick,
}) {
  return (
    <div onClick={onClick} className={cx("wrapper", className)}>
      <Tippy
        visible={visible}
        animation={animation}
        interactive={interactive}
        content={content}
        placement={placement}
      >
        <button className={cx("action-btn")}>{children}</button>
      </Tippy>
    </div>
  );
}

IconTooltip.propTypes = {
  animation: PropTypes.bool,
  interactive: PropTypes.bool,
  placement: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default IconTooltip;
