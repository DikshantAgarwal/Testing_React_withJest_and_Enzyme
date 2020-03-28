import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByAttr,checkProps } from './../../Utilities';


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {

    describe("Checking Props", () => {

        it("should render without warning", () => {
            const expectedProp = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fname: 'Test Name',
                    lname: 'Test lname',
                    email: 'Joe11@gmail.com',
                    age: 1,
                    onlineStatus: false
                }]
            }
            const propErr = checkProps(Headline, expectedProp)
            expect(propErr).toBeUndefined();
        })
    })
    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc'
            }
            wrapper = setUp(props);
        })

        it('should render without errors', () => {
            const component = findByAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(1);
        })
        it('should render H1', () => {
            const h1 = findByAttr(wrapper, 'header')
            expect(h1.length).toBe(1);
        })
        it('should render without errors', () => {
            const desc = findByAttr(wrapper, 'desc')
            expect(desc.length).toBe(1);
        })
    })
    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        console.log(wrapper)
        it('should not render component', () => {
            const component = findByAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(0);
        })
    })
});

