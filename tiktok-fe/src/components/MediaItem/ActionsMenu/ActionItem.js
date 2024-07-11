import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./ActionsMenu.module.scss";
const cx = classNames.bind(styles);

function ActionItem({ icon, text, onClick }) {
  return (
    <li onClick={onClick} className={cx("action-item")}>
      <div className={cx("icon-wrapper")}>{icon}</div>
      <strong className={cx("strong-text")}>{text}</strong>
    </li>
  );
}

ActionItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ActionItem;
