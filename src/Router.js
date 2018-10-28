import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './Main'
import TodoCreate from './components/TodoCreate'




const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
            
                <Scene key="main" >
                    <Scene 
                        rightTitle="Add"
                        onRight={() => { Actions.todoCreate()}}
                        key="main" 
                        component={Main} 
                        title="Todo List" 
                        inital
                        />
                    <Scene key="todoCreate" component={TodoCreate} title="Todo Create" /> 
                </Scene>
            </Scene>
        </Router>
    );
}


export default RouterComponent;