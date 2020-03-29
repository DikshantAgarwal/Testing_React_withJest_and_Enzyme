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
        beforeEach(() => {
            const props = {
                buttonText: "Example Button Test",
                emitEvent: () => { }
            }
            wrapper = shallow(<SharedButton {...props} />)
        })
        it("SharedButton should Render ", () => {
            const button = findByAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })

    })
}) 