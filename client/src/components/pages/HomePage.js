import React, { Component } from 'react';
import '../../css/pages/HomePage.css'
import {CarouselView} from '../resources/Carousel';
import {DarkCarouselView} from '../resources/DarkCarouselView';

const data = [
    {
        title: "Test image 1",
        filePath: "assets/Images/dog2.png",
        summary: "Price: $50.00.",
    },
    {
        title: "Test image 2",
        filePath: "assets/Images/dog2_ck.png",
        summary: "Price: $50.00.",
    }
];

class HomePage extends Component{
    render(){
        return(
            <div className="container">
                {/* Title Div */}
                {/* <div> */}
                    {/* <h1>Homepage</h1> */}
                {/* </div> */}

                {/* Rows */}
                <div className="row">
                    {/* Column */}
                    <div className="col test-col">
                            <div className="title-div">
                                <h3>Breeds</h3>
                            </div>

                            <div className="carousel-div">
                                <DarkCarouselView carouseldata={data}/>
                            </div>                            
                    </div>
                </div>

                 {/* Rows */}
                <div className="row">
                   {/* Column */}
                    <div className="col">
                            <div className="title-div">
                                <h3>Herbals</h3>
                            </div>

                            <div className="carousel-div">
                                <CarouselView carouseldata={data}/>
                            </div>                            
                    </div>
                </div>

                 {/* Rows */}
                <div className="row">
                    {/* Column */}
                    <div className="col test-col">
                            <div className="title-div">
                                <h3>Dog Training</h3>
                            </div>

                            <div className="carousel-div">
                                <DarkCarouselView carouseldata={data}/>
                            </div>                            
                    </div>
                </div>

                 {/* Rows */}
                <div className="row">
                    {/* Column */}
                    <div className="col">
                            <div className="title-div">
                                <h3>Vet Services</h3>
                            </div>

                            <div className="carousel-div">
                                <CarouselView carouseldata={data}/>
                            </div>                            
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;