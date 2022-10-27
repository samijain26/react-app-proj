import React from 'react'
import NewsItems from "../pages/NewsItems"

export default function News({ data }) {
   
  return (
    <div className="container my-3">
      
      
      <div className="row">
              {data.map((item) => {
            return(
            <div className="col-md-4">
                <NewsItems key={item.url} news={item} />
            </div>
            )
        })}
      </div>
    </div>
  );
}
