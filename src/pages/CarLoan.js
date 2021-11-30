import React, { useEffect } from "react";
import clandingicon1 from "../assets/clanding/clanding-2-1.png";
import clandingicon2 from "../assets/clanding/clanding-2-2.png";
import clandingicon3 from "../assets/clanding/clanding-2-3.png";
import clandingicon6 from "../assets/ic_success.png";
import clandingicon7 from "../assets/clanding/clanding-5-1.png";
import clandingicon8 from "../assets/clanding/clanding-5-2.png";
import clandingicon9 from "../assets/clanding/clanding-5-3.png";
import clandingicon10 from "../assets/clanding/clanding-5-4.png";
import background3 from "../assets/carloan/cl-landing-2.png";
import plandingicon7 from "../assets/planding/planding-7-1.png";
import plandingicon8 from "../assets/planding/planding-7-2.png";
import plandingicon9 from "../assets/planding/planding-7-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/components/pagination/pagination.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./carloan.css";
import { CarLoanTable } from "../components/CarLoanTable";

const decorator = require("./metaDecorator.json");

function CarLoan() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Автомашины зээл</title>
        <meta name="description" content="Автомашины зээл." />
        <meta property="og:description" content="Автомашины зээл." />
        <meta property="og:title" content="Автомашины зээл" />
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
        <div className="cl-1-background">
          {/* <img src={clandingbackground1} alt="" /> */}
          <div className="clanding-1-div"></div>
        </div>
        <div className="clanding-1-mobile-background">
          <div className="clanding-1-mobile-div cl"></div>
        </div>
        <div data-aos="fade-up" className="clanding-2-div">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon1} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хэмжээ</p>
                <p className="clanding-2-description">300 сая хүртэлх</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon2} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хугацаа​</p>
                <p className="clanding-2-description">60 сар хүртэл</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon3} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хүү</p>
                <p className="clanding-2-description">1.5% - 2.7%</p>
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
              <p className="clanding-2-mobile-description">300 сая хүртэлх</p>
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
              <p className="clanding-2-mobile-description">60 сар хүртэл</p>
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
              <p className="clanding-2-mobile-description">1.5% - 2.7%</p>
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
            Автомашины зээл
          </p>
          <div className="clanding-divider"></div>
          <div data-aos="flip-up" className="clanding-3-table">
            <CarLoanTable type={1} />
            <CarLoanTable type={2} />
            <CarLoanTable type={3} />
          </div>
          <div data-aos="flip-up" className="clanding-3-table-ipad">
            <CarLoanTable ipad={true} type={2} />
            <CarLoanTable ipad={true} type={3} />
          </div>
          <div className="clanding-3-mobile-table">
            <Swiper pagination spaceBetween={15}>
              <SwiperSlide>
                <CarLoanTable ipad={true} type={2} />
              </SwiperSlide>
              <SwiperSlide>
                <CarLoanTable ipad={true} type={3} />
              </SwiperSlide>
            </Swiper>
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
          <div className="clanding-6-container cl">
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              className="clanding-6-background-image cl"
              src={background3}
              alt=""
            />
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              className="clanding-6-background-mobile"
              src={background3}
              alt=""
            />
            <div className="clanding-6-items">
              <div className="clanding-6-content">
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps"
                >
                  <p className="clanding-6-step">1</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">2</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">3</p>
                  <div className="clanding-6-divider"></div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description cl">
                    Та хаанаас ч бүрэн дижитал хэлбэрээр автомашины зээлийн дээд
                    хэмжээгээ шалгаарай.
                  </p>

                  <p
                    className="clanding-6-step-description cl"
                    style={{ marginBottom: 0 }}
                  >
                    Та автомашины зээлжих эрхийн хүрээнд манай нөхцөлийг
                    хангасан автомашин сонгоорой.
                  </p>
                  <p
                    className="clanding-6-step-description cl"
                    style={{ marginBottom: 0 }}
                  >
                    Өөрт ойрхон автомашины зээл олгох байршил дээр очиж зээлийн
                    мэргэжилтэнд хүсэлт гаргаарай.
                  </p>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps"
                >
                  <p className="clanding-6-step">4</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">5</p>
                  <div className="clanding-6-divider"></div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description cl">
                    Урьдчилан зээлийн эрх тогтсон харилцагчийн хувьд зээлийн
                    олголтыг ажлын 2-8 цагийн дотор шийдвэрлэх болно
                  </p>
                  <p
                    className="clanding-6-step-description cl"
                    style={{ marginBottom: 0 }}
                  >
                    Зээлийн гэрээ байгуулснаар танд зээл олгоно.
                  </p>
                </div>
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
          className="planding-1-mobile-picture cl"
          src={background3}
          alt=""
        />
        <div className="clanding-6-mobile-div">
          <div style={{ display: "flex" }}>
            <div data-aos="zoom-out-left" className="clanding-6-steps">
              <p data-aos="zoom-in-right" className="clanding-6-step">
                1
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider cl"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                2
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider cl"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                3
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider cl"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                4
              </p>{" "}
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider cl"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                5
              </p>
            </div>
            <div className="clanding-6-steps-content">
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description cl"
              >
                Та хаанаас ч бүрэн дижитал хэлбэрээр автомашины зээлийн дээд
                хэмжээгээ шалгаарай.
              </p>
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description cl"
              >
                Та автомашины зээлжих эрхийн хүрээнд манай нөхцөлийг хангасан
                автомашин сонгоорой.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description cl"
              >
                Өөрт ойрхон автомашины зээл олгох байршил дээр очиж зээлийн
                мэргэжилтэнд хүсэлт гаргаарай.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description cl"
              >
                Урьдчилан зээлийн эрх тогтсон харилцагчийн хувьд зээлийн
                олголтыг ажлын 2-8 цагийн дотор шийдвэрлэх болно
              </p>
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description cl"
              >
                Зээлийн гэрээ байгуулснаар танд зээл олгоно.
              </p>
            </div>
          </div>
        </div>
        <div className="clanding-5-div cl" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex" }}>
            <div data-aos="zoom-out-up" className="clanding-5-card cl">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon7} alt="" />
              </div>
              <p className="clanding-5-title cl">
                Таны зээлийн эрх хэд гарах бол?
              </p>
              <p className="clanding-5-text">
                <Link to="/business-loan">
                  <span
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Энд дарж
                  </span>
                </Link>{" "}
                яг одоо автомашины зээлийн эрхээ шалгаарай.
              </p>
            </div>
            <div data-aos="zoom-out-up" className="clanding-5-card cl">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon8} alt="" />
              </div>
              <p className="clanding-5-title cl">Ажлын 2-8 цагт</p>
              <p className="clanding-5-text">
                Тийм ээ, ийм шуурхай зээл олгоно.
              </p>
            </div>
            <div data-aos="zoom-out-up" className="clanding-5-card cl">
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon9} alt="" />
              </div>
              <p className="clanding-5-title cl">Сайхан нөхцөл гэж байдаг юм</p>
              <p className="clanding-5-text">Хүү бага, хугацаа урт</p>
            </div>
            <div
              data-aos="zoom-out-up"
              className="clanding-5-card cl"
              style={{ marginRight: 0 }}
            >
              <div className="clanding-5-circle">
                <img className="clanding-5-icon" src={clandingicon10} alt="" />
              </div>
              <p className="clanding-5-title cl">Төлбөрийн уян хатан нөхцөл</p>
              <p className="clanding-5-text">
                Эхний 3 хүртэлх сар үндсэн төлбөрөөс чөлөөлөх боломжтой
              </p>
            </div>
          </div>
        </div>
        <div className="clanding-5-mobile-div">
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon7}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Таны зээлийн эрх хэд гарах бол?
            </p>
            <p className="clanding-5-mobile-description">
              <span
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Энд
              </span>
              дарж яг одоо автомашины зээлийн эрхээ шалгаарай.
            </p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon8}
              alt=""
            />
            <p className="clanding-5-mobile-title">Ажлын 2-8 цагт</p>
            <p className="clanding-5-mobile-description">
              Тийм ээ, ийм шуурхай зээл олгоно.
            </p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon9}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Сайхан нөхцөл гэж байдаг юм
            </p>
            <p className="clanding-5-mobile-description">
              Хүү бага, хугацаа урт
            </p>
          </div>
          <div data-aos="flip-up" className="clanding-5-mobile-item">
            <img
              className="clanding-5-mobile-icon"
              src={clandingicon10}
              alt=""
            />
            <p className="clanding-5-mobile-title">
              Төлбөрийн уян хатан нөхцөл
            </p>
            <p className="clanding-5-mobile-description">
              Эхний 3 хүртэлх сар үндсэн төлбөрөөс чөлөөлөх боломжтой
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

export default CarLoan;
