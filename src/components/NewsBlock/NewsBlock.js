import styles from "./NewsBlock.module.scss";
import classNames from "classnames/bind";

import images from "../../assets/images";
import Date from "../Date/Date";

const cx = classNames.bind(styles);

function NewsBlock({
  data,
  horizontalBlock = false,
  verticalBlock = false,
  widthPicture = "50px",
  heightPicture = "50px",
  dateInPicture = false,
  dateInContent = false,
  styleTitle = "1.6rem 300",
  marginTopTitle = "0px",
  lineClampSubTitle = "3",
  styleTypeNews = "",
  whiteLetters = false,
}) {
  const classnames = {
    horizontalBlock,
    verticalBlock,
  };
  const getUrlImage = (url) => {
    return `url(${url})`;
  };
  const handleDateMode = (date) => {
    if (date) {
      const arrDate = date.split("/");
      return {
        day: arrDate[0],
        month: arrDate[1],
        year: arrDate[2],
      };
    }
  };
  const handleStyleTitle = (styleTitle) => {
    const arr = styleTitle.split(" ");
    return {
      fontSize: arr[0],
      fontWeight: arr[1],
      "-webkit-line-clamp": arr[2] ? arr[2] : "2",
      marginTop: marginTopTitle,
    };
  };
  const handleStyleTypeNews = (styleTypeNews) => {
    const arr = styleTypeNews.split(" ");
    return {
      color: arr.includes("color"),
      box: arr.includes("box"),
    };
  };
  console.log(handleStyleTypeNews(styleTypeNews));
  const dateMode = handleDateMode(data.date);

  return (
    <div className={cx("wrapper", classnames)}>
      {data.img && (
        <div
          style={{
            width: widthPicture,
            height: heightPicture,
          }}
          className={cx("img-box")}
        >
          {dateInPicture && data.date && (
            <div className={cx("date-mode")}>
              <Date
                day={dateMode.day}
                month={dateMode.month}
                year={dateMode.year}
              />
            </div>
          )}
          <div
            style={{
              backgroundImage: getUrlImage(data.img),
            }}
            className={cx("img")}
          ></div>
        </div>
      )}
      <div className={cx("container", classnames)}>
        {dateInContent && data.date && (
          <div className={cx("container__date-mode")}>
            <Date
              large
              day={dateMode.day}
              month={dateMode.month}
              year={dateMode.year}
            />
          </div>
        )}
        <div className={cx("container__content", { dateInContent })}>
          <span
            style={handleStyleTitle(styleTitle)}
            className={cx("content__title", { whiteLetters })}
          >
            {data.title}
          </span>
          {data.type && (
            <span
              className={cx(
                "content__type-news",
                handleStyleTypeNews(styleTypeNews)
              )}
            >
              {data.type}
            </span>
          )}

          {data.date && !dateInContent && !dateInPicture && (
            <span className={cx("content__date-basic")}>
              <img src={images.clock} alt="" />
              {data.date}
            </span>
          )}
          <span
            style={{
              "-webkit-line-clamp": lineClampSubTitle,
            }}
            className={cx("content__sub-title", { whiteLetters })}
          >
            {data.subTitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsBlock;
