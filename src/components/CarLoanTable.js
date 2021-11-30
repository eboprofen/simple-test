import React from "react";

const names = [
  "Зээлийн дээд хэмжээ",
  "Сарын хүү",
  "Урьдчилгаа",
  "Үйлдвэрлэсэн он",
  "Импортлогдсон огноо",
  "Зээл олголтын шимтгэл",
];

const newCar = [
  { label: "Зээлийн дээд хэмжээ", text: "Автомашины үнэлгээ" },
  { label: "Сарын хүү", text: "1.5%-2.5%" },
  { label: "Урьдчилгаа", text: "10%" },
  {
    label: "Үйлдвэрлэсэн он",
    text: "-",
  },

  { label: "Импортлогдсон огноо", text: "0" },
  { label: "Зээл олголтын шимтгэл", text: "0.5% (1.5 саяас хэтрэхгүй)" },
];

const oldCar = [
  { label: "Зээлийн дээд хэмжээ", text: "300 сая хүртэл" },
  { label: "Сарын хүү", text: "1.7%-2.7%" },
  { label: "Урьдчилгаа", text: "20-30%" },
  {
    label: "Үйлдвэрлэсэн он",
    text: "2008 оноос хойш",
  },

  { label: "Импортлогдсон огноо", text: "2016 оноос хойш" },
  { label: "Зээл олголтын шимтгэл", text: "0.5% (1.5 саяас хэтрэхгүй)" },
];

export const CarLoanTable = (props) => {
  return (
    <div className={`landing-table-outer tableitem-${props.type}`}>
      {props.type === 1 ? (
        <>
          <div className="landing-table-header-none table-1"></div>
          {names.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white-title table-1"
                    : "landing-table-item-grey-title table-1"
                }
              >
                <p className="landing-table-item-1">{item}</p>
              </div>
            );
          })}
        </>
      ) : props.type === 2 ? (
        <>
          <div className="carloan-table-header-lite">
            <p className="landing-table-header-lite-title">Шинэ машин</p>
          </div>
          {newCar.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white big"
                    : "landing-table-item-grey big"
                }
              >
                {props.ipad ? (
                  <>
                    <p className="landing-table-mobile-item-title">
                      {item.label}
                    </p>
                    <p className="landing-table-mobile-item-text">
                      {item.text}
                    </p>
                  </>
                ) : (
                  <p className="landing-table-item-2">{item.text}</p>
                )}
              </div>
            );
          })}
        </>
      ) : props.type === 3 ? (
        <>
          <div className="carloan-table-header-pro">
            <p className="landing-table-header-pro-title">Хуучин машин</p>
          </div>
          {oldCar.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white big"
                    : "landing-table-item-grey big"
                }
              >
                {props.ipad ? (
                  <>
                    <p className="landing-table-mobile-item-title">
                      {item.label}
                    </p>
                    <p className="landing-table-mobile-item-text">
                      {item.text}
                    </p>
                  </>
                ) : (
                  <p className="landing-table-item-2">{item.text}</p>
                )}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
