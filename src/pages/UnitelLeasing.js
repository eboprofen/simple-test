import React from "react";
import { Helmet } from "react-helmet";
import unitel1 from "../assets/unitel/unitel_1.png";
import unitel2 from "../assets/unitel/unitel_2.png";
import check from "../assets/unitel/unitel_check.png";
import title from "../assets/unitel/unitel_title.png";
import circle from "../assets/unitel/unitel_circle.png";
import a52 from "../assets/unitel/a52.png";
import a72 from "../assets/unitel/a72.png";

import "./unitel.css";
const decorator = require("./metaDecorator.json");

export const UnitelLeasing = () => (
  <>
    <Helmet>
      <title>ХҮҮ, УРЬДЧИЛГАА 0</title>
      <meta
        name="description"
        content="Simple-н зээлээр Юнителээс ухаалаг утас аваарай."
      />
      <meta
        property="og:description"
        content="Simple-н зээлээр Юнителээс ухаалаг утас аваарай."
      />
      <meta property="og:title" content="ХҮҮ, УРЬДЧИЛГАА 0" />
      <meta
        name="image"
        property="og:image"
        content="https://cms.simple.mn/uploads/web_banner_nuhtsul_thumbnail_on_fb_b9ce9cd37b.jpg"
      />
      <meta
        property="og:url"
        content={
          decorator.hostname + window.location.pathname + window.location.search
        }
      />
    </Helmet>
    <div className="unitel-ad">
      <div className="unitel-ad-1">
        <img className="unitel-ad-1-image" src={unitel1} alt="" />
        <p className="unitel-ad-1-text">
          Юнителийн хэрэглэгч
          <br />
          <span style={{ color: "#00bbc2" }}>SIMPLE</span> зээлээр ухаалаг утас
          худалдан авах алхам.
        </p>
      </div>
      <div className="unitel-ad-2">
        <div className="unitel-ad-2-card">
          <div className="unitel-ad-2-title-div">
            <img className="unitel-ad-2-title" src={title} alt="" />
            <span className="unitel-ad-2-title-text">Зээлийн шалгуур</span>
          </div>
          <div className="unitel-ad-2-body">
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Simple апп дээр зээлийн эрх үүссэн байх
              </span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                {
                  "Simple апп-н “Хэрэглэгч” цэсний “Материал бүрдүүлэх” хэсэгт мэдээллээ илгээж баталгаажуулсан байх"
                }
              </span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Юнителийн дараа төлбөрт үйлчилгээний 20.000 болон түүнээс дээш
                багцын
              </span>
            </div>
            <div className="unitel-1-hint">
              <img src={circle} alt="" className="unitel-circle" />
              <p className="unitel-ad-5-text light">
                Одоогийн хэрэглэгч, Шинэ хэрэглэгч, Урьдчилсан хосолсон төлбөрт
                үйлчилгээнээс шилжих хэрэглэгч
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="unitel-ad-3">
        <div className="unitel-ad-2-card">
          <div className="unitel-ad-2-title-div">
            <img className="unitel-ad-2-title" src={title} alt="" />
            <span className="unitel-ad-2-title-text">Зээлийн нөхцөл</span>
          </div>
          <div className="unitel-ad-2-body">
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">Урьдчилгаа төлбөргүй</span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">Хүүгүй, шимтгэлгүй</span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">12 сарын хугацаатай</span>
            </div>
            <div style={{ marginBottom: 0 }} className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Худалдан авах утасны үнэ зээлийн эрхээс хэтрэхгүй байх ба хэрэв
                хэтэрсэн тохиолдолд урьдчилгааг Юнителд төлнө
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="unitel-ad-3 light">
        <div className="unitel-ad-2-card">
          <div className="unitel-ad-2-title-div">
            <img className="unitel-ad-2-title" src={title} alt="" />
            <span className="unitel-ad-2-title-text">Зээлээр авах утас</span>
          </div>
          <div className="unitel-ad-5-step">
            <img className="unitel-check" src={check} alt="" />
            <span className="unitel-ad-5-text">
              Дараах 2 төрлийн утаснаас сонгоорой:
            </span>
          </div>
          <div className="unitel-ad-bordered-card">
            <div style={{ display: "flex" }}>
              <div className="unitel-phone-div">
                <img className="unitel-phone-image" src={a52} alt="" />
                <p className="unitel-ad-5-text unitel-phone-name">
                  Samsung Galaxy A52
                </p>
                <p className="unitel-ad-5-text unitel-phone-price">1’188’000</p>
              </div>
              <div className="unitel-phone-div">
                <img className="unitel-phone-image" src={a72} alt="" />
                <p className=" unitel-ad-5-text unitel-phone-name">
                  Samsung Galaxy A72
                </p>
                <p className="unitel-ad-5-text unitel-phone-price">1’588’000</p>
              </div>
            </div>
            <div className="unitel-phone-divider"></div>
            <p
              style={{ marginBottom: 15, textAlign: "center", marginLeft: 0 }}
              className="unitel-ad-5-text"
            >
              Дараа төлбөрт багцаа ахиулах болон шинэ дараа төлбөрт хэрэглэгч
              100.000₮ хөнгөлөлт авна.
            </p>
          </div>
        </div>
      </div>

      <div className="unitel-ad-3">
        <div className="unitel-ad-2-card">
          <div className="unitel-ad-2-title-div">
            <img className="unitel-ad-2-title" src={title} alt="" />
            <span className="unitel-ad-2-title-text">Зээлийн эргэн төлөлт</span>
          </div>
          <div className="unitel-ad-2-body">
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Юнителийн үйлчилгээний төлбөр дээр зээлийн төлбөр гарахгүй.
              </span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Simple апп-аар зээлийн эргэн төлөлтөө хийнэ.
              </span>
            </div>
            <div className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Зээлээ хугацаанаас өмнө төлөх, хаах боломжтой.
              </span>
            </div>
            <div style={{ marginBottom: 0 }} className="unitel-ad-5-step">
              <img className="unitel-check" src={check} alt="" />
              <span className="unitel-ad-5-text">
                Юнителийн үйлчилгээг 12 сар тасралтгүй ашиглах үүрэгтэй. Хэрэв
                хүүгүй зээлээр утас худалдан авсан хэрэглэгч гэрээний дагуу
                дугаараа 12 сар тасралтгүй ашиглаагүй бол сар бүр нөхөн төлбөр
                тооцогдох болохыг анхаарна уу.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="unitel-ad-3 light">
        <div className="unitel-ad-2-card">
          <p
            style={{ textAlign: "center", marginBottom: 15 }}
            className="unitel-ad-2-title-text"
          >
            Зээл авах алхам
          </p>

          <p
            style={{ textAlign: "center", marginBottom: 15 }}
            className="unitel-ad-5-text"
          >
            <img
              style={{ marginTop: -3, marginRight: 15 }}
              className="unitel-check"
              src={check}
              alt=""
            />
            Simple апп татаж, бүртгүүлэн зээлийн эрхээ шалгах
          </p>
          <a
            style={{ textDecoration: "none" }}
            target="blank"
            href="https://qrco.de/simpleapp/"
          >
            <img src={unitel2} alt="" className="unitel-download" />
          </a>
          <div className="unitel-ad-5-step">
            <img className="unitel-check" src={check} alt="" />
            <span className="unitel-ad-5-text">
              Simple апп-т өөрийн мэдээллээ илгээх:
            </span>
          </div>
          <div style={{ marginTop: 15 }} className="unitel-1-hint">
            <img src={circle} alt="" className="unitel-circle" />
            <p
              style={{ fontStyle: "italic" }}
              className="unitel-ad-5-text light"
            >
              {
                "Simple апп -> Хэрэглэгч -> Материал бүрдүүлэлт -> Иргэний үнэмлэхийн ард , урд зураг, өөрийн selfie зургийг оруулах"
              }
            </p>
          </div>
          <div className="unitel-ad-5-step">
            <img className="unitel-check" src={check} alt="" />
            <span className="unitel-ad-5-text">
              Юнителийн УБ дах үндсэн салбарт хандах:
            </span>
          </div>
          <div style={{ marginTop: 15 }} className="unitel-1-hint">
            <img src={circle} alt="" className="unitel-circle" />
            <p className="unitel-ad-5-text light">
              Иргэний үнэмлэхтэйгээ ирж зээлийн гэрээ байгуулна
            </p>
          </div>
          <div className="unitel-1-hint">
            <img src={circle} alt="" className="unitel-circle" />
            <p className="unitel-ad-5-text light">
              Ирэхээсээ өмнө апп-р зээлийн эрхээ шинэчлээд үзээрэй
            </p>
          </div>
          <div className="unitel-1-hint">
            <img src={circle} alt="" className="unitel-circle" />
            <p className="unitel-ad-5-text light">
              Юнителийн дараа төлбөрт үйлчилгээгээ 12 сар тасралтгүй ашиглах
              гэрээг хийнэ.
            </p>
          </div>
          <p className="unitel-last-text">
            БАЙГУУЛЛАГЫН ХЭРЭГЛЭГЧ СЭНТРАЛ САЛБАР ЭСВЭЛ БАЙГУУЛЛАГА ХАРИУЦСАН
            МЭРГЭЖИЛТЭНД ХАНДААРАЙ
          </p>
        </div>
      </div>
    </div>
  </>
);
