import styles from "./Date.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Date({ large = false, day = 1, month = 1, year = 1999 }) {
  const getMonthYear = () => {
    if (month < 10) {
      return `TH0${month} ${year}`;
    }
    return `TH${month} ${year}`;
  };
  return (
    <div className={cx("wrapper")}>
      <span className={cx("day", { large: large })}>{day}</span>
      {!large && <div className={cx("line")}></div>}
      <span className={cx("month-year")}>{getMonthYear()}</span>
    </div>
  );
}

export default Date;
