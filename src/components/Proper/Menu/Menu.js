import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItems";
import Header from "./header";
import { wrapper as ProperWrapper } from "../../Proper";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    // console.log(current);
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  const handlerBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const handlerResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  return (
    <Tippy
      delay={[0, 700]}
      interactive={true}
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <ProperWrapper className={cx("menu-proper")}>
            {history.length > 1 && (
              <Header title={current.title} onBack={handlerBack} />
            )}
            {/*đọc câu trên lú lắm phải không, t cũng vừa lú nhưng giờ hiểu rồi :))))
            - nếu menu cấp 1 thì mảng current chỉ có một phần tử (lý do vì sao thì tự hiểu), nhưng khi menu cấp 2 thì
            mãng đó có tới 2 phần tử, vì có điều kiện, là nếu có children thì add thêm 1 phần tử vào cái mảng children, nên nếu có cấp
            2 thì mảng đó có 2 phần tử. Khi render thì sẽ render ra phần tử của cuối cùng của mảng. Nên nó sẽ render ra thằng cấp 2
            */}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </ProperWrapper>
        </div>
      )}
      onHidden={handlerResetMenu}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
