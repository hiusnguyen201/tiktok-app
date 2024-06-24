import classNames from "classnames/bind";
import { useState, forwardRef, useEffect } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    { src, className, fallback: customFallback = images.noImage, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = (e) => {
      setFallback(customFallback);
    };

    return (
      <img
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

export default Image;
