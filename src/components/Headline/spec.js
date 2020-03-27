import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByAttr } from './../../Utilities';


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {
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

