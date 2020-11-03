import React, { PureComponent,useEffect } from 'react';

import { View,StyleSheet,Text, Form, TouchableOpacity,Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';

import{ViewJogo,Container} from "./Styles"
import Sound from 'react-native-sound';
import animacao from "../assets/animacao/fim.json"
import Lottie from "lottie-react-native"



export default function Fim(props) {

  

 

      
    useEffect(() => {
        
        const timer = setTimeout(() => {
           props.navigation.navigate('MenuPrincipal')

        },3000);
        return () => clearTimeout(timer);
      }, []);
    
  
 return (


<View style={{flex:1,alignItems:'center', justifyContent:'center',backgroundColor:'#48D1CC'}}>
    
   

   


<Text style={{fontSize:30,fontWeight:'bold',  color: "#FFE4B5"}}>ATIVIDADE CONCLUÍDA</Text>

<Lottie

    
    autoSize resizeMode='contain' source={animacao} autoPlay loop
    
    />





</View>






 )
    
    }
  


  Fim.navigationOptions = () => {
    return {
      header: null,
    }
  }
  











