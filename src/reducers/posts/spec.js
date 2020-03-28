import {types} from './../../actions/type';
import postReducers from './reducer';
describe("Post Reducers",()=>{

    it('should return default state',()=>{
        const newSate= postReducers(undefined,{});
        expect(newSate).toEqual([])
    })

    it('should return new state if recieving type',()=>{
        const post=[{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}]
        const newSate= postReducers(undefined,{
            type:types.GET_POSTS,
            payload:post
        });
        expect(newSate).toBe(post)
    })

})