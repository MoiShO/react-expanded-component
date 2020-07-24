import React from 'react';
import st from'./AlwaysVisible.module.css'


export const AlwaysVisible = ({titles, subTitles, howSubtitle}) => {

    const getTitles = () => {
        return titles.map((title, index) =>  (
                <div key={title} className={howSubtitle.includes(index) ? st.subTitle : st.title}>
                    {title}
                </div>
            )
        )
    }

    const getSubTitles = () => {
        return subTitles.map((subTitle) =>  (
                <div key={subTitle} className={st.subTitle}>
                    {subTitle}
                </div>
            )
        )
    }

    return (
        <div className={st.wrapper}>
            <div className={st.titleWrapper}>
                {getTitles()}
            </div>
            <div className={st.subTitleWrapper}>
                {getSubTitles()}
            </div>
        </div>
    );
};