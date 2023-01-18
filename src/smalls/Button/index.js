import React from 'react';
import * as styles from './styles.module.css';

const Button = (props) => {

    return (
        <button className={styles[props.buttonSize]}>
            {props.buttonText}
        </button>
    );
}

export default Button;
