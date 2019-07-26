import {useState} from 'react';

export default (initState=[], fields=[])=>{
    const [value, setValue] = useState('');
    const [results, setResults] = useState(initState);


    
    const filter=(theValue)=>{
        const tempVal = theValue.toLowerCase();
        const temp = initState.filter(x=>
            x.name.toLowerCase().includes(tempVal) ||
            x.retailer.toLowerCase().includes(tempVal)
        );

        setResults(theValue.length===0?initState:temp);
    }

    const setCriteria=(event)=>{
        const val = event.target.value;
        const name = event.target.name;
        setValue(val);
        filter(val);
    }

    return {
        value,
        results,
        setCriteria
    }

}


//user types into the search bar
//the value is captured by useSearchCriteria
//the results are returned