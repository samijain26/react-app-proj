import React from "react";
import axios from "axios";
import { useState ,useRef} from "react";
// https://newsapi.org/v2/top-headlines?country=us&apiKey=eb687302c7e34c708bb878cb7ec67562

export default function Home() {
  const apiKey = process.env.REACT_APP_API;
  const [allnews, setAllNews] = useState([]);
   let textRef = useRef();

  const getNewsHandler = () => {
      
    axios
      .get(`https://newsapi.org/v2/everything?q=${textRef}&apiKey=${apiKey}&pageSize=30`)
      .then((res) => {
        console.log(res);
        setAllNews(res.data.articles);
      });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // stop our request after starting it
  // const controller = new AbortController();

  // target the specific signal property
  // let signal = controller.signal;

  // { current: element }   ->  element is our input
 textRef = textRef.current.value;
textRef = textRef ? textRef : "apple";
  getNewsHandler();
};



  return (
    <div className='container-fluid'>
      <div className="container  mt-5">
        <figure
          className="text-left  p-3 fs-3"
          
        >
          <h3 className=" mt-5" style={{ color: "blue" }}>
             Use search to find
            specific news (eg. type tesla to get tesla news). or selct category
            from Navigation Bar
            <br />
            <br />
          </h3>
        </figure>
       
        <form className="d-flex  mb-5" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2  p-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={textRef}
          />
          <button
            className="btn btn-outline-info btn-lg btn-dark"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
  
      <div className="container mb-5">
        <div className="row">
          {allnews.map((item) => {
            return (
              <div key={item.title} className="col-3">
                <div className="card " style={{ width: "18rem" }}>
                  <img
                    src={
                      !item.urlToImage
                        ? "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=EAvhXNSw"
                        : item.urlToImage
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {new Date(item.publishedAt).toLocaleDateString()}{" "}
                        {new Date(item.publishedAt).toLocaleTimeString()}
                      </small>
                    </p>
                    <a href={item.url} className="btn btn-info">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
