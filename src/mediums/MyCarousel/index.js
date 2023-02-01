import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';

const MyCarousel = (props) => {
    return (
        <Carousel
            showStatus={props.showStatus}
            showArrows={props.showArrows}
            showThumbs={props.showThumbs}
            autoPlay={props.autoPlay}
            interval={props.interval}
            transitionTime={props.transitionTime}
            infiniteLoop={props.infiniteLoop}
        >
            {props.children}
        </Carousel>
    );
}

export default MyCarousel;
