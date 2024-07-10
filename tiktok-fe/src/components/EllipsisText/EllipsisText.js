import classNames from "classnames/bind";

import styles from "./EllipsisText.module.scss";
const cx = classNames.bind(styles);

function EllipsisText({ children, className }) {
  return <span className={cx("text", className)}>{children}</span>;
}

export default EllipsisText;
