import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./DemoCarousel.css";
import pic1 from "./4.jpg"
import pic2 from "./1.webp"
import pic3 from "./2.webp"
import pic4 from "./3.webp"


export default function DemoCarousel() {
    return (
        <div className="carousel-container">
            <Carousel>
                <div>
                    <img alt="" src={pic1}/>
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img alt="" src={pic2}/>
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img alt="" src={pic3}/>
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img alt="" src={pic4}/>
                    <p className="legend">Las Vegas</p>
                </div>

            </Carousel>
        </div>
    );
};


