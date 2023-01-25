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


// import React, { useState, useEffect } from 'react';

// import StyledAnimation from './styles';

// function Animation() {
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(time + 0.01);
//         }, 10);
//         return () => clearInterval(interval);
//     }, [time]);

//     const x = Math.cos(time % (500 * Math.PI)) * 30;
//     const y = Math.sin(time % (500 * Math.PI)) * 30;

//     const style1 = {
//         position: 'relative',
//         left: `calc(5% + ${x * 3}px)`,
//         top: `calc(5% + ${y}px)`,
//         width: '600px',
//         height: '400px',
//         transform: 'rotate(-10deg)',
//         backgroundColor: 'rgb(121,255,241)',
//         opacity: '.3'
//     };

//     const style2 = {
//         position: 'absolute',
//         left: `calc(1% - ${x}px)`,
//         top: `calc(2% - ${2 * y}px)`,
//         width: '500px',
//         height: '500px',
//         transform: 'rotate(-10deg)',
//         backgroundColor: 'rgb(121,255,241)',
//         opacity: '.3'
//     };

//     const style3 = {
//         position: 'absolute',
//         left: `calc(11% - ${5 * x}px)`,
//         top: `calc(34% + ${y}px)`,
//         width: '500px',
//         height: '420px',
//         transform: 'rotate(-10deg)',
//         backgroundColor: 'rgb(121,255,241)',
//         opacity: '.3'
//     };

//     const style4 = {
//         position: 'absolute',
//         left: `calc(1% + ${x}px)`,
//         top: `calc(2% - ${y * 3}px)`,
//         width: '500px',
//         height: '600px',
//         transform: 'rotate(-10deg)',
//         backgroundColor: 'rgb(121,255,241)',
//         opacity: '.3'
//     };

//     const style5 = {
//         position: 'absolute',
//         left: `calc(3% - ${x}px)`,
//         top: `calc(1% - ${y * 2}px)`,
//         width: '450px',
//         height: '450px',
//         transform: 'rotate(-10deg)',
//         backgroundColor: 'rgb(121,255,241)',
//         opacity: '.3'
//     };

//     return (
//         <StyledAnimation>
//             <div style={style1} />
//             <div style={style2} />
//             <div style={style3} />
//             <div style={style4} />
//             <div style={style5} />
//         </StyledAnimation>
//     )
// }

// export default Animation;