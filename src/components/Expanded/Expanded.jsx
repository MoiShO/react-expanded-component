import React, { useState } from 'react';
import { AlwaysVisible } from './AlwaysVisible/AlwaysVisible';
import { Hide } from './Hide/Hide';
import st from'./Expandend.module.css'


export const Expanded = ({ title, cardNumber, dateTo, amount, currency, texts }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={st.wrapper}>
            <div onClick={() => { setShow(!show) }}>
                <AlwaysVisible
                    titles={[`${title}${currency ? `, ${currency}` : ''}`, `до ${dateTo}`, `${amount}${currency ? `, ${currency}` : ''}`]}
                    howSubtitle={[1]}
                    subTitles={[cardNumber]}
                    show={show}
                />
            </div>
            {show && <hr className={st.devider}/>}
            <Hide
                show={show}
                texts={texts}
            />
        </div>
    );
};