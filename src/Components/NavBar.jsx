import React from "react";

const sections = [
  { href: "/", title: "Section1" },
  { href: "/", title: "Section2" },
  { href: "/", title: "Section3" },
  { href: "/", title: "Section4" },
];

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white bd-navbar fixed-top py-0" style={{zIndex:10000}}>
      <nav
        className="w-100 d-flex justify-content-end  justify-content-md-center bd-gutter "
        aria-label="Main navigation"
      >
        <a className="navbar-brand p-0 me-0 me-lg-5" href="/">
          GTS<i className="bi bi-gear-wide-connected"></i>
        </a>
        <button
          className="navbar-toggler d-flex d-md-none order-3 p-2 ms-5 ms-md-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          className="offcanvas-md offcanvas-end"
          id="bdNavbar"
          aria-labelledby="bdNavbarOffcanvasLabel"
          data-bs-scroll="true"
        >
          <div className="offcanvas-header px-4 pb-0">
            <h5 className="offcanvas-title " id="bdNavbarOffcanvasLabel">
              Bootstrap
            </h5>
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              data-bs-target="#bdNavbar"
            />
          </div>
          <div className="offcanvas-body">
            <hr className="d-lg-none text-dark-50" />
            <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav ">
              {sections.map((item, key) => (
                <li key={key} className="nav-item nav-section col-6 col-md-auto">
                  <a
                    className="nav-link py-2 px-0 active"
                    aria-current="true"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contact-info ms-5 me-4 text-center">
          <span>+7 926 904-10-11</span>
          <br />
          <a href="/">Contact us</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
