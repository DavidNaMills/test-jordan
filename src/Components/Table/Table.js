import './table.scss';
import React from 'react';



export default ({data=[], displayArray=[], select})=>{


    const createHeaders=()=>(
        <thead>
            <tr>
                {displayArray.map(x=><td key={x.field}>{x.label}</td>)}
            </tr>
        </thead>
    )

    const buildRows=()=>(
        <tbody>
            {
                data.map((x, index)=>
                    <tr key={index} onClick={()=>select(x.imageURL)}>{
                        displayArray.map((c, v) => 
                            <td key={`${v}${c.field}`}>{x[c.field]}</td>
                        , 0)
                    }</tr>
                , 0)
            }
        </tbody>
    )

    return (
        <div>
            <table>
                {createHeaders()}
                {buildRows()}
            </table>
        </div> 
    )
}