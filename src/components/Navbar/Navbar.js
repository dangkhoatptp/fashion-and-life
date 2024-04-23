import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import images from "../../assets/images";

const cx = classNames.bind(styles);
const menu = [
  {
    iconSelected: images.homeSelected,
    iconUnselected: images.homeUnselected,
    text: "trang chủ",
  },
  {
    text: "thư ngỏ",
    children: ["Tạp chí Du Lịch"],
  },
  {
    text: "doanh nhân",
    children: ["Kiến thức doanh nhân", "Kinh doanh", "Doanh Nghiệp"],
  },
  {
    text: "du lịch",
  },
  {
    text: "bất động sản",
  },
  {
    text: "thời trang",
  },
  {
    text: "làm đẹp",
  },
  {
    text: "ẩm thực",
  },
  {
    text: "văn hóa - giải trí",
    children: ["Sự kiện", "Thể thao", "Giáo dục", "Nhân Vật Nổi Tiếng"],
  },
];

function Navbar() {
  const [indexSelected, setIndexselected] = useState(0);

  const handleClickNavbarItem = (index) => {
    setIndexselected(index);
  };
  return (
    <div className={cx("navbar-container")}>
      <ul className={cx("list")}>
        {menu.map((item, index) => {
          return (
            <Tippy
              offset={0}
              placement="bottom-start"
              interactive
              disabled={!item.children}
              render={(attrs) => (
                <div className={cx("box")} tabIndex={-1} {...attrs}>
                  <ul className={cx("list")}>
                    {item.children &&
                      item.children.map((itemChildren, index) => {
                        return (
                          <li key={index} className={cx("item")}>
                            <a href="#">{itemChildren}</a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            >
              <li
                onClick={() => handleClickNavbarItem(index)}
                key={index}
                className={cx("item")}
              >
                {item.iconUnselected && (
                  <img
                    className={cx("icon-item", {
                      "display-none": indexSelected === index,
                    })}
                    src={item.iconUnselected}
                    alt="iconUnselected"
                  />
                )}
                {item.iconSelected && (
                  <img
                    className={cx("icon-item", {
                      "display-none": indexSelected !== index,
                    })}
                    src={item.iconSelected}
                    alt="iconSelected"
                  />
                )}
                <span className={cx({ selected: indexSelected === index })}>
                  {item.text}
                </span>
                {item.children && (
                  <img
                    className={cx("icon-arrow", {
                      "display-none": indexSelected === index,
                    })}
                    src={images.arrowDownUnselected}
                    alt="arrowDownUnselected"
                  />
                )}
                {item.children && (
                  <img
                    className={cx("icon-arrow", {
                      "display-none": indexSelected !== index,
                    })}
                    src={images.arrowDownSelected}
                    alt="arrowDownSelected"
                  />
                )}
              </li>
            </Tippy>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
