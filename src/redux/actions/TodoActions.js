import { TodoModel } from '../../models';
import { TODOS_FETCH_SUCCESS, TODO_CREATE, TODO_STATE_UPDATE, TODO_SAVE_SUCCESS, TEST_ACTION } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from '../../firebase';

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

export const todosFetch = () =>{
    return (dispatch) =>{
        
        const firebaseRef = firebase.database().ref('todos');

        firebaseRef.once('value', (snapshot) => {
            dispatch({
                type: TODOS_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
    }
}


export const todoCreate = ({title}) => {
    const firebaseRef = firebase.database().ref('todos');
    firebaseRef.keepSynced(true);
    
    return (dispatch) => {
        firebaseRef.push({ title })
        .then(() => {
        })

        // dispatch({
        //     type: TODO_CREATE,
        //     payload: { title }
        // });

        Actions.main();
        
    }
}