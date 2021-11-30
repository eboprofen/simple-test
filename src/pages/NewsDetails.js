import React, { useEffect, useState } from "react";
import "./news.css";
import ReactMarkdown from "react-markdown";
import * as api from "../api";
import svg from "../assets/logo.svg";
import { Helmet } from "react-helmet";
const decorator = require("./metaDecorator.json");

export const NewsDetails = ({ match }) => {
  useEffect(() => {
    setLoading(true);

    api.getContent(match.params.id).then((res) => {
      console.log(res);
      setData(res);
      setLoading(false);
    }); // eslint-disable-next-line
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  return loading ? (
    <div style={{ textAlign: "center", margin: "auto 0" }}>
      <object>
        <embed src={svg} />
      </object>
    </div>
  ) : (
    <div className="news-div">
      <NewsTemplate data={data} />
    </div>
  );
};

const NewsTemplate = ({ data }) => (
  <div className="news-details-main">
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.short} />
      <meta property="og:description" content={data.short} />
      <meta property="og:title" content={data.title} />

      <meta
        name="image"
        property="og:image"
        content={"https://cms.simple.mn" + data.cover.url}
      />
      <meta
        property="og:url"
        content={
          decorator.hostname + window.location.pathname + window.location.search
        }
      />
    </Helmet>
    <img
      className="news-details-cover"
      src={"https://cms.simple.mn" + data.cover.url}
      alt=""
    />
    <div className="news-details-main-div">
      <span className="news-details-title">{data.title}</span>
      <span className="news-details-date">{data.publishedon}</span>
    </div>
    <div className="news-details-description">
      <ReactMarkdown
        children={data.body}
        className="news-md"
        transformImageUri={(uri) =>
          uri.startsWith("https") ? uri : `https://cms.simple.mn${uri}`
        }
      />
    </div>
  </div>
);

export default NewsTemplate;
