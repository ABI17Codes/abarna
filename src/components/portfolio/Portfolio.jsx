import "./portfolio.css";

import IMG1 from "../../assets/abarna1.jpg";
import IMG2 from "../../assets/abarna2.jpg";
import IMG3 from "../../assets/abarna3.jpg";
import IMG4 from "../../assets/abarna4.jpg";
import IMG5 from "../../assets/abarna5.jpg";
import IMG6 from "../../assets/abarna6.jpg";
import IMG7 from "../../assets/abarna7.jpg";
import IMG8 from "../../assets/abarna8.jpg";
import IMG9 from "../../assets/abarna9.jpg";
import IMG10 from "../../assets/abarna10.jpg";
import IMG11 from "../../assets/abarna11.jpg";
import IMG12 from "../../assets/abarna12.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Flexcavo",
      img: IMG1,
    },
    {
      id: 2,
      title: "Meet Native",
      img: IMG2,
    },
    {
      id: 3,
      title: "Mob Inspire",
      img: IMG3,
    },
    {
      id: 4,
      title: "Raise",
      img: IMG4,
    },
    {
      id: 5,
      title: "Potsave",
      img: IMG5,
    },
    {
      id: 6,
      title: "Health",
      img: IMG6,
    },
    {
      id: 7,
      title: "Health",
      img: IMG7,
    },
    {
      id: 8,
      title: "Health",
      img: IMG8,
    },
    {
      id: 9,
      title: "Health",
      img: IMG9,
    },
    {
      id: 10,
      title: "Health",
      img: IMG10,
    },
    {
      id: 11,
      title: "Health",
      img: IMG11,
    },
    {
      id: 12,
      title: "Health",
      img: IMG12,
    },

  ];

  return (
    <section id="portfolio">
      <h5>My</h5>
      <h2>CERTIFICATION's</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            {/* <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
