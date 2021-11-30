import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";
import clandingicon1 from "../assets/clanding/clanding-2-1.png";
import clandingicon2 from "../assets/clanding/clanding-2-2.png";
import clandingicon3 from "../assets/clanding/clanding-2-3.png";
import plandingicon7 from "../assets/planding/planding-7-1.png";
import plandingicon8 from "../assets/planding/planding-7-2.png";
import plandingicon9 from "../assets/planding/planding-7-3.png";
import { SimpleBuyTable } from "../components/SimpleBuyTable";
import { Swiper, SwiperSlide } from "swiper/react";
import "./simplebuy.css";
const decorator = require("./metaDecorator.json");

function SimpleBuy() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Худалдан авалтын зээл</title>
        <meta name="description" content="Худалдан авалтын зээл" />
        <meta property="og:description" content="Худалдан авалтын зээл" />
        <meta property="og:title" content="Худалдан авалтын зээл" />
        <meta
          name="image"
          property="og:image"
          content="https://cms.simple.mn/uploads/simple_2_cec8b7aec6.png"
        />
        <meta
          property="og:url"
          content={
            decorator.hostname +
            window.location.pathname +
            window.location.search
          }
        />
      </Helmet>
      <div className="landing-container">
        <div className="sb-1-background">
          {/* <img src={clandingbackground1} alt="" /> */}
          <div className="clanding-1-div"></div>
        </div>
        <div className="clanding-1-mobile-background">
          <div className="clanding-1-mobile-div sb"></div>
        </div>
        <div data-aos="fade-up" className="clanding-2-div">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon1} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хэмжээ</p>
                <p className="clanding-2-description">20 сая хүртэлх</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon2} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хугацаа​</p>
                <p className="clanding-2-description">1-24 сар хүртэл</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon3} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хүү</p>
                <p className="clanding-2-description">0.0% - 3.0%</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="requirements"
          name="requirements"
          data-aos="fade-up"
          className="clanding-3-div sb"
        >
          <p data-aos="fade-up" className="clanding-title">
            Simple Buy
          </p>
          <div className="clanding-divider"></div>
          <div data-aos="flip-up" className="clanding-3-table">
            <SimpleBuyTable type={1} />
            <SimpleBuyTable type={2} />
            <SimpleBuyTable type={3} />
            <SimpleBuyTable type={4} />
          </div>
          <div data-aos="flip-up" className="clanding-3-table-ipad">
            <SimpleBuyTable ipad={true} type={2} />
            <SimpleBuyTable ipad={true} type={3} />
            <SimpleBuyTable ipad={true} type={4} />
          </div>
          <div className="clanding-3-mobile-table">
            <Swiper pagination spaceBetween={15}>
              <SwiperSlide>
                <SimpleBuyTable ipad={true} type={2} />
              </SwiperSlide>
              <SwiperSlide>
                <SimpleBuyTable ipad={true} type={3} />
              </SwiperSlide>
              <SwiperSlide>
                <SimpleBuyTable ipad={true} type={4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="sb-landing-div">
          <div className="sb-landing-text-div">
            <p className="sb-landing-div-title">After pay</p>
            <p className="sb-landing-div-description">
              Одоо аваад 30 хоногийн дотор эргэн төлж болно. Хугацаандаа төлсөн
              л бол ямар ч хүү болон шимтгэлгүй, үүү!
            </p>
          </div>
          <div className="sb-landing-text-div">
            <p className="sb-landing-div-title">Installment</p>
            <p className="sb-landing-div-description">
              4 хувааж төлөх үү, 6 хувааж эргэн төлөх үү өөрөө л мэд дээ. Мэдээж
              хугацаандаа төлсөн л бол ямар ч хүү болон шимтгэлгүй, үүү!
            </p>
          </div>
          <div className="sb-landing-text-div" style={{ marginRight: 0 }}>
            <p className="sb-landing-div-title">Leasing</p>
            <p className="sb-landing-div-description">
              За больё, илүү урт 24 сар хүртэлх хугацаатай лизингээр хүссэн
              бараа, бүтээгдэхүүнээ аваарай.
            </p>
          </div>
        </div>
        <div className="planding-3-mobile-background sb">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
          >
            <div className="planding-3-top sb">
              <p className="planding-3-title sb">After pay</p>
            </div>
            <p className="planding-3-description sb">
              Одоо аваад 30 хоногийн дотор эргэн төлж болно. Хугацаандаа төлсөн
              л бол ямар ч хүү болон шимтгэлгүй, үүү!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
          >
            <div className="planding-3-top">
              <p className="planding-3-title sb">Installment</p>
            </div>
            <p className="planding-3-description sb">
              4 хувааж төлөх үү, 6 хувааж эргэн төлөх үү өөрөө л мэд дээ. Мэдээж
              хугацаандаа төлсөн л бол ямар ч хүү болон шимтгэлгүй, үүү!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
            style={{ marginRight: 0 }}
          >
            <div className="planding-3-top">
              <p className="planding-3-title sb ">Leasing</p>
            </div>
            <p className="planding-3-description sb">
              За больё, илүү урт 24 сар хүртэлх хугацаатай лизингээр хүссэн
              бараа, бүтээгдэхүүнээ аваарай.
            </p>
          </div>
        </div>
        <div className="planding-7-background">
          <div className="planding-7-div">
            <img
              data-aos-duration="500"
              data-aos-offset="100"
              data-aos="zoom-in"
              className="planding-7-qr"
              src={plandingicon7}
              alt=""
            />
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="planding-7-description"
            >
              Манайхаан, QR кодыг уншуулж Simple
              <br />
              аппликэйшнийг татаж аваарай.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="planding-7-mobile-description"
            >
              Манайхаан, QR кодыг уншуулж <br />
              Simple аппликэйшнийг <br />
              татаж аваарай.
            </p>
            <a
              href="https://apps.apple.com/us/app/id1527026555"
              target="_blank"
              rel="noreferrer"
            >
              <img
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-offset="100"
                className="planding-7-download"
                src={plandingicon8}
                style={{ marginRight: 8.5 }}
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=mn.mllc.ashid"
              target="_blank"
              rel="noreferrer"
            >
              <img
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-offset="100"
                className="planding-7-download"
                src={plandingicon9}
                style={{ marginLeft: 8.5 }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleBuy;
