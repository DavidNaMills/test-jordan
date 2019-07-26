import React from 'react';
import { ColumnChart} from 'react-chartkick'
import 'chart.js'
import {IndividualDetail} from './AllDetails';

const detailedDisplay=[
    {label: 'Name', value:'name'},
    {label: 'Net Quantity', value:'netQuantity'},
    {label: 'Description', value:'description'},
    {label: 'Ingredients', value:'ingredients'},
    {label: 'Nutrition', value:'nutrition'},
    {label: 'Storage', value:'storage'},
    {label: 'Manufacturer', value:'manufacturer'},
    {label: 'Price', value:'price'},
    {label: 'Price Per Unit', value:'pricePerUnit'},
];

const chartDisplay=['description', 'imageURL', 'ingredients', 'name', 'nutrition', 'price'];

const style={
    header:{
        display:'flex',
        justifyContent: 'center'        
    },
    chart:{
        marginTop:'20px',
        width:'75%',
        display: 'flex',
        margin: 'auto'
    }
}

export const RecordDetails=({record})=>{
    
    const calculateRating=()=>{
        const temp = chartDisplay.reduce((ttl, x)=>(+ttl)+(+record.compliance.fields[x]), 0);
        return temp;
    }

    const generateChartData=()=>{
        const data = chartDisplay.map(x=>{ return [x, record.compliance.fields[x]]});
        return data;
    }

    return (
        <div>
            <div>{detailedDisplay.map(x=><IndividualDetail key={x.label} label={x.label} value={record[x.value]}/>)}</div>
            <div style={style.header}> <div><h3>Compliance Rating: {`${calculateRating()} / 600`}</h3></div></div>
            <div style={style.chart}><ColumnChart data={generateChartData()} stacked={true}/></div>
        </div>
    )
}
{/* <div><AllDetails record={record}/></div> */}