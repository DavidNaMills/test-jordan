import {renderHook, act} from '@testing-library/react-hooks';
import useSearch from './useSearch';



const testState=[
    {name:'cola', retailer: 'asda'},
    {name:'dish washing tablets', retailer: 'lidl'},
    {name:'coffee', retailer: 'Lidl'},
    {name:'highlighters', retailer: 'Sainsburys'},
    {name:'fanta', retailer: 'asda'},
    {name:'cherry cola', retailer: 'Lidl'}
];

describe('useSearch hook test suite', ()=>{
    const {result} = renderHook(()=>useSearch(testState));
    
    test('should set the initial state', ()=>{
        expect(result.current.results.length).toBe(6);
        expect(result.current.results).toEqual(testState);
        expect(result.current.value).toEqual('');
    });

    const testValue='cola';
    const event = {target:{value: testValue}};
       
    test('should append to the current value', ()=>{
        act(()=>{result.current.setCriteria(event);});
        expect(result.current.value).toEqual(testValue);
    });


    test('should filter the initial state according to the criteria', ()=>{
        act(()=>{result.current.setCriteria(event);});
        expect(result.current.value).toEqual(testValue);
        
        expect(result.current.results.length).toBe(2);
    });

    test('should return an emty array if no matches are found', ()=>{
        const event = {target:{value: 'dsfdsdsdsdsdsds'}};
        act(()=>{result.current.setCriteria(event);});
        expect(result.current.value).toEqual('dsfdsdsdsdsdsds');
        
        expect(result.current.results.length).toBe(0);
        expect(result.current.results).toEqual([]);
    });
});