import React from "react";

function Carousel(props) {
    return (
        <div className={"carousel-item " + (props.active && "active")}>
            <div className="bottom-carousel">
                <h1 className="carousel-heading">{props.heading} Studio</h1>
                <p className="carousel-content"> AI powered personalization engine dedicated to understanding human tastes </p>
            </div>
            <img className="carousel-image" src={props.image} alt={props.heading} />
        </div>
    );
}

export default Carousel;