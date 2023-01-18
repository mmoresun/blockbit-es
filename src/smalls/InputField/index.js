import React from 'react';
import * as styles from './styles.module.css';

const InputField = (props) => {
    return (
        <>
            <input type="text" className={styles[props.inputSize]} placeholder={props.inputPlaceholder} />
        </>
    );
}

export default InputField;
