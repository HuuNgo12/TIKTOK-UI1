import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  onClick,
  className,
  lefticon,
  righticon,
  primary = false,
  outLine = false,
  rounded = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  // cái passProps này là đề phòng khi mình thêm những cái props khác chưa được định nghĩa, thì vẫn lấy qua được.

  // xử lý cái nút:  nếu có to (link nội bộ) thì tạo 1 cái prop tên là to và gán to cho nó.
  // nếu có href thì gán href cho nó
  //==> giải props vào cái nút để nó có thể tùy biến

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  // xử lý khi disable thì không cho tương tác lên nút khi có onclick
  // if (disabled) {
  //   delete props.onClick;
  // }
  // xử lý khi disable thì không cho tương tác lên nút khi có các listener bắt đầu bằng on: onClick, onMountUp...
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outLine,
    rounded,
    disabled,
    small,
    large,
    text,
    lefticon,
    righticon,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx("icon")}>{lefticon}</span>}
      <span className={cx("title")}>{children}</span>
      {righticon && <span className={cx("icon")}>{righticon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outLine: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  lefticon: PropTypes.node,
  righticon: PropTypes.node,
  small: PropTypes.bool,
  large: PropTypes.bool,
};
export default Button;
