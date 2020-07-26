import React, { useState } from 'react';
import { AlwaysVisible } from './AlwaysVisible/AlwaysVisible';
import { Hide } from './Hide/Hide';
import st from'./Expandend.module.css'


export const Expanded = ({ title, cardNumber, dateTo, amount, currency, texts, reOrder }) => {
    const [show, setShow] = useState(false);

    return ( 
        <div className={st.wrapper}>
            <div>
                <AlwaysVisible
                    cardNumber={cardNumber}
                    show={show}
                    currency={currency}
                    title={title}
                    dateTo={dateTo}
                    amount={amount}
                    setShow={() => setShow(!show)}
                    reOrder={() => reOrder()}
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