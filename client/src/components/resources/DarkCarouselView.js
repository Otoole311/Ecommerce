import React from 'react';
import '../../css/resources/CarouselView.css';
import {Carousel} from 'react-bootstrap';

export const DarkCarouselView =({carouseldata})=>{
    return(
        <Carousel id="myCarousel">
            {carouseldata.map((item,index) =>
                <Carousel.Item key={index} className="carousel-item">
                    <div className="img-container">
                        <svg id="svg-container">
                            <g>
                            <rect id="dark-rec-svg"
                                x="220" y="0" rx="20" ry="20"/>
                                <text className="text-svg" x="250" y="90" fill="white">{item.title}</text>
                                <text className="text-svg" x="250" y="120" fill="white">{item.summary}</text>
                            </g>
                            
                        </svg>
                        <img src={item.filePath} 
                            alt="pic"
                            id="svg-img"
                            />
                    </div>
                </Carousel.Item>
            )}
        </Carousel>

    );
}
