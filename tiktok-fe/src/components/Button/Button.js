import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  className,
  primary = false,
  outline = false,
  small = false,
  large = false,
  rounded = false,
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx(
    "wrapper",
    { primary, outline, small, large, rounded },
    className
  );

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;
