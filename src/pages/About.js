import React from 'react'

export default function About() {
    return (
      <>
        {/* <div className="card border-info mb-3" style={{ maxwidth: "18rem" }}> */}
                <div className="card-header">
                    
            <figure class="text-center text-bg-info p-3 fs-3">
              <blockquote class="blockquote fs-1">
                <h2 className="card-title text-center text-bg-info p-3 fs-1">
                  Welcome to News Bites
                </h2>
                <p>
                  The newspaper is a greater treasure to the people than
                  uncounted millions of gold.
                </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">Henry Ward Beecher</cite>
              </figcaption>
            </figure>
          {/* </div> */}
          {/* <div className="card-body"> */}
            <p className="card-text text-bg-light  fs-3">
              News Bite is the REST API for searching news articles of different
              category from different sources. You can search articles using
              keywords or phareses. You can also choose category from the Top to
              search for a news of specific category.
            </p>
          </div>
        {/* </div> */}
      </>
    );
}
