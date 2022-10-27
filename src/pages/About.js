import React from "react";
import axios from "axios";
import { useState } from "react";
// https://newsapi.org/v2/top-headlines?country=us&apiKey=eb687302c7e34c708bb878cb7ec67562

export default function About() {
  const apiKey = process.env.REACT_APP_API;
  const [allnews, setAllNews] = useState([]);

  const getNewsHandler = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=tesla&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res);
        setAllNews(res.data.articles);
      });
  };

  return (
    <>
      <div className="container my-3 ">
        <h1>
          Welcome to Quick News Bites. Click on Fetch news to keep you updated
          with current events of misllenious category.Please select on individual
          category from Top to get specific news
        </h1>
          <imput></imput>
        <button className="btn btn-primary" onClick={getNewsHandler}>
          Fetch News
        </button>
      </div>
      <div className="container">
        <div className="row">
          {allnews.map((item) => {
            return (
              <div className="col-3">
                <div className="card " style={{ width: "18rem" }}>
                  <img
                    src={item.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
