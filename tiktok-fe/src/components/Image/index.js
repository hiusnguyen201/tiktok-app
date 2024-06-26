import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = (e) => {
      setFallback(customFallback);
    };

    return (
      <img
        alt={alt}
        className={cx("wrapper", className)}
        ref={ref}
        src={fallback || src}
        {...props}
        onError={handleError}
        onLoad={(e) => {
          e.target.style.opacity = 1;
        }}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
