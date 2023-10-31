import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";

import Button from "../../Button";
import { CheckIcon } from "../../Icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3dc4ea0a69f8a222d66715b5fe98f0d9.jpeg?x-expires=1698307200&x-signature=7Ajg3%2Fs4iyFLf38MycASrlUgxLc%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Flllowing
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>schannelvn</strong>
          <CheckIcon className={cx("check")} />
        </p>
        <p className={cx("name")}>schannelvn</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Fllower</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
