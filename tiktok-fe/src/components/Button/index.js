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

export default Button;
