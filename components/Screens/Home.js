import React, { Component } from 'react';
import {View,Text,Button,TextInput,ScrollView, SafeAreaView,TouchableOpacity, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {displayAll} from '../Redux/actions/action';
import Container from './Container';
import firebase from 'firebase';

export class Home extends Component {
    pressHandler(){
        this.props.deleteTodo;
        this.props.navigation.navigate('AddLineup');
    }
    state ={
        todos: null
    }
    componentDidMount(){
        this.props.displayTodo();
    }
  render(){
    
    console.log(this.props.todos)
    return(
        <ImageBackground style={{flex:1,backgroundColor:'red',height:'100%'}} source={require('../../Images/BACK.jpg')}>
        <SafeAreaView style={{paddingHorizontal:20}}>
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontSize:32,fontWeight:'bold',color:'white'}}>My Todo's</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{marginTop:10,height:'100%'}}>
        
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={()=>this.pressHandler()} >
            <View style={{backgroundColor:'white',padding:10,marginRight:20,borderRadius:200}}>
            <Text style={{fontWeight:'bold',fontSize:28,color:'#f9aa3c'}}> + </Text>
            </View>
            </TouchableOpacity>
        </View>
        
        
         <View style={{height:'100%',flex:1}}>
             {
                 this.props.todos &&
                 this.props.todos.map((todo)=>{
                     return(
                     <Container
                     Header={todo.Header}
                     Discription={todo.Discription}/>
                     )
                 })
             }
         </View>
         </View>
        </ScrollView>
        
        
        
        
        </SafeAreaView>
        </ImageBackground>
      );

  }
}
const mapStateToProps=(state)=>{
    return{
        todos:state.displayReducer.todos
    }

}

const mapDispatchProps=(dispatch)=>{
    return{
        
        displayTodo:()=>{dispatch(displayAll())}

    }
}

export default connect(mapStateToProps,mapDispatchProps)(Home);