import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./MenuActions.module.scss";
const cx = classNames.bind(styles);

function ActionItem({ icon, text }) {
  return (
    <li className={cx("action-item")}>
      <div className={cx("icon-wrapper")}>{icon}</div>
      <strong className={cx("strong-text")}>{text}</strong>
    </li>
  );
}

ActionItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default ActionItem;
