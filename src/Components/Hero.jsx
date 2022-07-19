import React from "react";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="hero">
        <div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <button
            className="btn btn-outline-light"
            style={{ borderRadius: "50px" }}
          >
            Lorem Ipsum
          </button>
        </div>
      </div>
      <div
        className="d-flex justify-content-center px-md-5"
        style={{ position: "relative", bottom:'100px' }}
      >
        <div style={{ backgroundColor: "#24415F",borderRadius:5, color:'white', padding:'30px 20px' }}>
          <form className="row g-3 align-items-center">
            <div className="col-12 col-sm-6 col-md-4 ">
              <label htmlFor="inputText" >Text</label>
              <input type="text" className="form-control" id="inputText" />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-auto col-md-3 ">
              <label >Select</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-12 col-md-2 d-flex" style={{alignSelf:'flex-end'}}>
              <button type="submit" className="btn btn-danger w-100" style={{borderRadius:'50px'}}>Contact us</button>
            </div>
            <div className="col-12 col-md-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Check something
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
