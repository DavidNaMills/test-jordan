import React from 'react';
import {shallow} from 'enzyme';
import {Modal} from '../Modal';


const TempComponent = ()=>(
    <div id='test-tempcomponent'>
        <p>hello</p>
    </div>
)

describe('Modal component test suite', ()=>{
    const mockClick = jest.fn();
    const ComponentOpen = <Modal Component={TempComponent} isOpen={true} controlModal={mockClick} id='test'/>;
    const ComponentClose = <Modal Component={TempComponent} isOpen={false} controlModal={mockClick} id='test'/>;


    describe('Basic creation tests', ()=>{
        test('should exist within the DOM but not be displayed (closed)', ()=>{
            const wrapper = shallow(ComponentClose);
            const mod = wrapper.find('#test-main');
            const outer = wrapper.find('#test-outer');

            expect(mod.length).toBe(1);
            expect(outer.length).toBe(0);
        });        

        test('should exist within the DOM and be Open', ()=>{
            const wrapper = shallow(ComponentOpen);
            const mod = wrapper.find('#test-main');
            const outer = wrapper.find('#test-outer');

            expect(mod.length).toBe(1);
            expect(outer.length).toBe(1);
        });
        
        test('should render passed in child component correctly', ()=>{
            const wrapper = shallow(ComponentOpen);
            const outer = wrapper.find(TempComponent);
            expect(outer.length).toBe(1);
        });
    });

    describe('Test suite for Modal Styles', ()=>{
        const wrapper = shallow(ComponentOpen);
        const outer = wrapper.find('#test-outer');
        const modal = wrapper.find('#test-modal');
        const inner = wrapper.find('#test-inner');

        test('should set the outer div with correct styles', ()=>{
            expect(outer.props().style.position).toBe('absolute');
            expect(outer.props().style.top).toBe('0');
            expect(outer.props().style.width).toBe('100vw');
            expect(outer.props().style.backgroundColor).toBe('rgb(183, 190, 237, 0.5)');
        });
        
        test('should set the Modal div with correct styles', ()=>{
            expect(modal.props().style.backgroundColor).toBe('white');
            expect(modal.props().style.width).toBe('90vw');
        });
        
        test('should set the Inner div withe correct styles', ()=>{
            expect(inner.props().style.border).toBe('solid black 1px');
            expect(inner.props().style.width).toBe('98%');
            
        });
    });

});
