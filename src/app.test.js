import { findByAttr, testStore } from "./Utilities/index";
import { shallow } from "enzyme";
import React from "react";
import App from "./App";

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store}/>).childAt(0).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe("should render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      Posts: [
        {
          title: "Example Test 1",
          body: "Somw Text"
        },
        {
          title: "Example Test 2",
          body: "Somw Text"
        },
        {
          title: "Example Test 3",
          body: "Somw Text"
        }
      ]
    };
    wrapper = setUp(initialState);
    // console.log(wrapper)
  });

  it("should render without error", () => {
    const component = findByAttr(wrapper, "appComponent");
    // console.log(component)
    expect(component.length).toBe(1);
  });
});
