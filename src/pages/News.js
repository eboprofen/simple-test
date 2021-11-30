import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./news.css";
import * as api from "../api";
import { Helmet } from "react-helmet";
const decorator = require("./metaDecorator.json");

export const News = () => {
  useEffect(() => {
    api.getNews().then((res) => {
      setData(res.reverse());
    });
  }, []);
  const [data, setData] = useState([]);
  return (
    <>
      <Helmet>
        <title>Блог</title>
        <meta name="description" content="Simple мэдээ" />
        <meta property="og:description" content="Simple мэдээ" />
        <meta property="og:title" content="Блог" />
        <meta
          property="og:url"
          content={
            decorator.hostname +
            window.location.pathname +
            window.location.search
          }
        />
      </Helmet>
      <div className="news-container">
        <div className="news-div">
          <div className="news-main-title-container">
            <p className="news-main-title-text">Блог</p>
          </div>
          {data.map((item) => (
            <Link to={`/news/${item.id}`} style={{ textDecoration: "none" }}>
              <div className="news-card">
                <img
                  className="news-cover"
                  src={"https://cms.simple.mn" + item.cover.url}
                  alt=""
                />
                <div className="news-text-div">
                  <p className="news-title">{item.title.toUpperCase()}</p>
                  <p className="news-description">{item.short}</p>
                  <p className="news-date">{item.publishedon}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
