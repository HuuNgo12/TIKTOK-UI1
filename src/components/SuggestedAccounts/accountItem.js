import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { CheckIcon } from "../Icons";
import { wrapper as ProperWrapper } from "../Proper";
import AccountPreview from "./AccountPreview";

import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  const handerPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <ProperWrapper>
          <div className={cx("preview")}>
            <AccountPreview />
          </div>
        </ProperWrapper>
      </div>
    );
  };
  return (
    <span>
      <Tippy
        // visible
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        render={handerPreview}
        placement="bottom"
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3dc4ea0a69f8a222d66715b5fe98f0d9.jpeg?x-expires=1698307200&x-signature=7Ajg3%2Fs4iyFLf38MycASrlUgxLc%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>schannelvn</strong>
              <CheckIcon className={cx("check")} />
            </p>
            <p className={cx("name")}>schannelvn</p>
          </div>
        </div>
      </Tippy>
    </span>
  );
}
AccountItem.prototypes = {};

export default AccountItem;
