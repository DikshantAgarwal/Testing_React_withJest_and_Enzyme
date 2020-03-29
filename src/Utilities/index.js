
import checkPropTypes from 'check-prop-types';
import {applyMiddleware,createStore} from 'redux';
import rootReducer from './../reducers';
import {middlewares} from './../createStore';

export const findByAttr=(component,attr)=>{
    return component.find(`[data-test='${attr}']`);
}
export const checkProps=(component,expectedProp)=>{
    // console.log(component.ropTypes)
    const propErr=checkPropTypes(component.propTypes,expectedProp,'props',component.name)
    return propErr;
}
export const testStore=(initialState)=>{
    const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState)
}
