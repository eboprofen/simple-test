import { Divider } from "@material-ui/core";
import React from "react";
import successIcon from "../assets/ic_loan_info_card_success.png";

export const LoanInfoCard = () => (
  <div className="loan-info-card">
    <span className="loan-info-card-title">Бизнесийн зээл</span>
    <Divider
      style={{ backgroundColor: "#f0f2f6", marginTop: 18, marginBottom: 18 }}
    />
    <img className="loan-info-card-icon" src={successIcon} alt="icon" />
    <span className="loan-info-card-info">Хэмжээ 500 сая хүртэл</span>
    <br />
    <img className="loan-info-card-icon" src={successIcon} alt="icon" />
    <span className="loan-info-card-info">Хугацаа 36 сар хүртэл</span>
    <br />
    <img className="loan-info-card-icon" src={successIcon} alt="icon" />
    <span className="loan-info-card-info">Хүү 1.5% - 2.5%</span>
  </div>
);
