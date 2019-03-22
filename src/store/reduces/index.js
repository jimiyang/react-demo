import { combineReducers } from 'redux';
import {EDIT_TODO, ADD_TODO} from  '../actionType.js';
//type是这个指令的唯一标识
const initialState = {
    count: 0
}
// Reducer
function todos(state = initialState, action) {
    switch(action.type) {
        case EDIT_TODO:
          return {
            ...state,
            count: state.count + 1
          }
        case ADD_TODO:
          return state - 1
        default:
          return state;
    }
}
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  todos
});
export default rootReducer;