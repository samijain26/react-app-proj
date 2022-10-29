import React from 'react'
import NewsItems from "./NewsItems"

export default function News({ data }) {
   
  return (
    <div className="container my-3">
      
      
      <div className="row">
              {data.map((item,i) => {
            return(
            <div className="col-md-4">
                <NewsItems key={i} news={item} />
            </div>
            )
        })}
      </div>
    </div>
  );
}
