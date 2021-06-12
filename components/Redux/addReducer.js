import React from 'react';
import {View,Text} from 'react-native';
import { State } from 'react-native-gesture-handler';

const initialState ={
    todos:{
        id:1,
        header:"DEMO",
        discription:"Loreal ipsum"}
    

}

export const addReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'create_todo':
            console.log('created todo',action.todo)
    }
    return state


}