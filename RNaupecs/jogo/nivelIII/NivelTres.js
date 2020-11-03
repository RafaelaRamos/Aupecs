import React, { PureComponent } from 'react';
import{ViewJogo,Container} from "./Styles"
import { View,StyleSheet,FlatList ,Text,Form, TouchableOpacity,Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';

import {createRows} from "../GameLoop"
import {getArray,getPalavra} from "./GameLoop"
import api from '../../service/api';
import {getId} from '../../utils';
import {getPecs} from '../nivelII/Data'






class NivelTres extends PureComponent{

 
  constructor(props) {
  
    super(props);
    this.state = {
      gabarito:[],
      letras:[],
      palavra:"",
      palavras:[],
      teste:'',
     img:"",
      data:[],
     index:0,
     erros:0,
     acertos:0,
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

  handleSubmit =async()=>{
    var id=  await getId()

     
  
      try{

        const relatorio = {
      
         idAluno:id,
         letra:this.props.navigation.state.params.letra,
         nivel:'3',
          erro:this.state.erros,
        status:'CONCLUIDA'
      }
      
        console.log(relatorio)
        const response = await api.post('/relatorio',relatorio)
      
      console.log('Certo')
 
      this.props.navigation.navigate('Fim')
    
    }catch{

    console.log('Erro')
    
    
    }
    
     }
    
    


   componentDidMount(){
   let palavra= this.state.data[this.state.index].letras
   let index= this.state.index+1
    this.setState({
      letras:getArray(palavra),
      gabarito:palavra.split(""),
      palavras:getPalavra(palavra),
      index:index,
      img:this.state.data[this.state.index].img
  
  });
  
   }

   Itens=({item,index})=> {
    if (item.empty) {
        return <View style={[styles.item, styles.itemEmpty]} />;
      }
      return (
        <TouchableOpacity disabled={item.disable}
        
        style={[styles.item,(item.disable && item.ativo)?styles.itemCerto:styles.item]  } 
        
        
        onPress={() => this.verificar(item.letra,index)}  >
            
          <Text style={styles.text}>{item.letra}</Text>
          </TouchableOpacity>
     
      );
    
  
  
  
  
  }
  
 


  returnPainel=()=>{

    return this.state.palavras.map((item) => {
      return(

        
    <View  style={[styles.textoView,item.cor?styles.textoViewCerto:styles.textoView]}>


<Text  style={[styles.texto,item.cor?styles.textoVisivel:styles.textoTrasparente]}>{item.letra}</Text>


</View>

      )})} 


gameLoop=(index)=>{




 
if(index <=this.state.data.length) {


  let palavra= this.state.data[this.state.index].letras
  setTimeout(() => { 
  this.setState({
    letras:getArray(palavra),
    gabarito:palavra.split(""),
    palavras:getPalavra(palavra),
    index:index,
    acertos:0,
    img:this.state.data[this.state.index].img

});   }, 1000);
  

 }else{


 this.handleSubmit()
 }





}
  



  verificar=(letra,index)=>{
 
  var indexCerto = this.state.gabarito.indexOf(letra);
  
 
  let palavras=[ ...this.state.palavras]
  let gabarito=[...this.state.gabarito]
  let acertos= this.state.acertos
  let erros=this.state.erros

 if(indexCerto>=0){
 
    gabarito.splice(indexCerto,1,0)

    this.state.palavras[indexCerto].cor=true
    this.state.letras[index].disable=true
    this.state.letras[index].ativo=true
    acertos++
    this.setState({palavras, gabarito});
    

}
else {

  this.state.letras[index].disable=true
  erros++
  this.setState({erros:erros});



}if(acertos===gabarito.length){
 let prox=this.state.index+1
 
this.gameLoop(prox)
  }
  else{

    this.setState({acertos:acertos});
   

  }


}

   render() {
    const columns = 3;
      
      return (
  
<Container style={{flex:1}} >

<ImageBackground source={require("../../assets/fundo/letra.jpg")}  resizeMode={'cover'} 
         style={{flex:1}}>
              
                 < ViewJogo >
                   
                   <View  style={styles.background}  > 

                   <View style={styles.teste}>

                     <ImageBackground
                     source={this.state.img}
                     style={{
                     resizeMode:'cover',
                     height:300,
                     width:300,
                     justifyContent: "center"
                 }}/> 
                    </View>
                    <View style={styles.painel}>

                  {this.returnPainel()}


                  </View>
                    <View   style={styles.teclado}>
                    <FlatList
                      data= {createRows(this.state.letras, columns)}
                      keyExtractor={item=>item.id}
                      numColumns={columns}
                      renderItem={this.Itens} 
                          />

</View>
                   
 
                   </View>
             
                   </ ViewJogo>
 
           
           
             
       
         
      
     


           
  
                  
              
       </ImageBackground>
                             </Container>

  
  
      );
                          }}
  
  
                          
                      
  
  
  
  
  
  
  
  const styles = StyleSheet.create({
painel:{
    flexDirection:'row',
    borderRadius:5,
 
    alignItems: "center",
    padding:10,
    
    marginTop:2,
    
justifyContent: 'center',
   
  },

  teste:{

    alignItems:  'center',
    justifyContent: 'center'


  },
  background:{
    flex:1,
    marginTop:5},


teclado:{
marginTop:30,
padding:30,
justifyContent: 'center'
},

item: {
  alignItems: "center",
  backgroundColor: "red",
  flexBasis: 0,
  flexGrow: 1,
  margin: 2,
  padding: 10,
  borderRadius:10,
},
itemCerto: {
  alignItems: "center",
  backgroundColor: "#32CD32",
  flexBasis: 0,
  flexGrow: 1,
  margin: 2,
  padding: 10,
  borderRadius:10,
},
itemErrado: {
  alignItems: "center",
  backgroundColor: "blue",
  flexBasis: 0,
  flexGrow: 1,
  margin: 2,
  padding: 10,
  borderRadius:10,
},
itemEmpty: {
  backgroundColor: "transparent"
},
text: {
  color: "#f3f3f3",
  fontWeight:'bold',
  fontSize:35
},
textoVisivel:{
  color: "#f3f3f3",

},
textoTrasparente: {
  color:'#1E90FF'

 
},
texto:{
 
  fontWeight:'bold',
  fontSize:30
},
textoView:{
  
  flexBasis: 0,
  flexGrow: 1,
  margin: 2,
  padding: 10,
  borderRadius:10,
  height:60, 
  width:40,
  alignItems: "center",
  backgroundColor: "#1E90FF",
  borderColor:"#B0E0E6",
  borderWidth:5,
  marginTop:2,
  
justifyContent: 'center',
 
},
textoViewCerto:{
  
  flexBasis: 0,
  flexGrow: 1,
  margin: 2,
  padding: 10,
  borderRadius:10,
  height:60, 
  width:40,
  alignItems: "center",
  backgroundColor: "#1E90FF",
  borderColor:"#00FF00",
  borderWidth:5,
  marginTop:2,
  
justifyContent: 'center',
 
}


    
    });
  
  
  export default  NivelTres;
