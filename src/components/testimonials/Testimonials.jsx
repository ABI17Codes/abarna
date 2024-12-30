import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abarna K",
      test: "Successfully completed a project on “Wireless Notice Board using Arduino and Bluetooth:” during the third semester in Chettinad College of Engineering and Technology,Karur. ",
    },
    {
      id: 2,
      name: "Abarna K",
      test: " Successfully completed a project on “Student dropout:” during the third semester in Chettinad College of Engineering and Technology,Karur. ",
    },
  ];
  return (
    <section id="testimonials">
      <h5>My</h5>
      <h2>PROJECT's</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
