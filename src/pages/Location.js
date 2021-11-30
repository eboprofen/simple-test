import React, { useEffect, useState } from "react";
import "./location.css";
import phone from "../assets/ic_phone_small.png";
import Select from "@material-ui/core/Select";
import dropdownIcon from "../assets/ic_dropdown.png";
import { MenuItem } from "@material-ui/core";
import infoIcon from "../assets/ic_info.png";
import * as api from "../api";
import { Helmet } from "react-helmet";

const decorator = require("./metaDecorator.json");

export const Location = () => {
  useEffect(() => {
    api.getLocations().then((res) => {
      setData(res);
      setLocations(res.filter((item) => item.city === true));
    });
    setIsCity(true);
    setDistrict("Бүгд");
    setLocations(data.filter((item) => item.city === true));
    // eslint-disable-next-line
  }, []);
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isCity, setIsCity] = useState(true);
  const [district, setDistrict] = useState("Бүгд");
  const arrowIcon = () => {
    return (
      <img
        src={dropdownIcon}
        alt="select"
        style={{ width: 14, height: 14, cursor: "pointer" }}
      />
    );
  };
  return (
    <>
      <Helmet>
        <title>Байршил</title>
        <meta name="description" content="Хаана гэрээ байгуулах вэ гэж үү?" />
        <meta
          property="og:description"
          content="Хаана гэрээ байгуулах вэ гэж үү?"
        />
        <meta property="og:title" content="Байршил" />
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
          content="https://cms.simple.mn/uploads/simple_4_0d86e2a5fc.png"
        />
      </Helmet>
      <div className="location-container">
        <div className="location-div">
          <div className="location-picker-div">
            <div className="location-picker-city-div">
              <div
                onClick={() => {
                  setIsCity(true);
                  setDistrict("Бүгд");
                  setLocations(data.filter((item) => item.city === true));
                }}
                className={
                  isCity
                    ? "location-picker-selected"
                    : "location-picker-not-selected"
                }
              >
                <p
                  className={
                    isCity
                      ? "location-picker-text-selected"
                      : "location-picker-text-not-selected"
                  }
                >
                  Улаанбаатар
                </p>
              </div>
              <div
                onClick={() => {
                  setIsCity(false);
                  setLocations(data.filter((item) => item.city === false));
                }}
                className={
                  !isCity
                    ? "location-picker-selected"
                    : "location-picker-not-selected"
                }
              >
                <p
                  className={
                    !isCity
                      ? "location-picker-text-selected"
                      : "location-picker-text-not-selected"
                  }
                >
                  Орон нутаг
                </p>
              </div>
            </div>
            {isCity ? (
              <div className="location-picker-select-div">
                <Select
                  className="custom-select"
                  IconComponent={arrowIcon}
                  value={district}
                  onChange={(value) => {
                    setDistrict(value.target.value);
                    if (value.target.value === "Бүгд") {
                      setLocations(data.filter((item) => item.city === true));
                    } else {
                      setLocations(
                        data.filter(
                          (item) =>
                            item.city === true &&
                            item.district === value.target.value
                        )
                      );
                    }
                  }}
                >
                  <MenuItem value="Бүгд">Бүгд</MenuItem>
                  <MenuItem value="Сүхбаатар">Сүхбаатар</MenuItem>
                  <MenuItem value="Баянгол">Баянгол</MenuItem>
                  <MenuItem value="Баянзүрх">Баянзүрх</MenuItem>
                  <MenuItem value="Хан-Уул">Хан-Уул</MenuItem>
                  <MenuItem value="Сонгинохайрхан">Сонгинохайрхан</MenuItem>
                  <MenuItem value="Чингэлтэй">Чингэлтэй</MenuItem>
                </Select>
              </div>
            ) : null}
          </div>
          {isCity ? (
            <div>
              {locations.filter((e) => e.type === "main").length > 0 ? (
                <div className="location-title-card">
                  <p className="location-title-text">Simple харилцагчийн төв</p>
                </div>
              ) : null}
              <div>
                {locations.map((item) =>
                  item.type === "main" ? (
                    <div className="location-branch-card">
                      <div>
                        <img
                          className="location-branch-main-image"
                          src={"https://cms.simple.mn" + item.image.url}
                          alt=""
                        />
                      </div>
                      <div className="location-branch-main-info">
                        <p className="location-branch-name">{item.name}</p>
                        <p className="location-branch-location">
                          {item.location}
                        </p>
                        <pre className="location-branch-timetable">
                          {item.timetable.split("\\n").join("\n")}
                        </pre>
                        <div style={{ display: "flex" }}>
                          <img
                            src={phone}
                            alt=""
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: 10,
                            }}
                          />
                          <p className="location-branch-location">
                            {item.phonenumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
              {locations.filter((e) => e.type === "branch").length > 0 ? (
                <div className="location-title-card">
                  <p className="location-title-text">Гэрээ байгуулах цэг</p>
                </div>
              ) : null}

              <div className="location-card-container">
                {locations.map((item) =>
                  item.type === "branch" ? (
                    <div className="location-branch-card">
                      <div>
                        <img
                          className="location-branch-image"
                          src={"https://cms.simple.mn" + item.image.url}
                          alt=""
                        />
                      </div>
                      <div className="location-branch-info">
                        <p className="location-branch-name">{item.name}</p>
                        <p className="location-branch-location">
                          {item.location}
                        </p>
                        <pre className="location-branch-timetable">
                          {item.timetable.split("\\n").join("\n")}
                        </pre>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : null}

          {locations.filter((e) => e.type === "notary").length > 0 ? (
            <>
              <div className="location-title-card">
                <p className="location-title-text">Гэрээт нотариат / даатгал</p>
              </div>
              <div className="location-notary-alert">
                <img className="notary-info-icon" src={infoIcon} alt="" />{" "}
                <p className="notary-info-text">
                  Цахим зээлийн гэрээг нотариат/даатгалаар батлуулсан тохиолдолд
                  үйлчилгээний төлбөр төлдөг болохыг анхаараарай.
                </p>
              </div>
            </>
          ) : null}

          <div
            className="location-card-container"
            style={{ marginBottom: "90px" }}
          >
            {locations.map((item) =>
              item.type === "notary" ? (
                <div className="location-branch-card">
                  <div>
                    <img
                      className="location-branch-image"
                      src={"https://cms.simple.mn" + item.image.url}
                      alt=""
                    />
                  </div>
                  <div className="location-branch-info">
                    <p className="location-branch-name">{item.name}</p>
                    <p className="location-branch-location">{item.location}</p>
                    <pre className="location-branch-timetable">
                      {item.timetable.split("\\n").join("\n")}
                    </pre>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};
