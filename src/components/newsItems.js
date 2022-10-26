import React from 'react'

export default function NewsItems({ news }) {
    console.log(news)
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="card " style={{ width: "18rem" }}>
            <img
              src={
                !news.urlToImage
                  ? "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=EAvhXNSw"
                  : news.urlToImage
              }
              className="card-img-top"
                          alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">
                {news.title ? news.title.slice(0, 45) : ""}
              </h5>
              <p className="card-text">
                {news.description ? news.description.slice(0, 60) : ""}
              </p>
              <a href={news.url}  className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
