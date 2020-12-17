
import React, { PureComponent } from 'react';

import { View,StyleSheet,Text, Form, TouchableOpacity,Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';

import{ViewJogo,Container} from "./Styles"
import {getArray,arrayEquals,getGabarito,randOrd} from "./GameLoop"
import {getPecs} from './Data'
import api from '../../service/api';
import { getId} from '../../utils';
import { DraggableGrid } from '@tailwindapp/rn-lockable-draggable-grid';
 




class NivelDois extends PureComponent{

  constructor(props) {
  
    super(props);
    this.state = {
      gabarito:[],
      letras:[],
      palavra:"",
     img:"",
      data:[],
     index:0,
     erros:0,
     colunas:4
    };
  }

  static navigationOptions = {
    header : null   
 };



 UNSAFE_componentWillMount() {
this.setState({
   data:getPecs(this.props.navigation.state.params.letra),
   
    
        })


       
 } 
 componentDidMount(){

  this.setState({
    letras:getArray(this.state.data[this.state.index].letras),
    gabarito:getGabarito(this.state.data[this.state.index].letras),
    palavra:this.state.data[this.state.index].letras,
    img:this.state.data[this.state.index].img
    

});
}


handleSubmit =async()=>{


  var id=  await getId()
 
try{

  const relatorio = {

   idAluno:id,
   letra:this.props.navigation.state.params.letra,
   nivel:'2',
  status:'CONCLUIDA'
}

  console.log(relatorio)
  const response = await api.post('/relatorio',relatorio)
  this.props.navigation.navigate('Fim')

}catch{
console.log('Erro')


}

 }


gameLoop=()=>{


var index =this.state.index+1;


if(index<=4){


  setTimeout(() => { 
    this.setState({
      letras:getArray(this.state.data[index].letras),
      gabarito:getGabarito(this.state.data[index].letras),
      palavra:this.state.data[index].letras,
      img:this.state.data[index].img,
      index:index,
     });
    
   }, 1000);
  
}

else{

  this.handleSubmit()
    
  console.log('Fim')
}

 }

 colunas=()=>{
 return this.state.data[this.state.index].letras.length;
 }
  

 render_item =(item,index)=> { 
  item= this.verificar(item,index)
  
  
  return (
   
    <View
    style={styles.item, (item.disabledDrag)?styles.itemCerto: styles.item}
    key={item.key}
  >
    <Text style={styles.item_text}>{item.letra}</Text>
  </View>
  );
}

VerificarGabarito=()=>{

  if(arrayEquals(this.state.letras,this.state.gabarito)==true){
    
    this.gameLoop()
    console.log(this.state.letras, this.state.gabarito)

}

}
verificar=(item,index)=>{

 
  if(item.letra==this.state.gabarito[index].letra){
    item.disabledDrag=true;
    item.disabledReSorted=true;

   this.VerificarGabarito()
  }


  return item
  
    }

    
     

    render() {
  

      
      return (

<Container style={{flex:1}} >

<ImageBackground source={require("../../assets/fundo/letra.jpg")}  resizeMode={'cover'} 
         style={{flex:1}}>
              
                 < ViewJogo >
                   
                   <View > 

                     <ImageBackground
                    source={this.state.img}
                     style={{
                     resizeMode:'cover',
                     height:300,
                     width:300,
                     justifyContent: "center"
                 }}
                     
                     >


                     </ImageBackground>
                   </View>
                   <Text style={styles.text}>
                     {this.state.palavra}
                   </Text>
                   
                   </ ViewJogo>
 
             <View style ={styles.row}>  
           
             
        <DraggableGrid
          numColumns={6}
          renderItem={this.render_item}
          data={this.state.letras}
          onDragRelease={(letras) => {


            this.setState({letras});
           
          }}

         
        />
     


           
</View>   
                  
              
       </ImageBackground>
                             </Container>



      )}
      
      


}
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    flex:1,
    paddingLeft:40,
    marginTop:80,
    flexBasis:2,
    flexGrow: 1,
    
    height:200,
 
  
    
  },
 
  item:{
    flexDirection:'row',
    borderRadius:5,
    width:60,

    height:60,
    alignItems: "center",
    backgroundColor: "#1E90FF",
    justifyContent:"center",
    borderColor:"#B0E0E6",
    borderWidth:5,
    marginTop:2
    
   
  },
  itemCerto:{
    flexDirection:'row',
    borderRadius:5,
    width:60,
    height:60,
    alignItems: "center",
    backgroundColor:"#32CD32",
    justifyContent:"center",
    borderColor:"#B0E0E6",
    borderWidth:5,
    marginTop:2
    
   
  },
  item_text:{
    fontWeight:"bold",
    fontSize:40,
    color:'#FFFFFF',
  },text:{
    fontWeight:"bold",
    fontSize:25,
    color:'#FFFFFF'
    
  },
  
  
  });


export default  NivelDois;