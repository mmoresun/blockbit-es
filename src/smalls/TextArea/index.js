import React from "react";
import StyledArea from "./styles";

const TextArea = (props) => {
    return (
        <StyledArea placeholder={props.placeholder}/>
    );
}

export default TextArea;
