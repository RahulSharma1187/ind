import React from 'react'
import "./meetTheFounderTestimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MeetTheFounderTestimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
    <div className='meetTheFounderTestimonial'>
        <Slider {...settings}>
        {data.map((d) => (
           <div className='testimonialBox'> 
                <div className='testimonialImgBox'>
                    <img src={d.img} alt="" />
                </div>
                <div className='testimonialContBox'>
                    <h3>{d.name}</h3>
                    <p>{d.review}</p>
                </div>
           </div> 
        ))}
        </Slider>
    </div>
  )
}

const data = [
    {
        name: 'John Morgan 1',
        img: '../images/testimonial/1.png',
        review: `1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        name: 'John Morgan 2',
        img: '../images/testimonial/2.png',
        review: `2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        name: 'John Morgan 3',
        img: '../images/testimonial/3.png',
        review: `3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        name: 'John Morgan 4',
        img: '../images/testimonial/4.png',
        review: `4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        name: 'John Morgan 5',
        img: '../images/testimonial/5.png',
        review: `5. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    }
]

export default MeetTheFounderTestimonial