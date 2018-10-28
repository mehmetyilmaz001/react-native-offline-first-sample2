import React, {Component} from 'react';
//import firebase from 'firebase';
import Router from './src/Router';
//import Main from './src/Main';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers'; 



export default class App extends Component {

  componentWillMount(){
   /* var config = {
      apiKey: "AIzaSyDNvTNsiokVhn2oGaUadeBLvSD3Ec7kAkk",
      authDomain: "ofline-first-sample.firebaseapp.com",
      databaseURL: "https://ofline-first-sample.firebaseio.com",
      projectId: "ofline-first-sample",
      storageBucket: "ofline-first-sample.appspot.com",
      messagingSenderId: "1053116317677"
    };
    firebase.initializeApp(config);*/
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
     </Provider>
    );
  }
}
