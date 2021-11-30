import React from "react";

const names = [
  "Барьцаа",
  "Сарын хүү",
  "Дээд хэмжээ",
  "Доод хэмжээ",
  "Хугацаа",
  "Хураамж",
  "Зээлийн гэрээ цуцлах",
];

const digital = [
  { label: "Барьцаа", text: "Барьцаагүй" },
  { label: "Сарын хүү", text: "1.7%-3.0%" },
  { label: "Дээд хэмжээ", text: "20,000,000₮" },
  { label: "Доод хэмжээ", text: "50,000₮" },
  { label: "Хугацаа", text: "1-24 сар" },
  { label: "Хураамж", text: "5,000₮" },
  { label: "Зээлийн гэрээ цуцлах", text: "5,000₮" },
];

export const DigitalLoanTable = (props) => {
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
          <div className="landing-table-header-lite digital">
            <p className="landing-table-header-lite-title">Digital Loan</p>
          </div>
          {digital.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white digital"
                    : "landing-table-item-grey digital"
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
