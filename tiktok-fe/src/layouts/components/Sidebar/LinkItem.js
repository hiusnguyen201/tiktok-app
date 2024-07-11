import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function LinkItem({ data }) {
  return (
    <div className={cx("link-item")}>
      <h4 className={cx("title")}>{data.title}</h4>
      <div className={cx("link-container")}>
        {data.links.map((item, index) => (
          <a
            key={index}
            rel="noreferrer"
            className={cx("link")}
            href={item.href}
            target="_blank"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

LinkItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinkItem;
