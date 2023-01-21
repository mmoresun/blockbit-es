import React from "react";
import StyledArea from "./styles";

// TextArea has a placeholder, don't forget to set it.
// Examlpe:
// TextArea placeholder="Some text" />

const TextArea = (props) => {
    return (
        <StyledArea placeholder={props.placeholder}/>
    );
}

export default TextArea;
