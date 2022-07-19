import React from "react";

const Footer = () => {
  return (
    <footer >
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#24415F", color: "#748A9D" }}
      >
        <div className="row justify-content-center px-0 px-md-5">
          <div className="col-auto">
            <a className="footer-brand p-0 me-0 me-lg-5" href="/">
              GTS<i className="bi bi-gear-wide-connected"></i>
            </a>
          </div>
          <div className="col-auto">
            <div>Lorem</div>
            <div>Ipsum dolor</div>
          </div>
          <div className="col-auto">
            <div>Lorem</div>
            <div>Ipsum dolor</div>
          </div>
          <div className="col-auto mt-4 mt-md-0">
            <div>Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <div className="col-auto text-center mt-2 mt-lg-0">
            <span>+7 926 904-10-11</span>
            <br />
            <a href="/">Contact us</a>
          </div>
        </div>
      </div>
      <div className="text-secondary text-center py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, tempore?
      </div>
    </footer>
  );
};

export default Footer;
