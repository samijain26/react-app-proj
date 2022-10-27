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
      .get(`https://newsapi.org/v2/everything?q=${textRef}&apiKey=${apiKey}`)
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
textRef = textRef ? textRef : "tesla";
  getNewsHandler();
};



  return (
    <>
      <div className="container my-3 ">
        <h1>
          Welcome to Quick News Bite.  Keep you updated with current affairs
          . Use search to find specific news (eg.
          type tesla to get tesla news). or selct category from Navigation Bar
          <br />
          <br />
        </h1>

        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={textRef}
          />
          <button className="btn btn-outline-info btn-light" type="submit">
            Search
          </button>
        </form>

        {/* <button className="btn btn-primary" onClick={getNewsHandler}>
          Fetch News
        </button> */}
      </div>
      <div className="container">
        <div className="row">
          {allnews.map((item) => {
            return (
              <div className="col-3">
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
