import React from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import Navigator from './components/Screens/stack';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/Redux/rootReducer';
const store = createStore(rootReducer,applyMiddleware(thunk));

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC2w1EvzTj06eOCH1glpGVI-cF48bS9_MQ",
  authDomain: "lineups-65c33.firebaseapp.com",
  projectId: "lineups-65c33",
  storageBucket: "lineups-65c33.appspot.com",
  messagingSenderId: "776245179896",
  appId: "1:776245179896:web:f70d86a13cbf99464f920d",
  measurementId: "G-5ELSF8GJ8W"
};
if(firebase.apps.length ===0){
  firebase.initializeApp(firebaseConfig)
}
firebase.firestore().settings({ experimentalForceLongPolling: true });


const App =()=>{
  return(
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}
export default App;