import React, { PureComponent } from 'react';

import { View,StyleSheet,FlatList, Form, TouchableOpacity,Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';
import ListGrade from '../MenuJogo';
import {createRows} from "../GameLoop"
import api from '../../service/api';
import { getId} from '../../utils';


class StartNivelII extends React.Component{
       

    
  constructor(props){
    super(props);
    this.state = {
      data:[]
    
    
    }

  }
  componentDidMount() {
    this.getAtividades() }

      static navigationOptions = {
        header : null   
     };

     async getAtividades(){
                
      var id=  await getId()
      let nivel ='2'
      const response = await api.get('/atividades',{params:{id:id,nivel:nivel}} );
  
      this.setState({ 
        data: response.data,
      
      });
     
    }
    
     
    render() {
        const columns = 3;
    
        return (
           

<View   style={{flex:1}} >
 <ImageBackground source={require('../../assets/fundo/letra.jpg')}  resizeMode={'stretch'} 
         style={{flex:1}}>
         
         <FlatList
                data= {createRows(this.state.data, columns)}
                keyExtractor={item=>item.id}
                numColumns={columns}
                 renderItem={({item}) => (
                    <ListGrade data={item} fase={"NivelII"} navigation= {this.props.navigation} />

                 )
                
                } 
                        
                          />


         </ImageBackground>

        </View>
         



    );
                    





        }}


 
export default  StartNivelII;