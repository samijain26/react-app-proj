import React from "react";

export default function About() {
  return (
    <>
      {/* <div className="card border-info mb-1" style={{ maxwidth: "19rem" }}> */}
      <div className="card-header">
        <figure className="text-center  p-2 fs-4">
          <blockquote className="blockquote fs-2  ">
            <h2 className="card-title text-center  mt-5 p-4 fs-1">
              Welcome to News Bites
            </h2>
            <p className="fst-italic">
              The news is a greater treasure to the people than uncounted
              millions of gold.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">Henry Ward Beecher</cite>
          </figcaption>
        </figure>
      </div>
      <div className="card-body">
        <p className=" mb-5 text-bg-light p-1 fs-4">
          News Bite is the REST API for searching news articles of different
          category from different sources. You can search articles using
          keywords or phrases. You can also choose category from the navigation
          bar to search for a news of specific category. This app uses resources
          from India or USA to fetch the new of required search criteria.This
          app is built using news app, an external api.
        </p>
      </div>
      {/* </div> */}
    </>
  );
}
