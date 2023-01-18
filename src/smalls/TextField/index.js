import React from "react";
import * as styles from "./styles.module.css";

const TextArea = (props) => {
    return (
        <textarea placeholder={props.textAreaPlaceholder} className={styles.standard}/>
    );
}

export default TextArea;
