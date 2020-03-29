import React from 'react'
import { findByAttr, checkProps } from './../../Utilities/index';
import ListItem from './index';
import { shallow } from 'enzyme';


describe("ListItem Component", () => {

    describe("checking PropTypes", () => {

        it("Should render without warning", () => {
            const expectedProps = {
                title: 'Test Title',
                desc: 'Test desc'
            }
            const propErr = checkProps(ListItem, expectedProps);
            expect(propErr).toBeUndefined();
        })
    })

    describe("Component Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'test desc'
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it("should render without error", () => {
            let component = findByAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1);
        })

        it("should  render title", () => {
            let h1 = findByAttr(wrapper, 'componentTitle')
            expect(h1.length).toBe(1);
        })
        it("desc render without error", () => {
            let desc = findByAttr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1);
        })
    })

    describe("Component not render",()=>{
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'test desc'
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        
        it("should not render",()=>{
            let comp=findByAttr(wrapper,'listItemComponent')
            expect(comp.length).toBe(0)
        })
     
    })
})