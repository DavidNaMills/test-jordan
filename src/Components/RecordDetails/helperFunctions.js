export const calculateRating=(chartDisplay, record)=>{
    const data= chartDisplay.reduce((ttl, x)=>(+ttl)+(+record.compliance.fields[x]), 0);
    return data;
}

export const generateChartData=(chartDisplay, record)=>{
    const data = chartDisplay.map(x=>{ return [x, record.compliance.fields[x]]});
    return data;
}