import React from "react";

export const LoanButton = ({onClick}) => (
  <div onClick={onClick} className="loan-button">
    <p className="loan-button-text">Зээл хүсэх</p>
  </div>
);

export const LoanButtonMobile = ({onClick}) => (
  <div onClick={onClick} className="loan-mobile-button">
    <p className="loan-button-text">Зээл хүсэх</p>
  </div>
);
