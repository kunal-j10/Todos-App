import React, { Component } from 'react';
import {View,Text,Button,TextInput,ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {connect} from 'react-redux';
import {createTodo} from '../Redux/actions/action';

export class AddLineup extends Component{
    constructor(props){
        super(props);
        this.state={
            header:'',
            discription:''
        }

    }
    pressHandler(){
        const {header,discription} = this.state;
        this.props.addTodo(this.state);
        this.props.navigation.navigate('Home');
        
    }
    render(){
        console.log(this.props);
        const { todos }=this.props;
        return(
            <ImageBackground style={{flex:1,backgroundColor:'red',height:'100%'}} source={require('../../Images/BACK.jpg')}>
            <SafeAreaView style={{paddingHorizontal:20,flex:1}}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20,flex:0.5}}>
                <Text style={{fontSize:32,fontWeight:'bold',color:'white'}}>Add Todo</Text>
            </View>
            <View style={{justifyContent:'center',flex:4}}>
        
             <TextInput style={{marginBottom:10,borderRadius:10,fontSize:18,backgroundColor: 'rgba(52, 52, 52, 0.6)',textAlign:'center',fontWeight:"bold", color:'white'}} 
                        placeholder="Enter Heading"
                        placeholderTextColor = "white"
                        onChangeText={(header)=>this.setState({header})}/>

            <View style={{borderRadius:10,padding:5,height:200,backgroundColor: 'rgba(150,150, 52, 0.6)'}}>
                <TextInput  placeholder="Enter Discription"
                            style={{fontWeight:"bold", color:'white',fontSize:18}}
                            placeholderTextColor = "white"
                            onChangeText={(discription)=>this.setState({discription})}
                            autoCapitalize='sentences'
                            multiline={true}
                            />
            </View>

            <View style={{marginTop:20}}>
            <TouchableOpacity onPress={()=>this.pressHandler()}>
            <View style={{backgroundColor:'orange',borderRadius:10,padding:10,marginHorizontal:60,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>ADD</Text>
            </View>
            </TouchableOpacity>
            </View>     
            </View>
            </SafeAreaView>
            </ImageBackground>
          );
    }
  
}

const mapDispatchProps=(dispatch)=>{
    return{
        addTodo:(todo)=>dispatch(createTodo(todo))
    }


}
const mapStateToProps=(state)=>{
    return{
        todos:state.addReducer.todos
    }

}

export default connect(mapStateToProps,mapDispatchProps)(AddLineup);
