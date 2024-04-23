import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import images from "../../assets/images";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo-search-container")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Bạn cần tìm gì?" />
          <button className={cx("search-button")}>
            <img src={images.search} alt="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
