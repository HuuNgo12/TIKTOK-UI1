import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";

import AccountItem from "./accountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{lable}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx("more-btn")}>See all</p>
    </div>
  );
}
SuggestedAccounts.prototypes = {
  lable: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
