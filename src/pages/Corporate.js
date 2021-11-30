import React from "react";
import { Helmet } from "react-helmet";
import { LoanBannerCard } from "../components/LoanBannerCard";
import { LoanInfoCard } from "../components/LoanInfoCard";
import { LoanMainCard } from "../components/LoanMainCard";
const decorator = require("./metaDecorator.json");

export const Corporate = () => (
  <div className="form-container">
    <Helmet>
      <title>Бизнес зээл</title>
      <meta
        name="description"
        content="Байгаа газраасаа бизнесийн зээлийн эрхээ шалгаарай."
      />
      <meta
        property="og:description"
        content="Байгаа газраасаа бизнесийн зээлийн эрхээ шалгаарай."
      />
      <meta property="og:title" content="Бизнес зээл" />
      <meta
        property="og:url"
        content={
          decorator.hostname + window.location.pathname + window.location.search
        }
      />
      <meta
        name="image"
        property="og:image"
        content="https://cms.simple.mn/uploads/simple_3_8bfd232fbd.png"
      />
    </Helmet>
    <div
      className="form-main"
      style={{ marginTop: 90, display: "inline-flex" }}
    >
      <LoanInfoCard />
      <LoanMainCard />
      <LoanBannerCard />
    </div>
    <div className="form-ipad">
      <div>
        <LoanInfoCard />
        <LoanBannerCard />
      </div>
      <LoanMainCard />
    </div>
  </div>
);
