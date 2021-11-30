import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";
import clandingicon1 from "../assets/clanding/clanding-2-1.png";
import clandingicon2 from "../assets/clanding/clanding-2-2.png";
import clandingicon3 from "../assets/clanding/clanding-2-3.png";
import plandingicon7 from "../assets/planding/planding-7-1.png";
import plandingicon8 from "../assets/planding/planding-7-2.png";
import plandingicon9 from "../assets/planding/planding-7-3.png";
import dstep1 from "../assets/digital/dstep_1.png";
import dstep2 from "../assets/digital/dstep_2.png";
import dstep3 from "../assets/digital/dstep_3.png";
import background3 from "../assets/digital/digital-landing-2.png";
import mobile1 from "../assets/clanding/clanding-6-mobile.png";
import { DigitalLoanTable } from "../components/DigitalLoanTable";
import { Swiper, SwiperSlide } from "swiper/react";

import "./digital.css";
const decorator = require("./metaDecorator.json");

function Digital() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Дижитал зээл</title>
        <meta name="description" content="Дижитал зээл." />
        <meta property="og:description" content="Дижитал зээл." />
        <meta property="og:title" content="Дижитал зээл" />
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
        <div className="d-1-background">
          {/* <img src={clandingbackground1} alt="" /> */}
          <div className="clanding-1-div"></div>
        </div>
        <div className="clanding-1-mobile-background digital">
          <div className="clanding-1-mobile-div digital"></div>
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
                <p className="clanding-2-description">24 сар хүртэл</p>
              </div>
            </div>
            <div className="clanding-2-item">
              <div className="clanding-2-icon-circle">
                <img className="clanding-2-icon" src={clandingicon3} alt="" />
              </div>
              <div className="clanding-2-text">
                <p className="clanding-2-title">Хүү</p>
                <p className="clanding-2-description">1.7% - 3.0%</p>
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
              <p className="clanding-2-mobile-description">20 сая хүртэлх</p>
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
              <p className="clanding-2-mobile-description">24 сар хүртэл</p>
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
              <p className="clanding-2-mobile-description">1.7% - 3.0%</p>
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
            <DigitalLoanTable type={1} />
            <DigitalLoanTable type={2} />
          </div>
          <div data-aos="flip-up" className="clanding-3-table-ipad">
            <DigitalLoanTable ipad={true} type={2} />
          </div>
          <div className="clanding-3-mobile-table">
            <Swiper pagination spaceBetween={15}>
              <SwiperSlide>
                <DigitalLoanTable ipad={true} type={2} />
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
          <div className="clanding-6-container digital">
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              className="clanding-6-background-image digital"
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
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description">
                    Simple аппликейшнээ татан суулгана.
                  </p>
                  <p
                    className="clanding-6-step-description"
                    style={{ marginBottom: 0 }}
                  >
                    Simple-ийн харилцагч болж бүртгүүлнэ.
                  </p>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps"
                >
                  <p className="clanding-6-step">3</p>
                  <div className="clanding-6-divider"></div>
                  <p className="clanding-6-step">4</p>
                  <div className="clanding-6-divider"></div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  data-aos-offset="300"
                  className="clanding-6-steps-content"
                >
                  <p className="clanding-6-step-description">
                    Дижитал зээлийн эрхээ
                    <br />
                    харна.
                  </p>
                  <p
                    className="clanding-6-step-description"
                    style={{ marginBottom: 0 }}
                  >
                    Хэрэглээний зээлийн гэрээг 1 удаад байгуулаад хэдэн ч удаа
                    зээл авах боломжтой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          className="planding-1-mobile-picture"
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
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                2
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                3
              </p>
              <div
                data-aos="zoom-in-right"
                className="clanding-6-divider"
              ></div>
              <p data-aos="zoom-in-right" className="clanding-6-step">
                4
              </p>
            </div>
            <div className="clanding-6-steps-content">
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Simple аппликейшнээ татан суулгана.
              </p>
              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Simple-ийн харилцагч болж бүртгүүлнэ.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Дижитал зээлийн эрхээ харна.
              </p>

              <p
                data-aos="zoom-in-left"
                className="clanding-6-step-description"
              >
                Хэрэглээний зээлийн гэрээг 1 удаад байгуулаад хэдэн ч удаа зээл
                авах боломжтой.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="planding-3-background digital"
        >
          <p className="clanding-title" style={{ textAlign: "center" }}>
            Зээлийн эрхээ шинэчлэх алхмууд
          </p>
          <div className="clanding-divider"></div>
          <p className="digital-landing-text">
            Манай зээлийн эрх 24 цагийн хугацаанд хүчинтэй бөгөөд та дараах
            байдлаар зээлийн эрхээ шинэчлээрэй.
          </p>
          <div className="planding-3-div digital">
            <div
              data-aos="zoom-out-up"
              data-aos-delay="50"
              className="planding-3-item"
            >
              <p className="planding-3-title">1</p>
              <p className="planding-3-description">
                Манай зээлийн эрх 24 цагийн хугацаанд хүчинтэй бөгөөд та дараах
                байдлаар зээлийн эрх шинэчлэх товчлуур дээр дараарай.
              </p>
              <img className="dl-step-image" src={dstep1} alt="step1" />
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-delay="100"
              className="planding-3-item"
            >
              <p className="planding-3-title">2</p>
              <p className="planding-3-description">
                E-Mongolia системийг ашиглан мэдээллээ баталгаажуулаарай.
              </p>
              <img className="dl-step-image" src={dstep2} alt="step2" />
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-delay="150"
              className="planding-3-item"
              style={{ marginRight: 0 }}
            >
              <p className="planding-3-title">3</p>
              <p className="planding-3-description">
                Заа, удахгүй таны зээлийн эрх шинэчлэгдэх болно. Та кофе уунгаа
                хүлээж байгаарай.
              </p>
              <img className="dl-step-image" src={dstep3} alt="step3" />
            </div>
          </div>
        </div>
        <div className="planding-3-mobile-background">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item digital"
          >
            <p
              className="clanding-title digital"
              style={{ textAlign: "center" }}
            >
              Зээлийн эрхээ шинэчлэх алхмууд
            </p>
            <div className="clanding-divider"></div>
            <p className="digital-landing-text">
              Манай зээлийн эрх 24 цагийн хугацаанд хүчинтэй бөгөөд та дараах
              байдлаар зээлийн эрхээ хэрхэн шинэчлээрэй.
            </p>
            <div className="planding-3-top">
              <p className="planding-3-title">1</p>
            </div>
            <p className="planding-3-description">
              Зээлийн эрхээ шинэчлэх товч дарна.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item digital"
          >
            <div className="planding-3-top">
              <p className="planding-3-title">2</p>
            </div>
            <p className="planding-3-description">
              Хурууны хээ эсвэл E-Mongolia системийг ашиглан мэдээллээ
              баталгаажуулаарай.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item digital"
            style={{ marginRight: 0 }}
          >
            <div className="planding-3-top">
              <p className="planding-3-title">3</p>
            </div>
            <p className="planding-3-description">
              Заа, удахгүй таны зээлийн эрх шинэчлэгдэх болно. Та кофе уунгаа
              хүлээж байгаарай.
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

export default Digital;
