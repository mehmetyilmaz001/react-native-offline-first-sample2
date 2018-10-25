import { TodoModel } from '../../models' 
import { TEST_ACTION, TODOS_FETCH_SUCCESS, TODO_CREATE, TODO_STATE_UPDATE, TODO_SAVE_SUCCESS } from '../actions/types'

const INITIAL_STATE = {...TodoModel} ;

export default (state = INITIAL_STATE, action) => {

    //return {...state, title:action.payload};
    switch (action.type){

        case TEST_ACTION:
            return {...state, title:action.payload};

        case TODO_STATE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value}

        case TODO_CREATE:
            return INITIAL_STATE;

        case TODO_SAVE_SUCCESS:
            return INITIAL_STATE;   
        
        default:
            return state;

    }


    return state;
}