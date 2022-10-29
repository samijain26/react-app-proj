import React from 'react'
// import axios from 'axios'
import { useState,useEffect } from 'react'
import News from '../components/News'
import { useParams } from "react-router-dom";
import Header from '../components/Header';

export default function Category() {
  const apiKey = process.env.REACT_APP_API;
// console.log(category)
  
  let params = useParams();
  
    let category = params.category;
  const [news, setNews] = useState([])
  const [country,setCountry] = useState('us')
   
     const getNewsHandler  = async (signal) => {
    // const getNewsHandler = () => {
       let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=12`;
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
    }, [category,country]);
  console.log(news)
  
  const changeCountryhandler = () => {
    if (country === 'us') {
      setCountry('in')
    } else {
      setCountry('us')
    }
    //  getNewsHandler()
    console.log(country)
  }
  // useEffect(()=> {
    
  // },[country])
    
  return (
    <>
      {/* <div className="container my-3 "> */}
        <div className="text-center text-bg-info p-3 fs-3">
          <Header category={category} />
         
          <h5 classname="p-3 fs-3">
            News are coming from {country === "us" ? "USA" : "INDIA"}
          </h5>

          <button
            className="btn btn-lg btn-outline-dark btn-3"
            onClick={changeCountryhandler}
          >
            USA/INDIA
          </button>
        </div>
        <News data={news} />
      {/* </div> */}
    </>
  );
}
