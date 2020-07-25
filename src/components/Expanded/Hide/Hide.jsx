import React from 'react';
import st from './Hide.module.css'

export const Hide = ({ texts, show }) => {

    const getText = () => texts.map((text, index) => <div className={show ? st.show : st.hide} key={index}>
        {show && text}
    </div>)

    return getText();
};