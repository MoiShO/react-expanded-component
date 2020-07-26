import React from 'react';
// Style if need
// import st from './Search.module.css'

export const Search = ({ setSearch }) => {

    return <input onChange={setSearch} type="text" pattern="[0-9]*"/>
};