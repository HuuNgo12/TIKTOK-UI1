import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import config from "../../../config";
import {
  HomeIcon,
  HomeIconActive,
  GroupIcon,
  GroupIconActive,
  LiveIcon,
  LiveIconActive,
} from "../../../components/Icons";
import SuggestedAccounts from "../../../components/SuggestedAccounts";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrraper")}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<GroupIcon />}
          activeIcon={<GroupIconActive />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveIconActive />}
        />
      </Menu>
      <SuggestedAccounts lable="Suggested Accounts" />
      {/* <SuggestedAccounts lable="Following Accounts" /> */}
    </aside>
  );
}

export default Sidebar;
