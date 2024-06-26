import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ data, onClick, className }) {
  const classes = cx("menu-item", { separate: data.separate }, className);

  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MenuItem;
