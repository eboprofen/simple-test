import React from "react";
import open from "../assets/ic_qa_open.png";
import close from "../assets/ic_qa_close.png";

export const Question = (props) => {
  const [state, setState] = React.useState(false);
  return (
    <div
      onClick={() => (state ? setState(false) : setState(true))}
      id={props.id}
      className={
        !state
          ? "transform clanding-7-question"
          : props.type === "middle"
          ? "transform clanding-7-question-expanded-middle"
          : props.type === "large"
          ? "transform clanding-7-question-expanded-large"
          : "transform clanding-7-question-expanded"
      }
    >
      <div style={{ display: "flex" }}>
        <p
          className={
            !state
              ? "transform-text clanding-7-question-text"
              : "transform-text clanding-7-question-text-expanded"
          }
        >
          {props.question}
        </p>
        {!state ? (
          <img className="clanding-7-answer-icon" src={open} alt="logo" />
        ) : (
          <img className="clanding-7-answer-icon" src={close} alt="logo" />
        )}
      </div>
      <p
        className={
          !state
            ? "transform-text clanding-7-answer-hidden"
            : "transform-text clanding-7-answer"
        }
      >
        {props.answer}
      </p>
    </div>
  );
};
