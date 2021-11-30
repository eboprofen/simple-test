import React from "react";

const names = [
  "Зээл судлах хугацаа (ажлын)",
  "Барьцаа хөрөнгө",
  "Сарын хүү",
  "Дээд хэмжээ",
  "Доод хэмжээ",
  "Хугацаа",
  "Зээл судалсны шимтгэл",
];

const lite = [
  { label: "Зээл судлах хугацаа (ажлын)", text: "1-3 хоногт" },
  { label: "Барьцаа хөрөнгө", text: "Бараа материал, борлуулалтын орлого" },
  { label: "Сарын хүү", text: "1.5%-2.5%" },
  {
    label: "Дээд хэмжээ",
    text: (
      <p>
        40,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  {
    label: "Доод хэмжээ",
    text: (
      <p>
        5,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  { label: "Хугацаа", text: "1-36 сар" },
  { label: "Зээл судалсны шимтгэл", text: "1%*" },
];

const pro = [
  { label: "Зээл судлах хугацаа (ажлын)", text: "1-3 хоногт" },
  { label: "Барьцаа хөрөнгө", text: "Хөдлөх хөрөнгө, үл хөдлөх хөрөнгө" },
  { label: "Сарын хүү", text: "1.5%-2.5%" },
  {
    label: "Дээд хэмжээ",
    text: (
      <p>
        500,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  {
    label: "Доод хэмжээ",
    text: (
      <p>
        5,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  { label: "Хугацаа", text: "1-36 сар" },
  { label: "Зээл судалсны шимтгэл", text: "1%*" },
];

const proexpress = [
  { label: "Зээл судлах хугацаа (ажлын)", text: "24 цагт" },
  {
    label: "Барьцаа хөрөнгө",
    text: (
      <p>
        Орон сууц
        <br /> <br />
      </p>
    ),
  },
  { label: "Сарын хүү", text: "2.5%" },
  {
    label: "Дээд хэмжээ",
    text: (
      <p>
        100,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  {
    label: "Доод хэмжээ",
    text: (
      <p>
        5,000,000<span style={{ fontFamily: "Rubik" }}>₮</span>
      </p>
    ),
  },
  { label: "Хугацаа", text: "1-24 сар" },
  { label: "Зээл судалсны шимтгэл", text: "1%*" },
];

export const CLandingTable = (props) => {
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
            <p className="landing-table-header-lite-title">Lite</p>
          </div>
          {lite.map((item, index) => {
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
            <p className="landing-table-header-lite-title">Pro</p>
          </div>
          {pro.map((item, index) => {
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
            <p className="landing-table-header-pro-title">Pro express</p>
          </div>
          {proexpress.map((item, index) => {
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
