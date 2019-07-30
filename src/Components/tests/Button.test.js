import React from 'react';
import {shallow} from 'enzyme';
import {Button} from '../Button';


const testText='This is a test label';

describe('Button Component', ()=>{
    describe('Test default button creation and functionality', ()=>{
        const mockClick = jest.fn();
        const wrapper= shallow(<Button label={testText} onClick={mockClick}/>);
        const btn = wrapper.find('#test-btn1');
        
        test('should render without errors', ()=>{
            expect(btn.length).toBe(1);
            expect(btn.props().style.backgroundColor).toBe('cyan')
            expect(btn.text()).toEqual(testText);
            expect(btn.props().style.width).toBe(undefined);
        });

        test('the onClick event should be fired when button is clicked', ()=>{
            btn.simulate('click');
            expect(mockClick.mock.calls.length).toEqual(1);
            expect(mockClick).toHaveBeenCalled();
        });
    });
    
    describe('Test different types of button', ()=>{
        test('should set the default style', ()=>{
            const wrapper= shallow(<Button label={testText}/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.backgroundColor).toBe('cyan');
            expect(btn.props().style.width).toBe(undefined);
        });
        
        test('should set the error style', ()=>{
            const wrapper= shallow(<Button label={testText} type='error'/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.backgroundColor).toBe('orangered');
            expect(btn.props().style.color).toBe('white');
            expect(btn.props().style.width).toBe(undefined);
        });
        
        test('should set the confirm style', ()=>{
            const wrapper= shallow(<Button label={testText} type='confirm'/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.backgroundColor).toBe('green');
            expect(btn.props().style.color).toBe('white');
            expect(btn.props().style.width).toBe(undefined);
        });
        
        test('should set the warning style', ()=>{
            const wrapper= shallow(<Button label={testText} type='warning'/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.backgroundColor).toBe('orange');
            expect(btn.props().style.color).toBe('white');
            expect(btn.props().style.width).toBe(undefined);
        });
        
        test('should set the modal style', ()=>{
            const wrapper= shallow(<Button label={testText} type='modal'/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.backgroundColor).toBe('purple');
            expect(btn.props().style.color).toBe('white');
            expect(btn.props().style.width).toBe(undefined);
        });
        
        test('should set the button size to full width', ()=>{
            const wrapper= shallow(<Button label={testText} type='modal' isFull={true}/>);
            const btn = wrapper.find('#test-btn1');
            expect(btn.props().style.width).toEqual('100%');
        });
    });
});