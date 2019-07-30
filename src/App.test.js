import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';
import useSearch from './customHooks/useSearch';
import {SearchBar} from './Components/SearchBar';

import {json} from './JSON/data';

import Table from './Components/Table/Table';
import {Modal} from './Components/Modal';

describe('Main App container test suite', ()=>{
    
    describe('Component creation', ()=>{
        const wrapper =  shallow(<App />);
        const app = wrapper.find('.App');
        
        test('should render the main container', ()=>{
            expect(app.length).toBe(1);
        });
        
        test('should render the Modal in the DOM', ()=>{
            expect(wrapper.find(Modal).length).toBe(1);
        });
        
        test('should show the SearchBar in the DOM', ()=>{
            expect(wrapper.find(SearchBar).length).toBe(1);
        });
        
        test('should show the Table in the DOM', ()=>{
            expect(wrapper.find(Table).length).toBe(1);
        });
        
        test('should contain the results information div', ()=>{
            expect(wrapper.find('#test-searchInfo').length).toBe(1);            
        });
    });
    
});