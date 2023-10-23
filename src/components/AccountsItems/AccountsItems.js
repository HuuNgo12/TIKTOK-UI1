import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountsItems.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "../Image";

const cx = classNames.bind(styles);

function AccountsItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src={data.avatar}
        alt={data.full_name}
      ></Image>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}
AccountsItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountsItem;
