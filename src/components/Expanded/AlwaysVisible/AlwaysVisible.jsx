import React from 'react';
import st from './AlwaysVisible.module.css'
import arrow from '../../../assets/down-arrow.png'

export const AlwaysVisible = ({ title, dateTo, amount, currency, cardNumber, show, setShow, reOrder }) => {

    return (
        <div className={st.wrapper}>
            <div className={st.titleWrapper}>
                <div className={st.title}>
                    {`${title}${currency ? `, ${currency}` : ''}`}
                </div>
                <div className={st.subTitle} onClick={reOrder}>
                    {`до ${dateTo}`}
                </div>
                <div className={st.title_end}>
                    {`${amount}${currency ? `, ${currency}` : ''}`}
                </div>
                <img src={arrow} alt="arrow down" className={show ? st.rotate : st.arrow} onClick={setShow}/>
            </div>
            <div className={st.subTitleWrapper}>
                <div className={st.subTitle}>
                    {`***${cardNumber}`}
                </div>
            </div>
        </div>
    );
};