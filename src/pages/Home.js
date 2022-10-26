import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import News from '../components/News'
// https://newsapi.org/v2/top-headlines?country=us&apiKey=eb687302c7e34c708bb878cb7ec67562

export default function Home() {

    const [news,setNews]=useState([])
   
    const getNewsHandler = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=eb687302c7e34c708bb878cb7ec67562&pageSize=12")
            .then((res)=> {
                console.log(res)
                setNews(res.data.articles)
            })
       
    }

     useEffect(() => {
       getNewsHandler();
     }, []);

    return (
      <>
        <div className="container my-3 ">
          <h1>
            Welcome to Quick News Bites!!Keep yourself updated with top stories
          </h1>

          {/* <button className="btn btn-primary" onClick={getNewsHandler} >
            Fetch News
          </button> */}
           <News data={news}/>
        </div>
      </>
    );
}
