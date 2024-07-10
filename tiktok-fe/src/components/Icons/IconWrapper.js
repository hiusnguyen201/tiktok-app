import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./IconWrapper.module.scss";
const cx = classNames.bind(styles);

function IconWrapper({
  animation = false,
  interactive = true,
  placement = "bottom",
  visible,
  className,
  content,
  children,
  tooltip = true,
  onClick,
}) {
  return (
    <div className={cx("wrapper", className)}>
      {tooltip ? (
        <Tippy
          visible={visible}
          animation={animation}
          interactive={interactive}
          content={content}
          placement={placement}
        >
          <button className={cx("action-btn")}>{children}</button>
        </Tippy>
      ) : (
        <button onClick={onClick} className={cx("action-btn")}>
          {children}
        </button>
      )}
    </div>
  );
}

IconWrapper.propTypes = {
  animation: PropTypes.bool,
  interactive: PropTypes.bool,
  placement: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default IconWrapper;
