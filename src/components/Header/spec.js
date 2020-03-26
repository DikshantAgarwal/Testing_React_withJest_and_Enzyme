import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import {findByAttr}from './../../Utilities/index'


const setUp=()=>{
    const component=shallow(<Header/>);
    return component
}
describe('Header Component',()=>{
    let component;
    beforeEach(()=>
    {
        component=setUp()
    })
    it('should render without error',()=>{
        const wrapper = findByAttr(component,'headerComponent')
        expect(wrapper.length).toBe(1);
    })
    it('should render imgLogo without error',()=>{
        const wrapper = findByAttr(component,'logoImg')
        expect(wrapper.length).toBe(1);
    })
})
