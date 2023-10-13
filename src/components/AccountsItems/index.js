import classNames from "classnames/bind";
import styles from "./AccountsItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountsItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1697274000&x-signature=BInhhmutosa1S1WWl1CbpBaWqbI%3D"
        alt="Hoa"
      ></img>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> Nguyen Van A</span>
          <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountsItem;
