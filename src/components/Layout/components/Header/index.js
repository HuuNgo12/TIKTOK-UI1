import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faMessage,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
// tippy
import Tippy from "@tippyjs/react/";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
//
import Button from "../../../Button";
import { wrapper as ProperWrapper } from "../../../Proper";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import AccountsItem from "../../../AccountsItems";
import Menu from "../../../Proper/Menu";
import { UploadIcon } from "../../../../components/Icons";
import { MessageIcon } from "../../../../components/Icons";
import { InboxIcon } from "../../../../components/Icons";
import { SearchIcon } from "../../../../components/Icons";
import Image from "../../../../components/Image";

//
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "English",
      data: [
        {
          code: "En",
          title: "English",
        },
        {
          code: "Vi",
          title: "Viet Nam",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback And Help ",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const userCurrent = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
  const handleMenuChange = (manuItem) => {
    console.log(manuItem);
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@Hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-reult")} tabIndex="-1" {...attrs}>
              <ProperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
              </ProperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search for acounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {userCurrent ? (
            <>
              <Tippy delay={(0, 200)} content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={(0, 200)} content="Messagers" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={(0, 200)} content="Inbox" placement="bottom">
                <button className={cx("action-btn", "inbox-message")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}
          <Menu
            items={userCurrent ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {userCurrent ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1697274000&x-signature=BInhhmutosa1S1WWl1CbpBaWqbI%3D"
                className={cx("user-avatar")}
                alt="nguyen van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
