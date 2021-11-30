import React from "react";
import logo from "../assets/logo.png";
import email from "../assets/ic_email.png";
import location from "../assets/ic_location.png";
import phone from "../assets/ic_phone.png";
import facebook from "../assets/planding/footer-2-1.png";
import instagram from "../assets/planding/footer-2-2.png";
import download1 from "../assets/planding/planding-7-2.png";
import download2 from "../assets/planding/planding-7-3.png";
import { Link } from "react-router-dom";
import mobileig from "../assets/ic_instagram.png";
import mobilefb from "../assets/ic_facebook.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div className="main-footer">
          <div
            style={{
              paddingTop: 46,
              paddingBottom: 50,
              marginLeft: 0,
              paddingLeft: 0,
            }}
            className="container"
          >
            <div className="footer-information">
              <img className="footer-logo" src={logo} alt="Simple" />
              <img className="footer-icon" src={phone} alt="icon" />
              <span className="footer-icon-text">1800 2828</span>
              <img className="footer-icon" src={email} alt="icon" />
              <span className="footer-icon-text">info@simple.mn</span>
              <img className="footer-icon" src={location} alt="icon" />
              <div style={{ display: "inline-grid" }}>
                <span className="footer-icon-text">
                  СБД, 8-р хороо, Сэнтрал Тауэр, 1-р давхар
                </span>
                <span className="footer-icon-text">Да-Ба: 9:00-18:30</span>
                <span className="footer-icon-text">Бя-Ня: 11:00-16:00</span>
              </div>
            </div>
            <div style={{ marginTop: 70, textAlign: "center" }}>
              <a
                href="https://apps.apple.com/us/app/id1527026555"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-button-download"
                  src={download1}
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
                  className="footer-button-download"
                  src={download2}
                  style={{ marginLeft: 8.5 }}
                  alt=""
                />
              </a>
            </div>
            <div className="terms-button-div">
              <Link to="/terms" rel="norefferer">
                <p className="terms-button">Бүтээгдэхүүн үйлчилгээний нөхцөл</p>
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="/compliance">
                <p className="terms-button">
                  Хянан нийцүүлэх үйл ажиллагаа (Комплаенс)
                </p>
              </Link>
            </div>
            <div className="terms-button-div mobile">
              <Link to="/terms" rel="norefferer">
                <p className="terms-button">Бүтээгдэхүүн үйлчилгээний нөхцөл</p>
              </Link>
              <Link to="/compliance" rel="norefferer">
                <p className="terms-button">
                  Хянан нийцүүлэх үйл ажиллагаа (Комплаенс)
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mobile-background">
        <img className="footer-mobile-logo" src={logo} alt="Simple" />
        <div className="footer-mobile-top-info">
          <img className="footer-mobile-icon" src={phone} alt="icon" />
          <span className="footer-mobile-icon-text">1800 2828</span>
          <img className="footer-mobile-icon" src={email} alt="icon" />
          <span className="footer-mobile-icon-text" style={{ marginRight: 0 }}>
            info@simple.mn
          </span>
        </div>
        <img className="footer-mobile-icon" src={location} alt="icon" />
        <div style={{ display: "inline-grid", marginTop: 17 }}>
          <span className="footer-mobile-icon-text">
            СБД, 8-р хороо, Сэнтрал Тауэр,
            <br />
            1-р давхар
          </span>
          <span className="footer-mobile-icon-text">
            Да-Ба:&nbsp;&nbsp;&nbsp; 9:00-18:30
          </span>
          <span className="footer-mobile-icon-text">
            Бя-Ня:&nbsp;&nbsp;&nbsp; 11:00-16:00
          </span>
        </div>
        <div style={{ marginTop: 35, textAlign: "center" }}>
          <a
            href="https://apps.apple.com/us/app/id1527026555"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-button-mobile-download"
              src={download1}
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
              className="footer-button-mobile-download"
              src={download2}
              style={{ marginLeft: 8.5 }}
              alt=""
            />
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: "#e5eaea" }} className="footer">
        <div className="footer-divider"></div>
        <div style={{ display: "flex" }} className="main-footer bottom-footer">
          <div>
            <span className="copyright">
              Бүх эрх хуулиар хамгаалагдсан © {new Date().getFullYear()}. Ашид
              Капитал ББСБ ХХК.
            </span>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/SimpleMGL/"
            >
              <img className="social-icon" src={facebook} alt="social" />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/simplemgl/"
            >
              <img className="social-icon" src={instagram} alt="social" />
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-footer">
        <div>
          <Link to="/terms" rel="norefferer">
            <p className="terms-button">Бүтээгдэхүүн үйлчилгээний нөхцөл</p>
          </Link>
          <Link to="/compliance" rel="norefferer">
            <p className="terms-button">
              Хянан нийцүүлэх үйл ажиллагаа (Комплаенс)
            </p>
          </Link>
        </div>
        <span className="copyright">
          Бүх эрх хуулиар хамгаалагдсан © {new Date().getFullYear()}. Ашид
          Капитал ББСБ ХХК.
        </span>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/SimpleMGL/"
          >
            <img className="mobile-footer-social-icon" src={mobilefb} alt="" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/simplemgl/"
          >
            <img className="mobile-footer-social-icon" src={mobileig} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
