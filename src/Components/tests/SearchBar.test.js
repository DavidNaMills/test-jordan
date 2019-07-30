import React from 'react';
import {shallow} from 'enzyme';
import {SearchBar} from '../SearchBar';

const tempValue = 'test';
const mockOnChange = jest.fn();

describe('SearchBar test suite', ()=>{
    const wrapper = shallow(<SearchBar setCriteria={mockOnChange}/>)
    const elem = wrapper.find('#test-search');
    
    describe('Creation and setup test suite', ()=>{
        test('should create a basic searchbar', ()=>{
            expect(elem.props().type).toBe('text');
            expect(elem.props().name).toBe('search');
            expect(elem.props().value.length).toBe(0);
        });
        
        test('should set the value to be be displayed correctly', ()=>{
            const wrapper = shallow(<SearchBar setCriteria={mockOnChange} value={tempValue}/>)
            const elem = wrapper.find('#test-search');
            
            expect(elem.props().value).toEqual(tempValue);
        });

        test('should set the correct inline style', ()=>{
            expect(elem.props().style.borderRadius).toBe('5px');
            expect(elem.props().style.fontSize).toBe('25px');
            expect(elem.props().style.border).toBe('solid black 1px');
        });
    });
    
    describe('Interaction test suite', ()=>{
        test('should fire onChange event correctly', ()=>{
            const value = 'super test';
            const event = {
                target: {
                    value
                }
            }
            elem.simulate('change', value);
            expect(mockOnChange.mock.calls.length).toBe(1);
            expect(mockOnChange).toHaveBeenCalledWith(value);
        });
    });

});