import React from 'react'

export default function Footer() {
  return (
    <div>
      <br></br>
      <footer className=" text-white text-bg-info">
        {/* <!-- Grid container --> */}
        <div className="container  py-5">
          {/* <!-- Section: Images --> */}

          <div className="row">
            <div className="col-lg-2">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/103.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/109.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/110.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/102.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-2 ">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-2 ">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded-circle "
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                  className="w-100 rounded-circle"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright
          </div>
        </div>
      </footer>
    </div>
  );
}
