import React from 'react';
import { ColumnChart} from 'react-chartkick';
import 'chart.js'
import {IndividualDetail} from './AllDetails';
import {calculateRating, generateChartData} from './helperFunctions';


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

export const RecordDetails=({record})=>(
        <div>
            <div>{detailedDisplay.map(x=><IndividualDetail key={x.label} label={x.label} value={record[x.value]}/>)}</div>
            <div id='rd-1' style={style.header}> <div><h3 id='test-compliance'>Compliance Rating: {`${calculateRating(chartDisplay, record)} / 600`}</h3></div></div>
            <div id='rd-2' style={style.chart}><ColumnChart data={generateChartData(chartDisplay, record)} stacked={true}/></div>
        </div>
)