import React from 'react';
import styles from '../styles/Button.module.css';



/**
 * A, B
 * type :
 * A(default) : 기본버튼형
 * B : 원형버튼 
 */
const Button = ({text, type, color}) => {
    const ButtonTypeContent = () => {
        switch(type) {
            case 'B': 
                return (
                    <a 
                        style={Object.assign(
                            {},
                            color ? {background: color} : {}
                        )}
                        className={[
                            styles.button,
                            styles.round
                        ].join(" ")}>
                        {text}
                    </a>
                )    
            default: 
                return (
                    <a
                        style={Object.assign(
                            {},
                            color ? {background: color} : {}
                        )}
                        className={styles.button}>
                        {text}
                    </a>
                );
        }
    }
    return(        
        <ButtonTypeContent/>
    )
}

export default Button;