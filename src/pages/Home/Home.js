import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import { Date, Block } from "../../components";
import images from "../../assets/images";

const cx = classNames.bind(styles);
const newsListHorizontal = [
  {
    img: images.img02,
    title: "Giá chung cư mới TP.HCM ngược chiều Hà Nội",
    type: "Bất động sản",
  },
  {
    img: images.img03,
    title:
      "Dịch vụ Chuyển phát Nhanh của J&T Express thu hút hàng nghìn khách tham quan tại TikTok Shop Việt Nam Summit 2024",
    type: "Doanh Nghiệp",
  },
  {
    img: images.img04,
    title:
      "Hướng đến tương lai: Sứ mệnh Tập đoàn Y dược EBC qua tâm thư của chủ tịch Đinh Văn Liên",
    type: "Doanh Nghiệp",
  },
];
const newsListVertical = [
  {
    img: images.img05,
    title: "Khám phá Măng Đen - Lá phổi xanh của núi rừng Tây Nguyên",
    subTitle:
      "DLDN - Măng Đen - lá phổi xanh của Tây Nguyên là địa điểm mà du khách yêu thích thiên nhiên không thể bỏ qua trong mùa hè này.",
    type: "Du lịch",
    day: 11,
    month: 4,
    year: 2024,
  },
  {
    img: images.img06,
    title: "Bất ngờ về thu nhập của Shark Hồng Anh ở doanh nghiệp địa ốc",
    subTitle:
      "DLDN - Cùng với kết quả kinh doanh thụt lùi của doanh nghiệp, thu nhập của Shark Hồng Anh cũng ghi nhận giảm mạnh trong năm vừa qua.",
    type: "Kinh doanh",
    day: 11,
    month: 4,
    year: 2024,
  },
  {
    img: images.img07,
    title:
      "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
    subTitle:
      'DLDN - Lý Nhã Kỳ cho biết cô đang có trên dưới 400 chiếc túi đủ kiểu đến từ những thương hiệu lớn trên thế giới, trị giá khoảng 50 tỷ đồng, thế mới biết kho hàng hiệu của người đẹp "khủng" thế nào.',
    type: "Thời trang",
    day: 10,
    month: 4,
    year: 2024,
  },
  {
    img: images.img07,
    title:
      "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
    subTitle:
      'DLDN - Lý Nhã Kỳ cho biết cô đang có trên dưới 400 chiếc túi đủ kiểu đến từ những thương hiệu lớn trên thế giới, trị giá khoảng 50 tỷ đồng, thế mới biết kho hàng hiệu của người đẹp "khủng" thế nào.',
    type: "Kinh doanh",
    day: 10,
    month: 4,
    year: 2024,
  },
  {
    img: images.img08,
    title:
      "Làm Phó tổng giám đốc tại Ninh Vân Bay, hoa hậu Ngọc Hân có thu nhập thế nào?",
    subTitle:
      "DLDN - Dù chỉ giữ vị trí Phó tổng giám đốc của Ninh Vân Bay, hoa hậu Đặng Thị Ngọc Hân lại là người có thu nhập cao nhất trong ban lãnh đạo của doanh nghiệp này.",
    type: "Du lịch",
    day: 11,
    month: 4,
    year: 2024,
  },
];
const newsNewestVertical = [
  {
    img: images.img09,
    title:
      "Trước khi lấy chồng doanh nhân, Midu là “đại gia bất động sản” chăm mặc gợi cảm",
    type: "Thời trang",
  },
  {
    img: images.img10,
    title:
      "Sun Ponte Residence – tổ hợp BĐS đẳng cấp ven sông Hàn chính thức lộ diện",
    type: "Bất động sản",
  },
  {
    img: images.img11,
    title:
      "Tập đoàn sản xuất tàu lớn nhất thế giới đề xuất làm 3 tuyến tàu điện không ray ART ‘siêu rẻ’ ở Hà Nội",
    type: "Kinh doanh",
  },
  {
    img: images.img12,
    title:
      "Thanh Thúy 1m93 sẽ thi đấu ở giải bóng chuyền đẳng cấp hàng đầu thế giới",
    type: "Thể thao",
  },
];
const newsTourismListVertical = [
  {
    img: images.img05,
    title: "Khám phá Măng Đen - Lá phổi xanh của núi rừng Tây Nguyên",
    date: "11/04/2024",
  },
  {
    img: images.img13,
    title: "5 bãi biển đẹp nhất Việt Nam nhất định phải đi trong mùa hè 2024",
    date: "06/04/2024",
  },
  {
    img: images.img14,
    title: "Ngắm hoa gạo nở đỏ rực bên ngôi chùa ngàn năm tuổi ở Hà Nội",
    date: "27/03/2024",
  },
  {
    img: images.img15,
    title: "Lynn Times Thanh Thuỷ sở hữu giấy phép khai thác khoáng nóng",
    date: "26/03/2024",
  },
  {
    img: images.img16,
    title: "Nhiều người đổ xô, chen lấn chỉ để check-in với một cây hoa",
    date: "23/03/2024",
  },
];
const newsCultureEntertainmentListOther = [
  {
    img: images.img17,
    title:
      "Long Châu tiên phong ra mắt sổ tiêm chủng điện tử đầu tiên tại Việt Nam",
    date: "22/03/2024",
  },
  {
    img: images.img18,
    title:
      'Thái Lan - Indonesia - Singapore "mở hội", ĐT Việt Nam làm fan thất vọng',
    date: "22/03/2024",
  },
  {
    img: images.img19,
    title:
      'Dàn "chân dài" bóng chuyền nữ Thanh Hóa ăn mừng như vô địch khi thắng đại gia Đức Giang',
    date: "19/03/2024",
  },
];
const hotNewsList = [
  {
    title:
      "Hoa hậu Trịnh Thanh Hồng đẹp lộng lẫy sau khi đăng quang Hoa hậu Thế Giới Người Việt",
    type: "Sự kiện",
  },
  {
    title:
      "Hoa Hậu Trịnh Thanh Hồng rạng ngời trong những ngày đầu năm tết nguyên đán 2023 với nhiều kế hoạch mới",
    type: "Văn hóa - Giải trí",
  },
  {
    title: "Cao Thái Hà: 'Lan Ngọc xứng đáng giành giải Mai Vàng'",
    type: "Văn hóa - Giải trí",
  },
  {
    title: "20 thí sinh trình diễn bikini đẹp nhất bán kết Miss Universe",
    type: "Thời trang",
  },
  {
    title: "Lời ngỏ Du lịch Doanh nhân",
    type: "Thư ngỏ",
  },
];
const newsBusinessList = [
  {
    img: images.img03,
    title:
      "Dịch vụ Chuyển phát Nhanh của J&T Express thu hút hàng nghìn khách tham quan tại TikTok Shop Việt Nam Summit 2024",
    date: "17/04/2024",
    subTitle:
      "DLDN - Gian hàng J&T Express tại sự kiện TikTok Shop Việt Nam Summit 2024 thu hút lên tới cả nghìn lượt khách ghé thăm, tìm hiểu về hệ sinh thái dịch vụ vận chuyển và các chương trình ưu đãi hấp dẫn mà thương hiệu đang triển khai.",
  },
  {
    img: images.img04,
    title:
      "Hướng đến tương lai: Sứ mệnh Tập đoàn Y dược EBC qua tâm thư của chủ tịch Đinh Văn Liên",
    date: "17/04/2024",
    subTitle:
      "DLDN - Trong Hội nghị Ban Lãnh đạo, Cán bộ chủ chốt Tập đoàn Y dược EBC vừa qua, Dược sĩ Đinh Văn Liên, Chủ tịch Hội Đồng Quản Trị đã có những lời phát biểu tâm huyết gửi đến tất cả đội ngũ nhân sự đã và đang cống hiến hết mình vì sự hưng thịnh của EBC.",
  },
  {
    img: images.img11,
    title:
      "Tập đoàn sản xuất tàu lớn nhất thế giới đề xuất làm 3 tuyến tàu điện không ray ART ‘siêu rẻ’ ở Hà Nội",
    date: "11/04/2024",
    subTitle:
      "DLDN - Đại diện hỗ trợ kỹ thuật và phát triển dự án đường sắt ART của Tập đoàn CRRC tại Việt Nam đã đề xuất làm 3 tuyến tàu điện thông minh chạy không ray tại Hà Nội.",
  },
  {
    img: images.img06,
    title: "Bất ngờ về thu nhập của Shark Hồng Anh ở doanh nghiệp địa ốc",
    date: "11/04/2024",
    subTitle:
      "DLDN - Cùng với kết quả kinh doanh thụt lùi của doanh nghiệp, thu nhập của Shark Hồng Anh cũng ghi nhận giảm mạnh trong năm vừa qua.",
  },
];
const newsRealEstate_FashionList = [
  {
    title: "BẤT ĐỘNG SẢN",
    mainNews: {
      img: images.img02,
      title: "Giá chung cư mới TP HCM ngược chiều Hà Nội",
      date: "17/04/2024",
      subTitle:
        "DLDN - Tới hết quý I, giá căn hộ mới ở TP HCM giảm 3%, bình quân 61 triệu đồng mỗi m2, trái ngược với đà tăng 19% của chung cư Hà Nội.",
    },
    newsOther: [
      {
        img: images.img10,
        title:
          "Sun Ponte Residence – tổ hợp BĐS đẳng cấp ven sông Hàn chính thức lộ diện",
        date: "11/04/2024",
      },
      {
        img: images.img20,
        title:
          "Không phải chung cư, đây mới là loại hình BĐS tăng giá nhiều nhất khiến người mua choáng váng",
        date: "08/04/2024",
      },
      {
        img: images.img21,
        title:
          "Giá nhà ở xã hội tăng như “lên đồng”, có nơi gấp 4 lần dù đã sử dụng hơn chục năm",
        date: "04/04/2024",
      },
      {
        img: images.img22,
        title:
          "New Orchard: “Miền đất hứa” cho đầu tư bất động sản tại Sông Công - Phổ Yên",
        date: "03/04/2024",
      },
    ],
  },
  {
    title: "THỜI TRANG",
    mainNews: {
      img: images.img09,
      title:
        "Trước khi lấy chồng doanh nhân, Midu là “đại gia bất động sản” chăm mặc gợi cảm",
      date: "17/04/2024",
      subTitle: "DLDN - Thông tin nữ diễn viên sắp lên xe hoa gây chú ý.",
    },
    newsOther: [
      {
        img: images.img07,
        title:
          "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
        date: "10/04/2024",
      },
      {
        img: images.img07,
        title:
          "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
        date: "11/04/2024",
      },
      {
        img: images.img23,
        title: "Tân Hoa hậu Hoà bình Thái Lan đẹp như búp bê sống",
        date: "08/04/2024",
      },
      {
        img: images.img24,
        title:
          "Vợ sắp cưới của TiTi (HKT) xinh đẹp, có gu thời trang táo bạo hút mắt",
        date: "06/04/2024",
      },
    ],
  },
];
const newsBeautifyMainColumn = [
  {
    img: images.img25,
    title: "Cách làm gà lắc giòn rụm dễ đến không ngờ",
    date: "21/03/2024",
    subTitle:
      "DLDN - Ức gà bị nhiều người chê vì khó chế biến, dễ bị khô. Nhưng đây là phần thịt rất bổ dưỡng và nếu biết cách sẽ làm được rất nhiều món ngon hấp dẫn.",
  },
  {
    img: images.img26,
    title:
      "Thêm một cách chế biến tôm tuyệt ngon, cực kỳ hao cơm, người vụng mấy cũng làm được",
    date: "15/03/2024",
    subTitle:
      "DLDN - Tôm siêu nhiều canxi, cực tốt cho sức khỏe. Chế biến theo cách này đã bổ lại càng thơm ngon, tốn cơm.",
  },
];
const newsBeautifySubColumn = [
  {
    img: images.img27,
    title: "Cách làm gà lắc giòn rụm dễ đến không ngờ",
    date: "21/03/2024",
    subTitle:
      "DLDN - Ức gà bị nhiều người chê vì khó chế biến, dễ bị khô. Nhưng đây là phần thịt rất bổ dưỡng và nếu biết cách sẽ làm được rất nhiều món ngon hấp dẫn.",
  },
  {
    img: images.img28,
    title: "Tung lò mò - Món ăn độc đáo của đồng bào Chăm",
    date: "05/03/2024",
  },
];

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Block>
        <div className={cx("main-column")}>
          <div className={cx("main-column__main-news-container")}>
            <div className={cx("main-news-container__img")}>
              <img src={images.img01} alt="" />
            </div>
            <div className={cx("main-news-container__content")}>
              <div className={cx("content__date")}>
                <Date large day={17} month={4} year={2024} />
              </div>
              <div className={cx("content__text")}>
                <h2 className={cx("text__title")}>
                  Đến ngoại ô TP.HCM chiêm ngưỡng cánh đồng cỏ tranh đẹp như mơ
                </h2>
                <p className={cx("text__sub-title")}>
                  DLDN - Cánh đồng cỏ tranh trắng muốt mang vẻ đẹp thơ mộng,
                  hoang sơ tại làng đại học Thủ Đức trở thành điểm check-in lí
                  tưởng của nhiều bạn trẻ dịp cuối tuần.
                </p>
              </div>
            </div>
          </div>
          <div className={cx("main-column__main-news-list-horizontal")}>
            {newsListHorizontal.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx("main-news-list-horizontal__main-news-item")}
                >
                  <div className={cx("main-news-item__img")}>
                    <img src={item.img} alt="" />
                  </div>
                  <h2 className={cx("main-news-item__title")}>{item.title}</h2>
                  <span className={cx("main-news-item__type")}>
                    {item.type}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={cx("main-column__main-news-list-vertical")}>
            {newsListVertical.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx(
                    "main-news-list-vertical__main-news-item-vertical"
                  )}
                >
                  <div className={cx("main-news-item-vertical__img")}>
                    <img src={item.img} alt="" />
                    <div className={cx("main-news-item-vertical__date")}>
                      <Date
                        day={item.day}
                        month={item.month}
                        year={item.year}
                      />
                    </div>
                  </div>
                  <div
                    className={cx(
                      "main-news-item-vertical__content-news-item-vertical"
                    )}
                  >
                    <h2 className={cx("content-news-item-vertical__title")}>
                      {item.title}
                    </h2>
                    <span className={cx("content-news-item-vertical__type")}>
                      {item.type}
                    </span>
                    <p className={cx("content-news-item-vertical__sub-title")}>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cx("sub-column")}>
          <div className={cx("sub-column__sub-news-newest-list-vertical")}>
            <div className={cx("sub-news-newest-list-vertical__title")}>
              BÀI VIẾT MỚI NHẤT
            </div>
            {newsNewestVertical.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx(
                    "sub-news-newest-list-vertical__sub-news-newest-item-vertical"
                  )}
                >
                  <div className={cx("sub-news-newest-item-vertical__img")}>
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className={cx(
                      "sub-news-newest-item-vertical__content-sub-news-newest-item-vertical"
                    )}
                  >
                    <h2
                      className={cx(
                        "content-sub-news-newest-item-vertical__title"
                      )}
                    >
                      {item.title}
                    </h2>
                    <span
                      className={cx(
                        "content-sub-news-newest-item-vertical__type"
                      )}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Block>
      <Block styleBlock={{ backgroundColor: "#f5f5f5" }}>
        <div style={{ flex: 5 }} className={cx("main-column")}>
          <div className={cx("main-column__title")}>
            <img
              style={{ marginRight: "8px" }}
              width={26}
              height={54}
              src={images.tit}
              alt=""
            />
            <span
              style={{
                fontSize: "35px",
                color: "var(--primary-color)",
                fontWeight: "500",
              }}
            >
              DU LỊCH
            </span>
          </div>
          <div className={cx("main-column__main-news-tourism-container")}>
            <div className={cx("main-news-tourism-container__first-news")}>
              <div className={cx("first-news__img")}>
                <img src={images.img01} alt="" />
              </div>
              <h2 className={cx("first-news__title")}>
                Đến ngoại ô TP.HCM chiêm ngưỡng cánh đồng cỏ tranh đẹp như mơ
              </h2>
              <span className={cx("first-news-date")}>
                <img src={images.clock} alt="" />
                17/04/2024
              </span>
              <p className={cx("first-news__sub-title")}>
                DLDN - Cánh đồng cỏ tranh trắng muốt mang vẻ đẹp thơ mộng, hoang
                sơ tại làng đại học Thủ Đức trở thành điểm check-in lí tưởng của
                nhiều bạn trẻ dịp cuối tuần.
              </p>
            </div>
            <div className={cx("main-news-tourism-container__list-news-other")}>
              {newsTourismListVertical.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={cx("list-news-other__news-other-item")}
                  >
                    <div className={cx("news-other-item__img")}>
                      <img width={123} height={89} src={item.img} alt="" />
                    </div>
                    <div className={cx("news-other-item__content-news-other")}>
                      <h2 className={cx("content-news-other__title")}>
                        {item.title}
                      </h2>
                      <span className={cx("content-news-other__date")}>
                        <img src={images.clock} alt="" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cx("main-column__line")}></div>
          <div className={cx("main-column__title")}>
            <img
              style={{ marginRight: "8px" }}
              width={26}
              height={54}
              src={images.tit}
              alt=""
            />
            <span
              style={{
                fontSize: "35px",
                color: "var(--primary-color)",
                fontWeight: "500",
              }}
            >
              VĂN HÓA - GIẢI TRÍ
            </span>
          </div>
          <div
            className={cx(
              "main-column__main-news-culture-entertainment-container"
            )}
          >
            <div className={cx("main-news-culture-entermainment__img")}>
              <img src={images.img12} alt="" />
            </div>
            <h2 className={cx("main-news-culture-entertainment__title")}>
              Thanh Thúy 1m93 sẽ thi đấu ở giải bóng chuyền đẳng cấp hàng đầu
              thế giới
            </h2>
            <span className={cx("main-news-culture-entertainment__date")}>
              <img src={images.clock} alt="" />
              11/04/2024
            </span>
            <p className={cx("main-news-culture-entertainment__sub-title")}>
              DLDN - Lãnh đạo của đội bóng chuyền VTV Bình Điền Long An đã hé lộ
              quốc gia tiếp theo mà chủ công Trần Thị Thanh Thúy sẽ xuất ngoại
              thi đấu.
            </p>
          </div>
          <div
            className={cx("main-column__list-news-culture-entertainment-other")}
          >
            {newsCultureEntertainmentListOther.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx(
                    "list-news-culture-entertainment-other__news-item-culture-entertainment-other"
                  )}
                >
                  <div
                    className={cx("news-item-culture-entertainment-other__img")}
                  >
                    <img src={item.img} alt="" />
                  </div>
                  <h2
                    className={cx(
                      "news-item-culture-entertainment-other__title"
                    )}
                  >
                    {item.title}
                  </h2>
                  <span
                    className={cx(
                      "news-item-culture-entertainment-other__date"
                    )}
                  >
                    <img src={images.clock} alt="" />
                    {item.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ flex: 2 }} className={cx("sub-column")}>
          <div className={cx("sub-column__list-hot-news-vertical")}>
            <div className={cx("list-hot-news-vertical__title")}>
              TIN ĐỌC NHIỀU
              <img src={images.titSide} alt="" />
            </div>
            {hotNewsList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx("list-hot-news-vertical__hot-news-item")}
                >
                  <div className={cx("hot-news-item__number")}>{index + 1}</div>
                  <div className={cx("hot-news-item__content-hot-news-item")}>
                    <h2 className={cx("content-hot-news-item__title")}>
                      {item.title}
                    </h2>
                    <span className={cx("content-hot-news-item__type")}>
                      {item.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Block>
      <Block
        styleBlock={{
          padding: "60px 24px 45px",
          backgroundColor: "var(--primary-color)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={cx("news-business-title")}>
          <img src={images.titW} alt="" />
          DOANH NHÂN
        </div>
        <div className={cx("news-business-list")}>
          {newsBusinessList.map((item, index) => {
            return (
              <div
                key={index}
                className={cx("news-business-list__news-business-item")}
              >
                <div className={cx("news-business-item__img")}>
                  <img src={item.img} alt="" />
                </div>
                <h2 className={cx("news-business-item__title")}>
                  {item.title}
                </h2>
                <span className={cx("news-business-item__date")}>
                  <img src={images.clock} alt="" />
                  17/04/2024
                </span>
                <p className={cx("news-business-item__sub-title")}>
                  {item.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </Block>
      <Block
        styleBlock={{
          padding: "45px 60px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {newsRealEstate_FashionList.map((item, index) => {
          return (
            <div key={index} className={cx("group")}>
              <div className={cx("main-column__title")}>
                <img
                  style={{ marginRight: "8px" }}
                  width={26}
                  height={54}
                  src={images.tit}
                  alt=""
                />
                <span
                  style={{
                    fontSize: "35px",
                    color: "var(--primary-color)",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </span>
              </div>
              <div className={cx("group__main-news-container")}>
                <div className={cx("main-news-container__main-column")}>
                  <div className={cx("main-column__img")}>
                    <img src={item.mainNews.img} alt="" />
                  </div>
                  <div className={cx("main-column__main-content")}>
                    <h2 className={cx("main-content__title")}>
                      {item.mainNews.title}
                    </h2>
                    <span className={cx("main-content__date")}>
                      <img src={images.clock} alt="" />
                      {item.mainNews.date}
                    </span>
                    <p className={cx("main-content__subtitle")}>
                      {item.mainNews.subTitle}
                    </p>
                  </div>
                </div>
                <div className={cx("main-news-container__sub-column")}>
                  {item.newsOther.map((i, idx) => {
                    return (
                      <div key={idx} className={cx("sub-column__news-item")}>
                        <div className={cx("news-item__img")}>
                          <img src={i.img} alt="" />
                        </div>
                        <div className={cx("news-item__content-news-item")}>
                          <h2 className={cx("content-news-item__title")}>
                            {i.title}
                          </h2>
                          <span className={cx("content-news-item__date")}>
                            <img src={images.clock} alt="" />
                            {i.date}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Block>
      <Block styleBlock={{ display: "flex", flexDirection: "column" }}>
        <div className={cx("main-column__title")}>
          <img
            style={{ marginRight: "8px" }}
            width={26}
            height={54}
            src={images.tit}
            alt=""
          />
          <span
            style={{
              fontSize: "35px",
              color: "var(--primary-color)",
              fontWeight: "500",
            }}
          >
            LÀM ĐẸP
          </span>
        </div>
        <div className={cx("main-column__news-beautify-container")}>
          <div className={cx("news-beautify-container__main-column")}>
            {newsBeautifyMainColumn.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx("main-column__news-beautify-item")}
                >
                  <div className={cx("news-beautify-item__img")}>
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className={cx(
                      "news-beautify-item__content-news-beautify-item"
                    )}
                  >
                    <h2 className={cx("content-news-beautify-item__title")}>
                      {item.title}
                    </h2>
                    <span className={cx("content-news-beautify-item__date")}>
                      <img src={images.clock} alt="" />
                      {item.date}
                    </span>
                    <p className={cx("content-news-beautify-item__subTitle")}>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={cx("news-beautify-container__sub-column")}>
            {newsBeautifySubColumn.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx("sub-column__news-beautify-item-sub")}
                >
                  <div className={cx("news-beautify-item-sub__img")}>
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className={cx(
                      "news-beautify-item-sub__content-news-beautify-item-sub"
                    )}
                  >
                    <h2 className={cx("content-news-beautify-item-sub__title")}>
                      {item.title}
                    </h2>
                    <span
                      className={cx("content-news-beautify-item-sub__date")}
                    >
                      <img src={images.clock} alt="" />
                      {item.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Block>
    </div>
  );
}

export default Home;
