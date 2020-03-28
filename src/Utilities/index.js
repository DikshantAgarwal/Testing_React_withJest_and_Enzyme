
import checkPropTypes from 'check-prop-types';
export const findByAttr=(component,attr)=>{
    return component.find(`[data-test='${attr}']`);
}
export const checkProps=(component,expectedProp)=>{
    // console.log(component.ropTypes)
    const propErr=checkPropTypes(component.propTypes,expectedProp,'props',component.name)
    return propErr;
}
