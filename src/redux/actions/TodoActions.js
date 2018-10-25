import { TodoModel } from '../../models';
import { TODOS_FETCH_SUCCESS, TODO_CREATE, TODO_STATE_UPDATE, TODO_SAVE_SUCCESS, TEST_ACTION } from './types';

export const testAction = ({title}) => {
    return { 
        type: TEST_ACTION,
        payload: title
    }
}

export const todoStateUpdate = ({prop, value}) => {
    return {
        type: TODO_STATE_UPDATE,
        payload : { prop, value }
    }
}