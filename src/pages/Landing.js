import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import planding1 from "../assets/planding/planding-1-1.png";
import plandingicon1 from "../assets/planding/planding-3-2.png";
import plandingicon2 from "../assets/planding/planding-3-3.png";
import plandingicon3 from "../assets/planding/planding-3-4.png";
import plandingicon4 from "../assets/planding/planding-5-2.png";
import plandingicon5 from "../assets/planding/planding-5-3.png";
import plandingicon6 from "../assets/planding/planding-5-4.png";
import plandingicon7 from "../assets/planding/planding-7-1.png";
import plandingicon8 from "../assets/planding/planding-7-2.png";
import plandingicon9 from "../assets/planding/planding-7-3.png";
import mobile1 from "../assets/planding/planding-1-mobile.png";
import mobile2 from "../assets/planding/planding-2-mobile.png";
import "./landing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const decorator = require("./metaDecorator.json");

export const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 300 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Дижитал зээл</title>
        <meta
          name="description"
          content="20,000,000 төгрөг хүртэлх дижитал зээл."
        />
        <meta
          property="og:description"
          content="20,000,000 төгрөг хүртэлх дижитал зээл."
        />
        <meta property="og:title" content="Дижитал зээл" />
        <meta
          name="image"
          property="og:image"
          content="https://cms.simple.mn/uploads/simple_1_264f16ae17.png"
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
        <div className="planding-1-background">
          <div className="planding-1-div">
            <p data-aos="fade-up" className="planding-1-title">
              Simple бол сүүлийн үеийн технологи, ухаалаг шийдлийг ашиглан
              <br />
              <span style={{ color: "#202f60" }}>цаг, энерги, мөнгийг</span>
              <br />
              чинь хэмнэхэд
              <br />
              зориулсан хэрэгсэл.
            </p>
            <img
              data-aos="fade-left"
              className="planding-1-image"
              src={planding1}
              alt=""
            />
          </div>
        </div>
        <div className="planding-1-mobile-background">
          <img
            data-aos="fade-up"
            className="planding-1-mobile-picture"
            src={mobile1}
            alt=""
          />
          <div className="planding-1-mobile-div">
            <p
              data-aos="fade-left"
              data-aos-offset="50"
              className="planding-1-mobile-text"
            >
              Simple бол сүүлийн үеийн технологи, ухаалаг шийдлийг ашиглан{" "}
              <span style={{ color: "#202f60" }}>цаг, энерги, мөнгийг</span>{" "}
              чинь хэмнэхэд зориулсан хэрэгсэл.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="planding-2-background"
        >
          <ReactPlayer
            className="video"
            playing={true}
            muted
            width="100vw"
            height="calc((100vw * 9) / 16)"
            controls={true}
            url="https://www.youtube.com/watch?v=XU1o7hUn3bo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="planding-3-background"
        >
          <div className="planding-3-div">
            <div
              data-aos="zoom-out-up"
              data-aos-delay="50"
              className="planding-3-item"
            >
              <div className="planding-3-top">
                <img className="planding-3-icon" src={plandingicon1} alt="" />
                <p className="planding-3-title">Цаг</p>
              </div>
              <p className="planding-3-description">
                Санхүүгийн үйлчилгээ авах хугацаанаас 1 минутыг ч болтугай
                хэмнэх нь бидний зорьж байгаа зүйл. Зээл авахад их цаг зарцуулах
                нь хайран.​
              </p>
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-delay="100"
              className="planding-3-item"
            >
              <div className="planding-3-top">
                <img className="planding-3-icon" src={plandingicon2} alt="" />
                <p className="planding-3-title">Энерги</p>
              </div>
              <p className="planding-3-description">
                Хялбар, энгийн шийдэл, ойлгомжтой UX /UI нь чамаас бага хүч,
                энерги шаардана. Чи илүү чухал зүйлд энергиэ хадгал.​
              </p>
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-delay="150"
              className="planding-3-item"
              style={{ marginRight: 0 }}
            >
              <div className="planding-3-top">
                <img className="planding-3-icon" src={plandingicon3} alt="" />
                <p className="planding-3-title">Мөнгө</p>
              </div>
              <p className="planding-3-description">
                Бага хүүтэй, хэрэглэсэн хугацааныхаа л хүүг төлнө, дээрээс нь
                зээлийн шимтгэлгүй. Чи мөнгөө ухаалаг зарцуулаарай.​
              </p>
            </div>
          </div>
        </div>

        <div className="planding-3-mobile-background">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
          >
            <div className="planding-3-top">
              <img className="planding-3-icon" src={plandingicon1} alt="" />
              <p className="planding-3-title">Цаг</p>
            </div>
            <p className="planding-3-description">
              Санхүүгийн үйлчилгээ авах хугацаанаас 1 минутыг ч болтугай хэмнэх
              нь бидний зорьж байгаа зүйл. Зээл авахад их цаг зарцуулах нь
              хайран.​
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
          >
            <div className="planding-3-top">
              <img className="planding-3-icon" src={plandingicon2} alt="" />
              <p className="planding-3-title">Энерги</p>
            </div>
            <p className="planding-3-description">
              Хялбар, энгийн шийдэл, ойлгомжтой UX /UI нь чамаас бага хүч,
              энерги шаардана. Чи илүү чухал зүйлд энергиэ хадгал.​
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="planding-3-mobile-item"
            style={{ marginRight: 0 }}
          >
            <div className="planding-3-top">
              <img className="planding-3-icon" src={plandingicon3} alt="" />
              <p className="planding-3-title">Мөнгө</p>
            </div>
            <p className="planding-3-description">
              Бага хүүтэй, хэрэглэсэн хугацааныхаа л хүүг төлнө, дээрээс нь
              зээлийн шимтгэлгүй. Чи мөнгөө ухаалаг зарцуулаарай.​
            </p>
          </div>
        </div>
        <img
          data-aos="fade-up"
          className="planding-1-mobile-picture"
          src={mobile2}
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="400"
          className="planding-4-background"
        >
          <div className="planding-4-outer">
            <div className="planding-4-div">
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                className="planding-4-title"
                data-aos-offset="400"
              >
                Байгаа
                <br /> газраасаа зээлийн эрхээ шалга
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="planding-4-description"
                data-aos-offset="300"
              >
                Та хаанаас ч бүрэн дижитал хэлбэрээр зээлийн дээд хэмжээгээ
                шалгах боломжтой.​
              </p>
            </div>
          </div>
        </div>
        <div className="planding-4-mobile-background">
          <div className="planding-4-mobile-div">
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              className="planding-4-mobile-title"
            >
              Байгаа газраасаа зээлийн эрхээ шалга
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              className="planding-4-mobile-small-title"
            >
              Байгаа
              <br />
              газраасаа зээлийн
              <br />
              эрхээ шалга
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              className="planding-4-mobile-description"
            >
              Та хаанаас ч бүрэн дижитал хэлбэрээр зээлийн дээд хэмжээгээ шалгах
              боломжтой.​
            </p>
          </div>
        </div>
        {/* <div className="planding-5-background">
          <div className="planding-5-outer">
            <div className="planding-5-div">
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
                className="planding-5-item"
              >
                <img className="planding-5-icon" src={plandingicon4} alt="" />
                <p className="planding-5-title">Хэмжээ</p>
                <p className="planding-5-description">10 сая хүртэлх</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-offset="200"
                className="planding-5-item"
              >
                <img className="planding-5-icon" src={plandingicon5} alt="" />
                <p className="planding-5-title">Хүү</p>
                <p className="planding-5-description">1.7%-с​</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-offset="200"
                className="planding-5-item"
                style={{ marginRight: 0 }}
              >
                <img className="planding-5-icon" src={plandingicon6} alt="" />
                <p className="planding-5-title">Хугацаа​</p>
                <p className="planding-5-description">24 сар хүртэлх</p>
              </div>
            </div>
          </div>
        </div>
        <div className="planding-5-mobile-background">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="planding-5-mobile-item"
          >
            <img
              className="planding-5-mobile-icon"
              src={plandingicon4}
              alt=""
            />
            <p className="planding-5-mobile-title">Хэмжээ</p>
            <p className="planding-5-mobile-description">10 сая хүртэлх</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="planding-5-mobile-item"
          >
            <img
              className="planding-5-mobile-icon"
              src={plandingicon5}
              alt=""
            />
            <p className="planding-5-mobile-title">Хүү</p>
            <p className="planding-5-mobile-description">1.7%-с</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="planding-5-mobile-item"
          >
            <img
              className="planding-5-mobile-icon"
              src={plandingicon6}
              alt=""
            />
            <p className="planding-5-mobile-title">Хугацаа​</p>
            <p className="planding-5-mobile-description">24 сар хүртэлх</p>
          </div>
        </div> */}
        <div className="planding-6-background">
          <div className="planding-6-outer">
            <div className="planding-6-div">
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="400"
                className="planding-6-title"
              >
                Байгальд ээлтэй​​
              </p>
              <p
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="250"
                className="planding-6-description"
              >
                Эх дэлхийгээ хайрлаж технологийн шийдэл
                <br />
                ашиглаж цаас хэрэглэхгүй.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                className="planding-6-mobile-title"
              >
                Байгальд ээлтэй​​
              </p>
              <p
                data-aos="zoom-in"
                data-aos-duration="500"
                className="planding-6-mobile-description"
              >
                Эх дэлхийгээ хайрлаж технологийн шийдэл ашиглаж
                <br />
                цаас хэрэглэхгүй.
              </p>
            </div>
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
};
