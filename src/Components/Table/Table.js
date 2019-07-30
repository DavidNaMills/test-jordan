import './table.scss';
import React from 'react';

const defaultFn=()=>{};

export default ({data=[], displayArray=[], select=defaultFn})=>{


    const createHeaders=()=>(
        <thead>
            <tr>
                {displayArray.map(x=><td id='test-h-tr' key={x.field}>{x.label}</td>)}
            </tr>
        </thead>
    )

    const buildRows=()=>(
        <tbody>
            {
                data.map((x, index)=>
                    <tr id='test-row' key={index} onClick={()=>select(x.imageURL)}>{
                        displayArray.map((c, v) => 
                            <td key={`${v}${c.field}`}>{x[c.field]}</td>
                        , 0)
                    }</tr>
                , 0)
            }
        </tbody>
    )

    return (
        <div id='test-table'>
            <table>
                {createHeaders()}
                {buildRows()}
            </table>
        </div> 
    )
}