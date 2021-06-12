import React from 'react';
import {View,Text} from 'react-native';

const Container =({Header,Discription})=>{
    return(
        <View style={{marginTop:10}}>
        <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',height:50,alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderTopRightRadius:20}}>
        <Text style={{justifyContent:'center',fontSize:22,color:'white',alignContent:'center'}}>{Header}</Text>
        </View>
        <View style={{backgroundColor: 'rgba(300,200, 52, 0.8)',height:100,alignItems:'center',justifyContent:'center',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{justifyContent:'center',fontSize:18,color:'rgba(52, 52, 52, 0.9)',alignContent:'center',paddingHorizontal:15,textAlign:'center'}}>{Discription}</Text>
        </View>
        </View>
    );
}
export default Container;