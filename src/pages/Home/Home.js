import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import { NewsBlock } from "../../components";
import images from "../../assets/images";

const cx = classNames.bind(styles);
const newsList01 = [
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
const newsList02 = [
  {
    img: images.img05,
    title: "Khám phá Măng Đen - Lá phổi xanh của núi rừng Tây Nguyên",
    subTitle:
      "DLDN - Măng Đen - lá phổi xanh của Tây Nguyên là địa điểm mà du khách yêu thích thiên nhiên không thể bỏ qua trong mùa hè này.",
    type: "Du lịch",
    date: "11/04/2024",
  },
  {
    img: images.img06,
    title: "Bất ngờ về thu nhập của Shark Hồng Anh ở doanh nghiệp địa ốc",
    subTitle:
      "DLDN - Cùng với kết quả kinh doanh thụt lùi của doanh nghiệp, thu nhập của Shark Hồng Anh cũng ghi nhận giảm mạnh trong năm vừa qua.",
    type: "Kinh doanh",
    date: "11/04/2024",
  },
  {
    img: images.img07,
    title:
      "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
    subTitle:
      'DLDN - Lý Nhã Kỳ cho biết cô đang có trên dưới 400 chiếc túi đủ kiểu đến từ những thương hiệu lớn trên thế giới, trị giá khoảng 50 tỷ đồng, thế mới biết kho hàng hiệu của người đẹp "khủng" thế nào.',
    type: "Thời trang",
    date: "10/04/2024",
  },
  {
    img: images.img07,
    title:
      "Tuyên bố có hơn 400 tỷ, 5 két sắt kim cương, vậy kho hàng hiệu của Lý Nhã Kỳ thế nào?",
    subTitle:
      'DLDN - Lý Nhã Kỳ cho biết cô đang có trên dưới 400 chiếc túi đủ kiểu đến từ những thương hiệu lớn trên thế giới, trị giá khoảng 50 tỷ đồng, thế mới biết kho hàng hiệu của người đẹp "khủng" thế nào.',
    type: "Kinh doanh",
    date: "10/04/2024",
  },
  {
    img: images.img08,
    title:
      "Làm Phó tổng giám đốc tại Ninh Vân Bay, hoa hậu Ngọc Hân có thu nhập thế nào?",
    subTitle:
      "DLDN - Dù chỉ giữ vị trí Phó tổng giám đốc của Ninh Vân Bay, hoa hậu Đặng Thị Ngọc Hân lại là người có thu nhập cao nhất trong ban lãnh đạo của doanh nghiệp này.",
    type: "Du lịch",
    date: "11/04/2024",
  },
];
const newsList03 = [
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
const newsList04 = [
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
const newsList05 = [
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
const newsList06 = [
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
const newsList07 = [
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
const newsList08 = [
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
];
const newsList09 = [
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
];
const newsList10 = [
  {
    img: images.img27,
    title: "Khi ăn nấm, nhớ cho kỹ những lưu ý này kẻo ngộ độc chết người",
    date: "06/03/2024",
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
      {/* Container point */}
      <div className={cx("container")}>
        <div className={cx("flex-column-9", "margin-right-30")}>
          <NewsBlock
            data={{
              img: images.img01,
              title:
                "Đến ngoại ô TP.HCM chiêm ngưỡng cánh đồng cỏ tranh đẹp như mơ",
              date: "17/04/2024",
              subTitle:
                "DLDN - Cánh đồng cỏ tranh trắng muốt mang vẻ đẹp thơ mộng, hoang sơ tại làng đại học Thủ Đức trở thành điểm check-in lí tưởng của nhiều bạn trẻ dịp cuối tuần.",
            }}
            verticalBlock
            widthPicture="100%"
            heightPicture="470px"
            dateInContent
            styleTitle="2.5rem 600"
          />
          <ul className={cx("horizontal-list", "margin-top-30")}>
            {newsList01.map((item, index) => {
              return (
                <li key={index} className={cx("item-list-01")}>
                  <NewsBlock
                    data={item}
                    verticalBlock
                    widthPicture="100%"
                    heightPicture="166px"
                    styleTitle="1.6rem 600 3"
                  />
                </li>
              );
            })}
          </ul>
          <ul className={cx("vertical-list", "margin-top-30")}>
            {newsList02.map((item, index) => {
              return (
                <li key={index} className={cx("item-list-02")}>
                  <NewsBlock
                    data={item}
                    horizontalBlock
                    widthPicture="276px"
                    heightPicture="181px"
                    dateInPicture
                    styleTitle="2rem 600"
                    styleTypeNews="color box"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cx("flex-column-4")}>
          <div className={cx("vertical-list")}>
            <div className={cx("title-list")}>bài viết mới nhất</div>
            <ul className={cx("vertical-list")}>
              {newsList03.map((item, index) => {
                return (
                  <li key={index} className={cx("item-list-03")}>
                    <NewsBlock
                      horizontalBlock
                      data={item}
                      widthPicture="94px"
                      heightPicture="69px"
                      styleTitle="1.6rem 500"
                      styleTypeNews="color"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Container point */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
        className={cx("container")}
      >
        <div className={cx("flex-column-7", "margin-right-30")}>
          <div className={cx("title-column")}>
            <img src={images.tit} alt="" />
            du lịch
          </div>
          <div
            style={{ display: "flex", flexWrap: "nowrap" }}
            className={cx("margin-top-30")}
          >
            <div className={cx("flex-column-4", "margin-right-10")}>
              <NewsBlock
                verticalBlock
                data={{
                  img: images.img01,
                  title:
                    "Đến ngoại ô TP.HCM chiêm ngưỡng cánh đồng cỏ tranh đẹp như mơ",
                  date: "17/04/2024",
                  subTitle:
                    "DLDN - Cánh đồng cỏ tranh trắng muốt mang vẻ đẹp thơ mộng, hoang sơ tại làng đại học Thủ Đức trở thành điểm check-in lí tưởng của nhiều bạn trẻ dịp cuối tuần.",
                }}
                widthPicture="100%"
                heightPicture="290px"
                styleTitle="2.5rem 500 3"
              />
            </div>
            <ul className={cx("flex-column-3")}>
              {newsList04.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{ flex: "1" }}
                    className={cx("news-list-04")}
                  >
                    <NewsBlock
                      horizontalBlock
                      data={item}
                      widthPicture="123px"
                      heightPicture="89px"
                      styleTitle="1.5rem 600 3"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            style={{
              paddingTop: "50px",
              paddingBottom: "30px",
              borderTop: "1px solid #e3e3e3",
              marginTop: "30px",
            }}
            className={cx("title-column")}
          >
            <img src={images.tit} alt="" />
            văn hóa - giải trí
          </div>
          <NewsBlock
            verticalBlock
            data={{
              img: images.img12,
              title:
                "Thanh Thúy 1m93 sẽ thi đấu ở giải bóng chuyền đẳng cấp hàng đầu thế giới",
              date: "11/04/2024",
              subTitle:
                "DLDN - Lãnh đạo của đội bóng chuyền VTV Bình Điền Long An đã hé lộ quốc gia tiếp theo mà chủ công Trần Thị Thanh Thúy sẽ xuất ngoại thi đấu.",
            }}
            widthPicture="100%"
            heightPicture="440px"
            styleTitle="2.5rem 600"
          />
          <ul className={cx("horizontal-list", "margin-top-30")}>
            {newsList05.map((item, index) => {
              return (
                <li key={index} className={cx("item-list-05")}>
                  <NewsBlock
                    data={item}
                    verticalBlock
                    widthPicture="100%"
                    heightPicture="165px"
                    styleTitle="1.5rem 600"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cx("flex-column-3")}>
          <div
            style={{ padding: "10px", backgroundColor: "var(--white-color)" }}
            className={cx("vertical-list")}
          >
            <div className={cx("title-list")}>tin đọc nhiều</div>
            <img
              style={{ marginTop: "4px", marginBottom: "20px" }}
              height={4}
              width={59}
              src={images.titSide}
              alt=""
            />
            <ul className={cx("vertical-list")}>
              {newsList06.map((item, index) => {
                return (
                  <li key={index} className={cx("item-list-06")}>
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "0",
                        fontSize: "5rem",
                        color: "#d2d2d2",
                        lineHeight: "5rem",
                      }}
                    >
                      {index + 1}
                    </div>
                    <NewsBlock
                      horizontalBlock
                      data={item}
                      styleTitle="1.6rem 500 3"
                      styleTypeNews="color box"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Container point */}
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          padding: "50px 25px 40px",
        }}
        className={cx("container", "vertical-list")}
      >
        <div
          style={{ color: "var(--white-color)" }}
          className={cx("title-column")}
        >
          <img src={images.titW} alt="" />
          doanh nhân
        </div>
        <ul className={cx("horizontal-list")}>
          {newsList07.map((item, index) => {
            return (
              <li key={index} className={cx("item-list-07", "margin-top-20")}>
                <NewsBlock
                  verticalBlock
                  data={item}
                  widthPicture="100%"
                  heightPicture="280px"
                  whiteLetters
                  styleTitle="2rem 600"
                />
              </li>
            );
          })}
        </ul>
      </div>
      {/* Container point */}
      <div
        style={{ backgroundColor: "#f5f5f5", paddingBottom: "40px" }}
        className={cx("container", "vertical-list")}
      >
        <div className={cx("title-column")}>
          <img src={images.tit} alt="" />
          bất động sản
        </div>
        <div className={cx("horizontal-list", "margin-top-20")}>
          <div
            style={{
              backgroundColor: "#ededed",
              overflow: "hidden",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              paddingRight: "10px",
            }}
            className={cx("flex-column-2", "margin-right-30")}
          >
            <NewsBlock
              horizontalBlock
              data={{
                img: images.img02,
                title: "Giá chung cư mới TP HCM ngược chiều Hà Nội",
                date: "17/04/2024",
                subTitle:
                  "DLDN - Tới hết quý I, giá căn hộ mới ở TP HCM giảm 3%, bình quân 61 triệu đồng mỗi m2, trái ngược với đà tăng 19% của chung cư Hà Nội.",
              }}
              widthPicture="440px"
              heightPicture="444px"
              styleTitle="2.2rem 600 2"
              marginTopTitle="40px"
              lineClampSubTitle="10"
            />
          </div>
          <div className={cx("flex-column-1")}>
            <ul className={cx("vertical-list")}>
              {newsList08.map((item, index) => {
                return (
                  <li key={index} className={cx("item-list-08")}>
                    <NewsBlock
                      horizontalBlock
                      data={item}
                      widthPicture="127px"
                      heightPicture="96px"
                      styleTitle="1.6rem 500"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Container point */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          paddingTop: "40px",
          paddingBottom: "60px",
          borderTop: "1px solid #e3e3e3",
        }}
        className={cx("container", "vertical-list")}
      >
        <div className={cx("title-column")}>
          <img src={images.tit} alt="" />
          thời trang
        </div>
        <div className={cx("horizontal-list", "margin-top-20")}>
          <div
            style={{
              backgroundColor: "var(--white-color)",
              overflow: "hidden",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              paddingRight: "10px",
            }}
            className={cx("flex-column-2", "margin-right-30")}
          >
            <NewsBlock
              horizontalBlock
              data={{
                img: images.img09,
                title:
                  "Trước khi lấy chồng doanh nhân, Midu là “đại gia bất động sản” chăm mặc gợi cảm",
                date: "17/04/2024",
                subTitle:
                  "DLDN - Thông tin nữ diễn viên sắp lên xe hoa gây chú ý.",
              }}
              widthPicture="440px"
              heightPicture="444px"
              styleTitle="2.2rem 600 2"
              marginTopTitle="40px"
              lineClampSubTitle="10"
            />
          </div>
          <div className={cx("flex-column-1")}>
            <ul className={cx("vertical-list")}>
              {newsList09.map((item, index) => {
                return (
                  <li key={index} className={cx("item-list-08")}>
                    <NewsBlock
                      horizontalBlock
                      data={item}
                      widthPicture="127px"
                      heightPicture="96px"
                      styleTitle="1.6rem 500"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Container point */}
      <div
        style={{
          padding: "60px",
        }}
        className={cx("container", "vertical-list")}
      >
        <div className={cx("title-column")}>
          <img src={images.tit} alt="" />
          làm đẹp
        </div>
        <div style={{ marginTop: "20px" }} className={cx("horizontal-list")}>
          <div style={{ marginRight: "20px" }} className={cx("flex-column-2")}>
            <NewsBlock
              data={{
                img: images.img25,
                title: "Cách làm gà lắc giòn rụm dễ đến không ngờ",
                date: "21/03/2024",
                subTitle:
                  "DLDN - Ức gà bị nhiều người chê vì khó chế biến, dễ bị khô. Nhưng đây là phần thịt rất bổ dưỡng và nếu biết cách sẽ làm được rất nhiều món ngon hấp dẫn.",
              }}
              verticalBlock
              styleTitle="2.2rem 600"
              widthPicture="100%"
              heightPicture="340px"
            />
          </div>
          <div style={{ marginRight: "20px" }} className={cx("flex-column-2")}>
            <NewsBlock
              data={{
                img: images.img26,
                title:
                  "Thêm một cách chế biến tôm tuyệt ngon, cực kỳ hao cơm, người vụng mấy cũng làm được",
                date: "15/03/2024",
                subTitle:
                  "DLDN - Tôm siêu nhiều canxi, cực tốt cho sức khỏe. Chế biến theo cách này đã bổ lại càng thơm ngon, tốn cơm.",
              }}
              verticalBlock
              styleTitle="2.2rem 600"
              widthPicture="100%"
              heightPicture="340px"
            />
          </div>
          <ul className={cx("flex-column-1", "vertical-list")}>
            {newsList10.map((item, index) => {
              return (
                <li key={index} className={cx("item-list-10")}>
                  <NewsBlock
                    data={item}
                    verticalBlock
                    widthPicture="100%"
                    heightPicture="188px"
                    styleTitle="1.6rem 500"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
