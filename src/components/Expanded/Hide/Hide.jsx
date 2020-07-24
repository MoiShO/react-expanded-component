import React from 'react';
import st from'./Hide.module.css'

export const Hide = ({text, show}) => {

    return (
        <div className={show ? st.show : st.hide}>
            {show && text}
        </div>
    );
};