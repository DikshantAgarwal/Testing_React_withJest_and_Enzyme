import React from 'react';
import { findByAttr, checkProps } from './../../Utilities/index';
import SharedButton from './index';
import { shallow } from 'enzyme';


describe('SharedButton Component', () => {

    describe("Checking PropTypes", () => {
        it("Shared Button should render without warning", () => {
            const expectedProps = {
                buttonText: "Example Button Test",
                emitEvent: () => { }
            }
            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();

        })
    })
    describe("Render", () => {
        let wrapper
        let mockFunc;
        beforeEach(() => {
            mockFunc=jest.fn(); 
            const props = {
                buttonText: "Example Button Test",
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />)
        })
        it("SharedButton should Render ", () => {
            const button = findByAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
        it("should emit callback on click event",()=>{
            const button = findByAttr(wrapper, 'buttonComponent');
            button.simulate('click')
            const callback=mockFunc.mock.calls;
            expect(callback.length).toBe(1);

        })

    })
}) 