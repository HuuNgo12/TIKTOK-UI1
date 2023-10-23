import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, forwardRef } from "react";
import images from "../../assets/images";
import styles from "./Image.module.scss";
import { wrapper } from "../Proper";

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setfallback] = useState("");
  const handlerError = () => {
    setfallback(images.noImage);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handlerError}
    />
  );
});
Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};
export default Image;
