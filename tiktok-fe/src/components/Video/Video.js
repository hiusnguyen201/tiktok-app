import PropTypes from "prop-types";
import { forwardRef } from "react";
import classNames from "classnames/bind";

import styles from "./Video.module.scss";
const cx = classNames.bind(styles);

const Video = forwardRef(({ src, classes, ...passProps }, ref) => {
  return (
    <video src={src} ref={ref} className={classes} {...passProps}></video>
  );
});

Video.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Video;
