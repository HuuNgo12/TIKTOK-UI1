import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItems";
import { wrapper as ProperWrapper } from "../../Proper";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <ProperWrapper className={cx("menu-proper")}>
            {renderItems()}
          </ProperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
