import React, { useEffect } from "react";
import video1 from "../assets/video_previews/1_new.jpg";
import video2 from "../assets/video_previews/2_new.jpg";
import video3 from "../assets/video_previews/3_new.jpg";
import video4 from "../assets/video_previews/4_new.jpg";
import video5 from "../assets/video_previews/5_new.jpg";
import video6 from "../assets/video_previews/6_new.jpg";
import video7 from "../assets/video_previews/7_new.jpg";
import video8 from "../assets/video_previews/8_new.jpg";
import video9 from "../assets/video_previews/9_new.png";
import video10 from "../assets/video_previews/10_new.png";
import { HashLink as Link } from "react-router-hash-link";
import ReactPlayer from "react-player";
import "./help.css";
import { Question } from "../components/Question";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const decorator = require("./metaDecorator.json");

export const Help = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [currentVideo, setCurrentVideo] = React.useState(
    "https://www.youtube.com/watch?v=XkeLI8xnJSo"
  );

  return (
    <>
      <Helmet>
        <title>Тусламж</title>
        <meta
          name="description"
          content="Simple-ийн найзууд нь танд тусалъя."
        />
        <meta
          property="og:description"
          content="Simple-ийн найзууд нь танд тусалъя."
        />
        <meta property="og:title" content="Тусламж" />
        <meta
          property="og:url"
          content={
            decorator.hostname +
            window.location.pathname +
            window.location.search
          }
        />
        <meta
          name="image"
          property="og:image"
          content="https://cms.simple.mn/uploads/simple_5_e479e4e6dc.png"
        />
      </Helmet>
      <div className="landing-container">
        <div className="help-1-div" id="video-section">
          <ReactPlayer
            className="help-video-div"
            style={{ margin: "0 auto" }}
            width="703px"
            height="705px"
            controls={true}
            url={currentVideo}
          />
        </div>
        <div data-aos="fade-up" className="help-2-div">
          <p className="help-title">Заавар видео</p>
          <div className="clanding-divider"></div>
          <div className="row video-row">
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=XkeLI8xnJSo")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video1}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=8PySrJoMnh4")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video2}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=v5pv1U4NaYc")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-left"
                  className="help-video-preview"
                  src={video3}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=iNMV6klLG2U")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-left"
                  className="help-video-preview"
                  src={video4}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=AIsZl1t_4cM")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video5}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=5-UBQ2v_4Qg")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video6}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=RGS1gxT9A_8")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-left"
                  className="help-video-preview"
                  src={video7}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=l39XRvCn69k")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-left"
                  className="help-video-preview"
                  src={video8}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=eiFSbyA532o")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video9}
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  thumbnail-item">
              <a
                onClick={() =>
                  setCurrentVideo("https://www.youtube.com/watch?v=KDjSBhuzKtc")
                }
                href="#video-section"
              >
                <img
                  data-aos="fade-up-right"
                  className="help-video-preview"
                  src={video10}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="help-3-div">
          <p className="help-title">Түгээмэл асуулт, хариулт</p>
          <div className="clanding-divider"></div>

          <div className="clanding-7-div">
            <p className="clanding-7-sub-title">Simple аппликэйшн</p>
            <div className="clanding-7-content">
              <div className="help-1" style={{ marginRight: 10 }}>
                <Question
                  data-aos="fade-right"
                  id={9}
                  type="middle"
                  question="Simple аппликэйшнийг яаж татах вэ?"
                  answer={
                    <p>
                      Та өөрийн ухаалаг утсан дээрх Appstore-с "Simple.mn",
                      Playstore-оос "Ashid" гэсэн үгээр хайлт хийн Simple
                      аппликэйшнийг татаж аваарай.
                      <br />' + "<b>IOS линк:</b>{" "}
                      <a href="https://apps.apple.com/us/app/id1527026555">
                        https://apps.apple.com/us/app/id1527026555
                      </a>
                      <br />" + "<b>Android линк:</b>{" "}
                      <a href="https://play.google.com/store/apps/details?id=mn.mllc.ashid">
                        https://play.google.com/store/apps/details?id=mn.mllc.ashid
                      </a>
                    </p>
                  }
                />
                <Question
                  data-aos="fade-right"
                  id={10}
                  question="Нууц үгээ хэрхэн солих вэ?"
                  answer="Simple аппликэйшнийн Profile > Нэвтрэх нууц үг > Харилцагчийн нууц үг солих товчийг даран нууц үгээ солих боломжтой."
                />
                <Question
                  data-aos="fade-right"
                  id={11}
                  question="Хувийн мэдээллээ хэрхэн солих вэ?"
                  answer="Аппликэйшнийн Profile хэсгээс Миний мэдээлэл цэс рүү орж хувийн мэдээллээ өөрчлөх боломжтой."
                />
              </div>
              <div className="help-2" style={{ marginLeft: 10 }}>
                <Question
                  data-aos="fade-left"
                  id={12}
                  question="Утасны камер таниулах: Android"
                  answer="Та гар утасныхаа Settings > Apps > App name > Permissions > бүгдийг ON болгох"
                />
                <Question
                  data-aos="fade-left"
                  id={13}
                  question="Утасны камер таниулах: iOS"
                  answer="Та гар утасныхаа Settings > App name > Camera > ON болгох"
                />
                <Question
                  data-aos="fade-left"
                  id={14}
                  type="large"
                  question="Гэрээ хэрхэн хийх вэ? Гэрээ хийхэд ямар бичиг баримт шаардлагатай вэ?"
                  answer={
                    <>
                      <p>
                        Зээл авахын тулд та өөрийн биеэр иргэний үнэмлэх эсвэл
                        гадаад пасспорттой манай харилцагчийн төв дээр ирж
                        зөвхөн 1 удаа гэрээ байгуулахад болно.
                      </p>
                      <p>
                        <b>Харилцагчийн төв хаяг:</b> Сэнтрал Тауэр 1 давхар
                      </p>
                      <p>
                        <b>Ажиллах цагийн хуваарь:</b> Даваа – Баасан гарагуудад
                        10:00 – 19:00, Бямба гарагт 11:00 – 16:00 цаг хүртэл
                        ажиллах ба Ням гарагт амарна.
                      </p>
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div className="clanding-7-div">
            <p className="clanding-7-sub-title">Дижитал зээл</p>
            <div className="clanding-7-content">
              <div className="help-1" style={{ marginRight: 10 }}>
                <Question
                  data-aos="fade-right"
                  id={15}
                  type="middle"
                  question="Зээл хэрхэн авах вэ?"
                  answer={
                    <p>
                      Хэрэв та зээлийн гэрээ байгуулаагүй бол манай харилцагчийн
                      төвд ирж зөвхөн 1 удаа гэрээ байгуулахад болно.
                      <br />
                      Зээлийн гэрээ байгуулсан бол та 08.00-22.00 цагийн хооронд
                      20 сая хүртэлх төгрөгийн зээлийг манай аппликэйшнээр
                      дамжуулан, барьцаагүйгээр, 24 сар хүртэлх хугацаагаар авах
                      боломжтой.
                    </p>
                  }
                />
                <Question
                  data-aos="fade-right"
                  id={16}
                  type="large"
                  question="Зээл авахад ямар шаардлага тавих вэ?"
                  answer={
                    <ul>
                      <li>
                        18 нас хүрсэн, Улаанбаатар хотын харьяалалтай Монгол
                        улсын иргэн байх
                      </li>
                      <li>
                        Сүүлийн 2 жилийн хугацаанд Монголбанкны Зээлийн
                        Мэдээллийн Санд чанаргүй зээлийн түүхгүй байх
                      </li>
                      <li>Өр, орлогын харьцаа хэтрээгүй байх</li>
                      <li>Эхнэр/нөхрийн хувьд хугацаа хэтэрсэн зээлгүй байх</li>
                    </ul>
                  }
                />
                <Question
                  data-aos="fade-left"
                  id={24}
                  question="Зээл авсан өдрөө зээлээ хаахад хүү төлөх үү?"
                  answer="Төлөхгүй."
                />
                <Question
                  data-aos="fade-right"
                  type="middle"
                  id={18}
                  question="Миний авч болох зээлийн хэмжээг хэрхэн шийдэх вэ?"
                  answer="Таны санхүүгийн түүх болон бусад мэдээлэлд үндэслэн манай систем танд зээлийн оноо бодох бөгөөд энэхүү онооноос хамааран зээлийн хэмжээ, хүү болон хугацааг шийдвэрлэнэ."
                />
                <Question
                  data-aos="fade-right"
                  id={19}
                  type="middle"
                  question="Зээлийн хэмжээ, хугацаа, хүү, шимтгэл ямар байх вэ?"
                  answer={
                    <ul>
                      <li>Зээлийн хэмжээ: 50,000₮ - 20,000,000₮</li>
                      <li>Зээлийн сарын хүү: 1.7% - 3.0%</li>
                      <li>Хугацаа: 24 сар хүртэл</li>
                      <li>Зээл судалсны шимтгэл: Байхгүй</li>
                      <li>Зээлийн гэрээ цуцлах хураамж: 5,000₮</li>
                    </ul>
                  }
                />
              </div>
              <div className="help-2" style={{ marginLeft: 10 }}>
                <Question
                  data-aos="fade-left"
                  id={20}
                  type="middle"
                  question="Зээлийн эргэн төлөлтөө хэрхэн хийх вэ?"
                  answer={
                    <>
                      <p>
                        Зээлийн эргэн төлөлтөө өөрийн харьцдаг аль ч банкаар
                        дамжуулан төлөх боломжтой. Гүйлгээний утга дээр зээлийн
                        төлбөрийн 10 тэмдэгт бүхий кодыг бичиж ХААН Банкны
                        5038087619 дугаартай дансанд шилжүүлээрэй.
                      </p>
                    </>
                  }
                />
                <Question
                  data-aos="fade-left"
                  id={21}
                  question="Зээлийн хугацааг сунгах боломжтой юу?"
                  answer="Уучлаарай, одоогоор боломжгүй."
                />
                <Question
                  data-aos="fade-left"
                  id={22}
                  type="middle"
                  question="Хугацаа хэтрүүлсэн тохиолдолд яах вэ?"
                  answer='Зээл эргэн төлөх өдөр төлбөрөө хийгээгүй бол төлөөгүй үлдсэн зээлийн дүнд торгуулийн хүү нэмж тооцогдох ба Монголбанкны журмын дагуу хугацаа хэтэрсэн хоногоос шалтгаалан "Зээлийн мэдээллийн сан"-д ангилал буурч бүртгэгдэнэ.'
                />
                <Question
                  data-aos="fade-left"
                  id={23}
                  type="middle"
                  question="Орлого хүлээн авах дансаа солих боломжтой юу?"
                  answer="Та орлого хүлээн авах дансаар ѳѳрийн нэр дээрх 1 харилцах дансыг бүртгүүлэх боломжтой. 
                  Хэрвээ солих шаардлагатай бол Simple аппликэйшнийн Profile> Данс холбох хэсгээс хуучин бүртгүүлсэн дансаа 
                  устгаад шинээр харилцах дансаа бүртгүүлээрэй."
                />
              </div>
            </div>
          </div>
          <div className="clanding-7-div">
            <p className="clanding-7-sub-title">Бизнес зээл</p>
            <div className="clanding-7-content">
              <div className="help-1" style={{ marginRight: 10 }}>
                <Question
                  data-aos="fade-right"
                  id={1}
                  question="Simple гэж хэн бэ?"
                  answer="Simple бол сүүлийн үеийн технологи, ухаалаг шийдлийг ашиглан цаг, энерги, мөнгийг чинь хэмнэхэд зориулсан хэрэгсэл юм."
                />
                <Question
                  data-aos="fade-right"
                  id={2}
                  question={
                    <p>
                      Simple бизнесийн зээлийг
                      <span style={{ fontWeight: "bold" }}> хэнд </span>олгох
                      вэ?
                    </p>
                  }
                  answer="Ямар нэгэн худалдаа, үйлчилгээ, үйлдвэрлэлийн чиглэлээр бичил, жижиг, дунд бизнес эрхэлдэг хэн бүхэн энэ зээлийг авах боломжтой."
                />
                <Question
                  data-aos="fade-right"
                  id={3}
                  question={
                    <p>
                      Бизнесийн зээлийн зориулалт нь
                      <span style={{ fontWeight: "bold" }}> юу </span>вэ?
                    </p>
                  }
                  answer="Таны бизнесийн үйл ажиллагааг өргөжүүлэх зорилгоор эргэлтийн хөрөнгө санхүүжүүлэх, нэмэлт хөрөнгө оруулалт хийхэд зориулан олгож байна."
                />
                <Question
                  data-aos="fade-right"
                  id={4}
                  question={
                    <p>
                      Бизнесийн зээлийн нөхцөл нь
                      <span style={{ fontWeight: "bold" }}> ямар </span>вэ?
                    </p>
                  }
                  answer={
                    <p>
                      Та өөрийн бизнест тохирсон зээлийн нөхцөлийг{" "}
                      <Link to="/business#requirements">
                        <span style={{ textDecoration: "underline" }}>энд</span>
                      </Link>{" "}
                      дарж харна уу.
                    </p>
                  }
                />
              </div>
              <div className="help-2" style={{ marginLeft: 10 }}>
                <Question
                  data-aos="fade-left"
                  id={5}
                  question="Ямар шаардлага хангасан байх ёстой вэ?"
                  answer={
                    <ul>
                      <li>Бизнесээ 6 сараас доошгүй хугацаанд эрхэлсэн</li>
                      <li>
                        Банк болон бусад ББСБ-д чанаргүй зээлийн үлдэгдэлгүй
                        байх.
                      </li>
                    </ul>
                  }
                />
                <Question
                  data-aos="fade-left"
                  id={6}
                  question="Өөр санхүүгийн байгууллагуудад зээлийн үлдэгдэлтэй бол зээл олгогдох уу?"
                  answer="Таны борлуулалтын орлого нь манай тогтоосон шалгуурыг хангаж байгаа тохиолдолд зээл олгож болно."
                />
                <Question
                  data-aos="fade-left"
                  type="middle"
                  id={7}
                  question="Заавал үл хөдлөх хөрөнгө барьцаалах уу?"
                  answer="Бид 40 сая хүртэл төгрөгийн бизнесийн зээлд үл хөдлөх хөрөнгийн барьцаа шаардахгүй бөгөөд бараа материал, борлуулалтын орлого, бусад хөдлөх хөрөнгө барьцаалан зээл олгоно."
                />
                <Question
                  data-aos="fade-left"
                  type="large"
                  id={8}
                  question="Зээл авахад ямар материал бүрдүүлэх вэ?"
                  answer={
                    <ul>
                      <li>
                        Орлого нотлох баримтууд (дансны хуулга 6-12 сар хүртэл,
                        хар дэвтэр, кассын тайлан, санхүүгийн тайлан)
                      </li>
                      <li>
                        Үйл ажиллагаатай холбоотой баримтууд (тусгай зөвшөөрөл,
                        түрээсийн гэрээ, бусад)
                      </li>
                      <li>
                        Банк болон ББСБ-д зээлийн үлдэгдэлтэй бол зээл,
                        барьцааны гэрээний хуулбар
                      </li>
                      <li>
                        Үл хөдлөх хөрөнгө барьцаалах тохиолдолд хөрөнгийн
                        гэрчилгээ.
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
