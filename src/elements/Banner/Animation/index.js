import React from "react";

import Lottie from "lottie-react";
import rectanglesMoving from "../../../data/anim.json";

import StyledAnimation from './styles';

function Animation() {

    return (
        <div>
            <StyledAnimation>
                <Lottie animationData={rectanglesMoving} />
            </StyledAnimation>
        </div>
    );

};

export default Animation;