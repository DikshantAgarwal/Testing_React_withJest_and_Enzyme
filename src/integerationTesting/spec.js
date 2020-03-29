import moxios from "moxios";
import { testStore } from "./../Utilities/index";
import { fetchPosts } from "./../actions/index";

describe("fetch Posts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is uppdate correctly", () => {
    const expectedState = [
      {
        title: "Example Title 1",
        body: "some Text"
      },
      {
        title: "Example Title 2",
        body: "some Text"
      },
      {
        title: "Example Title 3",
        body: "some Text"
      }];
       const store = testStore();
       moxios.wait(()=>{
           const request= moxios.requests.mostRecent();
           request.respondWith({
               status:200,
               response:expectedState
           })
       })
       return store.dispatch(fetchPosts())
       .then(()=>{
           const newState=store.getState();
           expect(newState.Posts).toBe(expectedState)
       })
  });
});
