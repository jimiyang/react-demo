//action
import {EDIT_TODO} from  '../actionType.js';
const increment = ()=> {
    return {
        type: EDIT_TODO,
    }
};
const decrement = ()=> {
    return {type: 'DECREMENT_COUNTER'}
};
export default {
    increment,
    decrement
}
