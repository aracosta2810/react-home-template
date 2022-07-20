import React from "react";

const features = [
  { text: "Lorem, ipsum dolor.", class: "bi bi-truck text-danger" },
  { text: "Lorem, ipsum dolor.", class: "bi bi-person text-danger" },
  { text: "Lorem, ipsum dolor.", class: "bi bi-stopwatch text-danger" },
  { text: "Lorem, ipsum dolor.", class: "bi bi-envelope-paper text-danger" },
];

const Features = () => {
  return (
    <div className="mb-5" style={{marginTop:'70px'}}>
      <h4 className="mb-4">Lorem ipsum dolor sit amet consectetur.</h4>
      <div className="row ">
        {features.map((item, key) => (
          <div className="col-6 mt-3 mt-md-0 col-md-3 d-flex justify-content-center justify-content-md-start">
            <div>
              <div className="text-center">
                <i className={item.class} style={{ fontSize: "3rem" }}></i>
              </div>
              <div className="text-center">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
