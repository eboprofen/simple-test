import React, { useEffect } from "react";
import clandingicon1 from "../assets/clanding/clanding-2-1.png";
import clandingicon2 from "../assets/clanding/clanding-2-2.png";
import clandingicon3 from "../assets/clanding/clanding-2-3.png";
import clandingicon6 from "../assets/ic_success.png";
import clandingicon7 from "../assets/clanding/clanding-5-1.png";
import clandingicon8 from "../assets/clanding/clanding-5-2.png";
import clandingicon9 from "../assets/clanding/clanding-5-3.png";
import clandingicon10 from "../assets/clanding/clanding-5-4.png";
import background2 from "../assets/clanding/clanding-4-background.png";
import background3 from "../assets/clanding/clanding-6-background.png";
import mobile1 from "../assets/clanding/clanding-6-mobile.png";
import mobile2 from "../assets/clanding/clanding-4-mobile.png";
import mobile3 from "../assets/clanding/clanding-6-mobile-small.png";
import { CLandingTable } from "../components/CLandingTable";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/components/pagination/pagination.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const decorator = require("./metaDecorator.json");

SwiperCore.use([Pagination]);

export const CorporateLanding = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Бизнес зээл</title>
        <meta
          name="description"
          content="500,000,000 төгрөг хүртэлх бизнесийн зээл."
        />
        <meta
          property="og:description"
          content="500,000,000 төгрөг хүртэлх бизнесийн зээл."
        />
        <meta property="og:title" content="Бизнес зээл" />
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
        <div className="clanding-1-background">
          {/* <img src={clandingbackground1} alt="" /> */}
          <div className="clanding-1-div"></div>
        </div>
        <div className="clanding-1-mobile-background">
          <div className="clanding-1-mobile-div"></div>
        </div>
        <div data-aos="fade-up" className="clanding-2-div">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon1} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хэмжээ</p>
                <p className="clanding-2-description">500 сая хүртэлх</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon2} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хугацаа​</p>
                <p className="clanding-2-description">36 сар хүртэл</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon3} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хүү</p>
                <p className="clanding-2-description">1.5% - 2.5%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clanding-2-mobile-div">
          <div data-aos="zoom-in-up" className="clanding-2-mobile-item">
            <div className="clanding-2-mobile-icon-circle">
              <img
                className="clanding-2-mobile-icon"
                src={clandingicon1}
                alt=""
              />
            </div>
            <div className="clanding-2-mobile-text">
              <p className="clanding-2-mobile-title">Хэмжээ</p>
              <p className="clanding-2-mobile-description">500 сая хүртэлх</p>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="clanding-2-mobile-item">
            <div className="clanding-2-mobile-icon-circle">
              <img
                className="clanding-2-mobile-icon"
                src={clandingicon2}
                alt=""
              />
            </div>
            <div className="clanding-2-mobile-text">
              <p className="clanding-2-mobile-title">Хугацаа​</p>
              <p className="clanding-2-mobile-description">36 сар хүртэл</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            style={{ marginBottom: 0 }}
            className="clanding-2-mobile-item"
          >
            <div className="clanding-2-mobile-icon-circle">
              <img
                className="clanding-2-mobile-icon"
                src={clandingicon3}
                alt=""
              />
            </div>
            <div className="clanding-2-mobile-text">
              <p className="clanding-2-mobile-title">Хүү</p>
              <p className="clanding-2-mobile-description">1.5% - 2.5%</p>
            </div>
          </div>
        </div>
        <div
          id="requirements"
          name="requirements"
          data-aos="fade-up"
          className="clanding-3-div"
        >
          <p data-aos="fade-up" className="clanding-title">
            Таны бизнест аль нь тохирч байна?
          </p>
          <div className="clanding-divider"></div>
          <div data-aos="flip-up" className="clanding-3-table">
            <CLandingTable type={1} />
            <CLandingTable type={2} />
            <CLandingTable type={3} />
            <CLandingTable type={4} />
          </div>
          <div data-aos="flip-up" className="clanding-3-table-ipad">
            <CLandingTable ipad={true} type={2} />
            <CLandingTable ipad={true} type={3} />
            <CLandingTable ipad={true} type={4} />
          </div>
          <div className="clanding-3-mobile-table">
            <Swiper pagination spaceBetween={15}>
              <SwiperSlide>
                <CLandingTable ipad={true} type={2} />
              </SwiperSlide>
              <SwiperSlide>
                <CLandingTable ipad={true} type={3} />
              </SwiperSlide>
              <SwiperSlide>
                <CLandingTable ipad={true} type={4} />
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="clanding-3-description">
            *Зээлийн судалгаанд үндэслэн тогтооно.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="300"
          className="clanding-4-outer"
        >
          <p className="clanding-title" style={{ textAlign: "center" }}>
            Зээлийн зориулалт
          </p>
          <div className="clanding-divider"></div>
          <div className="clanding-4-background">
            <div className="clanding-4-div">
              <div style={{ display: "flex" }}>
                <img className="clanding-4-icon" src={clandingicon6} alt="" />
                <p className="clanding-4-text">
                  Бизнесийн эргэлтийн хөрөнгө санхүүжүүлэх
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img className="clanding-4-icon" src={clandingicon6} alt="" />
                <p className="clanding-4-text">
                  Үйл ажиллагаагаа өргөжүүлэхэд хөрөнгө оруулалт хийх
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img className="clanding-4-icon" src={clandingicon6} alt="" />
                <p className="clanding-4-text">
                  Үйлчилгээний чанарыг сайжруулах
                </p>
              </div>
            </div>
            <img
              className="clanding-4-background-image"
              src={background2}
              alt="  "
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          className="planding-1-mobile-picture"
          src={mobile2}
          alt=""
        />
        <div className="clanding-4-mobile-bottom-div">
          <div style={{ display: "flex" }}>
            <img
              data-aos="flip-right"
              className="clanding-4-mobile-icon"
              src={clandingicon6}
              alt=""
            />
            <p data-aos="zoom-out-up" className="clanding-4-mobile-text">
              Бизнесийн эргэлтийн хөрөнгө санхүүжүүлэх
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <img
              data-aos="flip-right"
              className="clanding-4-mobile-icon"
              src={clandingicon6}
              alt=""
            />
            <p data-aos="zoom-out-up" className="clanding-4-mobile-text">
              Үйл ажиллагаагаа өргөжүүлэхэд хөрөнгө оруулалт хийх
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <img
              data-aos="flip-right"
              className="clanding-4-mobile-icon"
              src={clandingicon6}
              alt=""
            />
            <p
              data-aos="zoom-out-up"
              style={{ marginBottom: 0 }}
              className="clanding-4-mobile-text"
            >
              Үйлчилгээний чанараа сайжруулах
            </p>
          </div>
        </div>
        <div className="clanding-5-div" style={{ textAlign: "center" }}>
          <p data-aos="zoom-in-up" className="clanding-title">
            Бидний давуу тал
          </p>
          <div data-aos="zoom-in-up" className="clanding-divider"></div>
          <div style={{ display: "inline-flex" }}>
            <div data-aos="zoom-out-up" className="clanding-5-card">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon7} alt="" />
              </div>
              <p className="clanding-5-title">Одоо зээлийн дүнгээ шалга</p>
              <p className="clanding-5-text">
                <Link to="/business-loan">
                  <span
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Энд
                  </span>
                </Link>{" "}
                дарж зээлийн дүнгээ шалгаарай.
              </p>
            </div>
            <div data-aos="zoom-out-up" className="clanding-5-card">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon8} alt="" />
              </div>
              <p className="clanding-5-title">Ажлын 1-3 хоногт</p>
              <p className="clanding-5-text">Тиймээ, ийм шуурхай.</p>
            </div>
            <div data-aos="zoom-out-up" className="clanding-5-card">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon9} alt="" />
              </div>
              <p className="clanding-5-title">Бизнес дээр нь яваад очьё</p>
              <p className="clanding-5-text">
                Та зээлийн хүсэлтээ л өгөхөд манай мэргэжилтнүүд очиж үйлчилгээ
                үзүүлнэ.
              </p>
            </div>
            <div
              data-aos="zoom-out-up"
              className="clanding-5-card"
              style={{ marginRight: 0 }}
            >
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon10} alt="" />
              </div>
              <p className="clanding-5-title">Энгийн, хялбар, хурдан</p>
              <p className="clanding-5-text">
                Simple аппликэйшнээр зээлийн мэдээллээ харж эргэн төлөлтөө
                хийнэ.
              </p>
            </div>
          </div>
        </div>
        <div className="clanding-5-mobile-div">
          <p data-aos="zoom-in-up" className="clanding-title">
            Бидний давуу тал
          </p>
          <div data-aos="zoom-in-up" className="clanding-divider"></div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon7}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Одоо зээлийн
              <br />
              дүнгээ шалга
            </p>
            <p className="clanding-5-mobile-description">
              <Link to="/business-loan">
                <span
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Энд
                </span>
              </Link>{" "}
              дарж зээлийн дүнгээ шалгаарай.
            </p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon8}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Ажлын 1-3
              <br />
              хоногт
            </p>
            <p className="clanding-5-mobile-description">Тиймээ, ийм шуурхай</p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon9}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Бизнес дээр нь
              <br />
              яваад очьё
            </p>
            <p className="clanding-5-mobile-description">
              Та зээлийн хүсэлтээ л өгөхөд манай мэргэжилтнүүд очиж <br />
              үйлчилгээ үзүүлнэ.
            </p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon10}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Энгийн, хялбар,
              <br />
              хурдан
            </p>
            <p className="clanding-5-mobile-description">
              Simple аппликэйшнээр
              <br />
              зээлийн мэдээллээ харж
              <br />
              эргэн төлөлтөө хийнэ.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="250"
          className="clanding-6-div"
        >
          <p
            data-aos="fade-up"
            data-aos-offset="300"
            className="clanding-title"
          >
            Зээл авах алхмууд
          </p>
          <div data-aos="fade-up" className="clanding-divider"></div>
          <div className="clanding-6-container">
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              className="clanding-6-background-image"
              src={background3}
              alt=""
            />
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              className="clanding-6-background-mobile"
              src={mobile1}
              alt=""
            />
            <div className="clanding-6-items">
              <div className="clanding-6-content">
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps"
                >
                  <p className="clanding-6-step">01</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">02</p>
                  <div className="clanding-6-divider"></div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description">
                    Зээл авах хүсэлтээ онлайнаар ирүүлнэ.
                  </p>
                  <p
                    className="clanding-6-step-description"
                    style={{ marginBottom: 0 }}
                  >
                    Зээлийн мэргэжилтэн тань дээр өөрөө очиж үйлчилгээ үзүүлнэ.
                  </p>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps"
                >
                  <p className="clanding-6-step">03</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">04</p>
                  <div className="clanding-6-divider"></div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description">
                    Зээлийн шийдвэрийг 1-2 хоногийн дотор гаргаж, танд
                    мэдэгдэнэ.
                  </p>
                  <p
                    className="clanding-6-step-description"
                    style={{ marginBottom: 0 }}
                  >
                    Зээлийн гэрээ байгуулснаар танд зээл олгоно.
                  </p>
                </div>
              </div>
              <div>
                <p data-aos="zoom-out-right" className="clanding-6-big-title">
                  Байгаа газраасаа бизнесийн зээлийн эрхээ шалгаарай.
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/business-loan`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    data-aos="zoom-out-left"
                    className="clanding-6-loan-button"
                  >
                    <p className="clanding-6-button-text">Зээл хүсэх</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-offset="300"
          className="clanding-title title-6"
        >
          Зээл авах алхмууд
        </p>
        <div data-aos="fade-up" className="clanding-divider title-6"></div>
        <img
          data-aos="fade-up"
          className="planding-1-mobile-picture"
          src={mobile3}
          alt=""
        />
        <div className="clanding-6-mobile-div">
          <div style={{ display: "flex" }}>
            <div data-aos="zoom-out-left" className="clanding-6-steps">
              <p data-aos="zoom-in-right" className="clanding-6-step">
                01
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                02
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                03
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                04
              </p>
            </div>
            <div className="clanding-6-steps-content">
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Зээл авах хүсэлтээ онлайнаар ирүүлнэ.
              </p>
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Зээлийн мэргэжилтэн тань дээр өөрөө очиж үйлчилгээ үзүүлнэ.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Зээлийн шийдвэрийг 1-2 хоногийн дотор гаргаж, танд мэдэгдэнэ.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Зээлийн гэрээ байгуулснаар танд зээл олгоно.
              </p>
            </div>
          </div>
          <p data-aos="zoom-in-right" className="clanding-6-mobile-big-title">
            Байгаа газраасаа бизнесийн зээлийн эрхээ шалгаарай.
          </p>
          <div
            data-aos="zoom-in-left"
            className="clanding-6-mobile-loan-button"
          >
            <a
              href={`${process.env.PUBLIC_URL}/business-loan`}
              style={{ textDecoration: "none" }}
            >
              <p className="clanding-6-mobile-loan-button-text">Зээл хүсэх</p>
            </a>
          </div>
        </div>
        <div className="bottomspace" style={{ height: 90 }}></div>
      </div>
    </>
  );
};
