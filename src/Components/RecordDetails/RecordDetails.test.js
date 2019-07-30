import React from 'react';
import {shallow} from 'enzyme';
import {RecordDetails} from '../RecordDetails/RecordDetails';
import {IndividualDetail} from './AllDetails';
import { ColumnChart} from 'react-chartkick';
import {testRecord, detailedDisplay} from '../tests/testRecord';



describe('RecordDetails test suite', ()=>{
    const wrapper = shallow(<RecordDetails record={testRecord} />)

    describe('Creation test suite', ()=>{
        test('should exist within the DOM and 9 instances of <IndividualDetail/> component present', ()=>{
            const indDet = wrapper.find(IndividualDetail);
            expect(indDet.length).toBe(detailedDisplay.length);
        });

        test('should display the correct Compliance Rating', ()=>{
            const comp = wrapper.find('#test-compliance');
            expect(comp.text()).toEqual('Compliance Rating: 592 / 600');
        });

        test('should render the chart', ()=>{
            const chart = wrapper.find(ColumnChart);
            expect(chart.length).toBe(1);
        });
    });

    describe('Style tests', ()=>{
        test('should set the proper styles on the header', ()=>{ 
            const style=wrapper.find('#rd-1');
            expect(style.props().style.display).toEqual('flex');
            expect(style.props().style.justifyContent).toEqual('center');
        });
        
        test('should set the proper styles on the chart container', ()=>{
            const style=wrapper.find('#rd-2');
            expect(style.props().style.width).toEqual('75%');
            expect(style.props().style.marginTop).toEqual('20px');
            
        });
    });
});