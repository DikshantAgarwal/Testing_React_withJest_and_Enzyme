import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-reatc-16';


Enzyme.configure({
    adapter:new EnzymeAdapter(),
    disableLifecycleMethods:true
})