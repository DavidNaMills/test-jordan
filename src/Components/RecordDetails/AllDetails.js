import React from 'react';



export const AllDetails = ({record})=>(
    <div>
        <p><b>Name</b><br/>{record.name}</p>
        <p><b>Net Quantity</b><br/>{record.netQuantity}</p>
        <p><b>Description</b><br/>{record.description}</p>
        <p><b>Ingredients</b><br/>{record.ingredients}</p>
        <p><b>Nutrition</b><br/>{record.nutrition}</p>
        <p><b>Storage</b><br/>{record.storage}</p>
        <p><b>Manufacturer</b><br/>{record.manufacturer}</p>
        <p><b>Price</b><br/>{record.price}</p>
        <p><b>Price Per Unit</b><br/>{record.pricePerUnit}</p>
    </div>
);

export const IndividualDetail=({label, value})=>(
    <div key={label}>
        <p><b>{label}</b></p>
        <p>{value}</p>
    </div>
)