import { combineReducers } from 'redux'
import TodoReducer from './ToDoReducer'

export default combineReducers({
    todo: TodoReducer
});