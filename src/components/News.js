import React from 'react'
import NewsItems from './NewsItems';

export default function News({ data }) {
    console.log(data)
  return (
    <div className="container my-3">
      
      
      <div className="row">
              {data.map((item) => {
            return(
            <div className="col-3">
                <NewsItems key={item.url} news={item} />
            </div>
            )
        })}
      </div>
    </div>
  );
}
