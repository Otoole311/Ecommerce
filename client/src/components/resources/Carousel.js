import React from 'react';
import '../../css/resources/CarouselView.css';
import {Carousel} from 'react-bootstrap';

export const CarouselView =({carouseldata})=>{
    return(
        <Carousel id="myCarousel">
            {carouseldata.map((item,index) =>
                <Carousel.Item key={index} className="carousel-item">
                    <div className="img-container">
                        <svg width="100%" height="100%">
                                <g>
                                <rect id="rec-svg" width="250" height="90%"
                                x="220" y="20" rx="20" ry="20"/>
                                <text x="260" y="90" fill="white">{item.title}</text>
                                <text x="260" y="120" fill="white">{item.summary}</text>
                                </g>            
                        </svg>
                        <img src={item.filePath} 
                            alt="pic"
                            id="svg-img"
                            />
                    </div>        

                    {/* <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            )}
        </Carousel>

    );
}