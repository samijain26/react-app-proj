import React from 'react'

export default function NewsItems({ news }){
    console.log(news)
  return (
    <div className="container my-3">
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
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">
                {news.description ? news.description : ""}
              </p>
              <p class="card-text">
                <small class="text-muted">{new Date(news.publishedAt).toLocaleDateString()} { new Date(news.publishedAt).toLocaleTimeString()}</small>
              </p>

              <a href={news.url} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}