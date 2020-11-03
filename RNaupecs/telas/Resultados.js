import React from 'react';
import {Alert, View, Modal,TouchableOpacity, Text,FlatList, StyleSheet } from 'react-native';
import api from '../service/api';
import  ButtonExcluir from './ButtonExcluir'
import {
ItemList,
ViewLista,
TextListI,
TextListII


}  from './style'



  const  ListaItens = ({data,url}) => (


   < ViewLista>
    <ItemList>
            <TextListI>Nivel: {data.nivel} </TextListI>
            <TextListI>Letra: {data.letra}</TextListI>
            <TextListI >Erros: {data.erro}</TextListI>
            <TextListI >Data: {data.dataHora}</TextListI>
            <TextListII >{data.status} </TextListII>
    </ItemList>
<ButtonExcluir url={url} id={data.id}/>
</ViewLista>
 
 


  );
  class Resultados extends React.Component{  

    constructor(){
        super();
        this.state={
          menuData:[],
          url:'/relatorio',
          refresh:true
        }

    }


    componentDidMount() {
     
      this.getRelatorios()
     
    
     }



     onRefresh() {
      this.setState({ refresh: true }, function() { this.getRelatorios() });
   }

   
    async getRelatorios() {  
     
      try{

        idAluno =this.props.navigation.state.params.id
        const response = await api.get('/relatorio',{params:{id:idAluno}} );
  console.log(response.data)
        this.setState({ 
          menuData: response.data,
        
          refresh:false
        
        });
      
      Console.log(reponse.data)}
        catch{
          
        this.setState({ 
           refresh:false
        
        });}


        }
     render() {  
         return( 
             
            <View  style={{flex:1, backgroundColor: '#1E90FF'}}>
            <FlatList
                          data={this.state.menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                              data={item}
                             url={this.state.url}
                             key={item.dataHora}
                             
                              />
                              
                            )}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.refresh}
                          />
</View>
                    );
                }
              }
           


            


 export default Resultados;