import React from 'react';
import {shallow} from 'enzyme';
import Table from '../Table/Table';


const testData=[
    {name: 'david', item1:'blue', item2:'apple', item3:999},
    {name: 'alan', item1:'red', item2:'banana', item3:222},
    {name: 'bob', item1:'yellow', item2:'orange', item3:666},
    {name: 'sam', item1:'purple', item2:'grapes', item3:444},
];

const testDisplay = [
    {field: 'name', label: 'My Name'},
    {field: 'item2', label: 'Fruit'},
    {field: 'item3', label: 'Cost'}
];

const mockSelect = jest.fn();


describe('Table test suite', ()=>{
    const wrapper= shallow(<Table data={testData} displayArray={testDisplay} select={mockSelect}/>);
    const tbl = wrapper.find('#test-table');
    
    describe('Creation test suite', ()=>{
        // exists in dom
        test('should render the component in the DOM', ()=>{
            expect(tbl.length).toBe(1);
        });

        test('should display 3 heading columns', ()=>{
            const head = wrapper.find('#test-h-tr');
            const heading = head.map(x=>x.text());

            expect(head.length).toBe(3);
            expect(heading[0]).toEqual(testDisplay[0].label);
            expect(heading[1]).toEqual(testDisplay[1].label);
            expect(heading[2]).toEqual(testDisplay[2].label);
        });

        test('should create 4 rows of data', ()=>{
            const row = wrapper.find('#test-row');
            const firstRow = row.first().find('td').map(x=>x.text());
            expect(row.length).toBe(4);
            expect(firstRow.length).toBe(3);
            expect(firstRow[0]).toEqual(testData[0].name);
            expect(firstRow[1]).toEqual(testData[0].item2);
            expect(+firstRow[2]).toEqual(testData[0].item3);
        });

        test('should not display any rows as no data is provided', ()=>{
            const wrapper2= shallow(<Table select={mockSelect}/>);
            const tbl2 = wrapper2.find('#test-table');
            const heads = wrapper2.find('#test-h-tr');

            expect(tbl2.length).toBe(1);
            expect(heads.length).toBe(0);
        });

    });

    describe('Test row onClick interaction', ()=>{
        test('should simulate the onClick function', ()=>{
            const row = wrapper.find('#test-row').first();
            row.simulate('click', mockSelect);
            expect(mockSelect).toHaveBeenCalled();
        });
    });
});