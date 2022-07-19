import React from "react";

const cards = [
  {
    text: "Lorem, ipsum dolor.",
    src: "https://cdn.pixabay.com/photo/2020/06/02/00/03/truck-5248809__340.jpg",
  },
  {
    text: "Lorem, ipsum dolor.",
    src: "https://cdn.pixabay.com/photo/2018/05/11/23/45/highway-3392100_960_720.jpg",
  },
  {
    text: "Lorem, ipsum dolor.",
    src: "https://media.istockphoto.com/photos/shore-crane-loading-containers-in-freight-ship-picture-id515222231?b=1&k=20&m=515222231&s=170667a&w=0&h=KlQb0CtfLqTVrfUrfo6wL4KgT4vYZUdZ3OKXswnvLGM=",
  },
];

const Cards = () => {
  return (
    <div className="container cards-container">
      <h4 className="mb-4">Lorem ipsum dolor sit amet.</h4>
      <div className="row justify-content-center">
        {cards.map((item, key) => (
          <div key={key} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center my-1">
            <div class="card">
              <img src={item.src} class="card-img-top bg-dark" alt="..." />
              <div className="card-body py-2">
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
