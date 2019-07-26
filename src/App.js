import React, {useState} from 'react';
import useSearch from './customHooks/useSearch';
import {SearchBar} from './Components/SearchBar';

import {json} from './JSON/data';

import Table from './Components/Table/Table';
import {Modal} from './Components/Modal';
import {RecordDetails} from './Components/RecordDetails/RecordDetails';


const style={
  display: 'flex',
  justifyContent: 'space-between'
}

const toDisplay = [
  {field: 'name', label: 'Name'},
  {field: 'retailer', label: 'Retailer'},
  {field: 'price', label: 'Price'},
  {field: 'pricePerUnit', label: 'Price Per Unit'}
]

const defaultState={
  isOpen: false,
  selected: null
};


function App() {
  const [state, setState] = useState(defaultState);
  const {value, setCriteria, results} = useSearch(json.rows);

  const selectedItem=(val)=>{
    setState({
      isOpen: true,
      selected: results.filter(x=>x.imageURL===val)[0]
    })
  }

  const closeModal=()=>{
    setState(defaultState);
  }


  return (
      <div className="App">
        <div>
            <Modal 
              Component={()=><RecordDetails record={state.selected} /> }
              isOpen={state.isOpen}
              controlModal={closeModal}
              id={'displayDetails'}
            />
            <SearchBar value={value} setCriteria={setCriteria} />
            <div style={style}>
              <h3>{results.length>0?`${results.length} records found`:'No records match criteria'}</h3>
              <h3>Click on row for more details</h3>
            </div>
        </div>
        <Table displayArray={toDisplay} data={results} select={selectedItem}/>
      </div>
  );
}

export default App;
