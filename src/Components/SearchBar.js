import React from 'react';

const style={
    input:{
        border: 'solid black 1px',
        borderRadius: '5px',
        fontSize: '25px'
    }
}

export const SearchBar=({value, setCriteria})=>{
    return (
        <div>
            <input type='text' id='test-search' name='search' value={value} onChange={(event)=>{setCriteria(event)}} style={style.input}/>
        </div>
    )
}