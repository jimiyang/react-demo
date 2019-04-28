//action
import {EDIT_TODO, ADD_TODO} from  '../actionType.js';
const increment = ()=> {
    return {
        type: EDIT_TODO,
    }
};
const decrement = ()=> {
    return {type: 'DECREMENT_COUNTER'}
};
const add = (arr) => {
    return {
        type: ADD_TODO,
        arr
    }
}
export default {
    increment,
    decrement,
    add
}
