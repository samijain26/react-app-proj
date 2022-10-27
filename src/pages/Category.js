import React from 'react'
// import axios from 'axios'
import { useState,useEffect } from 'react'
import News from '../components/News'
import { useParams } from "react-router-dom";


export default function Category() {
  const apiKey = process.env.REACT_APP_API;
// console.log(category)
    let params = useParams();
    let category = params.category;
    const [news,setNews]=useState([])
   
     const getNewsHandler  = async (signal) => {
    // const getNewsHandler = () => {
       let api = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=12`;
            // .then((res)=> {
            //     // console.log(res)
            //     setNews(res.data.articles)
            // })
       let response = await fetch(api, { signal });
       let json = await response.json();
       console.log(json);
       setNews(json.articles);
    }

    useEffect(() => {
      const controller = new AbortController();

      let signal = controller.signal;
      setNews([]);
      getNewsHandler(signal);

      return () => {
        controller.abort();
      };
    }, []);
      console.log(news)
    
  return (
      <>
        <div className="container my-3 ">
          <h1 className="text-center">
            
            Welcome to Quick News Bites!!Keep yourself updated with top stories from {category}
          </h1>


          {/* <button className="btn btn-primary" onClick={getNewsHandler} >
            Fetch News
          </button> */}
          <News data={news} />
        </div>
      </>
    );
}
