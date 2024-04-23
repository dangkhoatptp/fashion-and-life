import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

import images from "../../assets/images";

const cx = classNames.bind(styles);
const socials = [
  images.socials.facebook,
  images.socials.twitter,
  images.socials.youtube,
  images.socials.zalo,
  images.socials.whatsapp,
];

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container-top")}>
        <div className={cx("main-column")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="logo" />
          </div>
          <p>
            <strong>Du lịch & Doanh nhân</strong> trực thuộc{" "}
            <span style={{ color: "red" }}>Thương gia & Thị trường</span>
          </p>
          <p>
            <strong>
              CƠ QUAN NGÔN LUẬN HIỆP HỘI THƯƠNG MẠI ĐIỆN TỬ VIỆT NAM
            </strong>
          </p>
          <p>GP số: 148/GP-Bộ TTTT cấp ngày 23/12/2013</p>
          <p>
            <span style={{ color: "var(--text-color)" }}>
              Tổng Biên tập: Hồ Hải Long
            </span>
          </p>
          <p>
            Trụ sở: 177 Đặng Văn Lãnh, Xã Phong Nẫm, TP Phan Thiết, Tỉnh Bình
            Thuận
          </p>
          <p>
            VP đại diện HCM: 40 đường số 6, KDC Cityland , Phường 10, Quận Gò
            Vấp, HCM
          </p>
          <p>
            VP đại diện Hà Nội:Toà soạn: P. 3626, Tầng 36, HH4B, KĐT.Linh Đàm,
            P. Hoàng Liệt, Q. Hoàng Mai, TP. Hà Nội
          </p>
          <p>Tầng M, toà Thăng Long, 33 Mạc Thái Tổ, Yên Hoà, Cầu Giấy, HN</p>
          <p style={{ color: "red", marginTop: "20px" }}>
            Trang thông tin được bảo trợ của Thương gia & Thị trường
          </p>
        </div>
        <div className={cx("sub-column")}>
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <p>
            Liên hệ: <strong>0377750339 || 0933253386</strong> Thùy Dương
          </p>
          <p>
            Liên hệ: <strong>0886234555 (zalo) || 0377750339</strong> (zalo)
            Thùy Dương
          </p>
        </div>
        <div className={cx("sub-column")}>
          <h2>LIÊN KẾT</h2>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/bocatvangtour/?ref=embed_page"
            data-tabs="timeline"
            data-width="291"
            data-height="130"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/bocatvangtour/?ref=embed_page"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/bocatvangtour/?ref=embed_page">
                Bờ Cát Vàng Travel
              </a>
            </blockquote>
          </div>
          <div className={cx("socials")}>
            {socials.map((item, index) => {
              return (
                <a key={index} href="#">
                  <img src={item} alt="social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cx("container-bottom")}>
        <p>
          <strong>DOANH NHÂN & DU LỊCH</strong> giữ bản quyền nội dung trên
          website này.
        </p>
        <p>
          Chúng tôi không chịu trách nhiệm nội dung các trang được mở ra ở cửa
          sổ mới.
        </p>
      </div>
    </div>
  );
}

export default Footer;
