import React from "react";

const names = [
  "Урьдчилгаа төлбөр",
  "Сарын хүү",
  "Дээд дүн",
  "Доод дүн",
  "Хугацаа",
  "Эргэн төлөх нөхцөл",
  "Төлбөр хожимдуулсаны шимтгэл (сард)*",
  "Нэмэгдүүлсэн хүү",
  "Давхар зээлжих эрх",
];

const afterpay = [
  { label: "Урьдчилгаа төлбөр", text: "Байхгүй" },
  { label: "Сарын хүү", text: "Хүүгүй" },
  { label: "Дээд дүн", text: "500,000 ₮" },
  { label: "Доод дүн", text: "500,000 ₮" },
  { label: "Хугацаа", text: "30 өдөр" },
  { label: "Эргэн төлөх нөхцөл", text: "30 өдрийн дотор" },
  {
    label: "Төлбөр хожимдуулсаны шимтгэл (сард)*",
    text: "Төлөөгүй дүнгийн 4% (max 1 сая)",
  },
  { label: "Нэмэгдүүлсэн хүү", text: "-" },
  { label: "Давхар зээлжих эрх", text: "5 удаа" },
];

const installment = [
  { label: "Урьдчилгаа төлбөр", text: "Байхгүй" },
  { label: "Сарын хүү", text: "Хүүгүй" },
  { label: "Дээд дүн", text: "2,000,000 ₮" },
  { label: "Доод дүн", text: "100,000 ₮" },
  { label: "Хугацаа", text: "2 эсвэл 3 сар (4 эсвэл 6 хувааж төлөх)" },
  { label: "Эргэн төлөх нөхцөл", text: "Сард 2 удаа" },
  {
    label: "Төлбөр хожимдуулсаны шимтгэл (сард)*",
    text: "Төлөөгүй дүнгийн 4%(max 1 сая)",
  },
  { label: "Нэмэгдүүлсэн хүү", text: "-" },
  { label: "Давхар зээлжих эрх", text: "5 удаа" },
];

const leasing = [
  { label: "Урьдчилгаа төлбөр", text: "Байхгүй" },
  { label: "Сарын хүү", text: "Нөхцөлийн дагуу" },
  { label: "Дээд дүн", text: "20,000,000 ₮" },
  { label: "Доод дүн", text: "1,000,000 ₮" },
  { label: "Хугацаа", text: "3-24 сар" },
  { label: "Эргэн төлөх нөхцөл", text: "Сард 1-2 удаа" },
  { label: "Төлбөр хожимдуулсаны шимтгэл (сард)*", text: "-" },
  { label: "Нэмэгдүүлсэн хүү", text: "20%" },
  { label: "Давхар зээлжих эрх", text: "5 удаа" },
];

export const SimpleBuyTable = (props) => {
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
          <div className="landing-table-header-lite">
            <p className="landing-table-header-lite-title">After pay</p>
          </div>
          {afterpay.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white"
                    : "landing-table-item-grey"
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
          <div className="landing-table-header-pro">
            <p className="landing-table-header-lite-title">Installment</p>
          </div>
          {installment.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white"
                    : "landing-table-item-grey"
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
      ) : props.type === 4 ? (
        <>
          <div className="landing-table-header-pro">
            <p className="landing-table-header-lite-title">Leasing</p>
          </div>
          {leasing.map((item, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "landing-table-item-white"
                    : "landing-table-item-grey"
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
