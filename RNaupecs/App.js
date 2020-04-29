/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DatePicker from 'react-native-datepicker';
import styles from './Style';
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import DrawerMenu from "./DrawerMenu"


enableScreens();

 class  Login extends React.Component{
  
  render() {

    return (
      <View style={styles.container}>
        
        <View style={styles.viewsecund}>
      
          <Image source={require('./assets/tea.jpg')}
            style={{ width: 150, height: 150 }} />

          <TextInput placeholder="Digite seu email" keyboardType={'email-address'} style={styles.inputLogin} />
          <TextInput placeholder="Digite sua senha" secureTextEntry={true}  style={styles.inputLogin} />
          <Text style={styles.test}> Esqueci minha senha</Text>

          <TouchableOpacity style={styles.botao}   onPress={() => this.props.navigation.navigate('Home')}>

               <Text style={styles.botaoText}> Entrar</Text>

          </TouchableOpacity>
          
        </View>

       <View style={styles.viewterc}>

       <TouchableOpacity style={styles.bntConta} onPress={() => this.props.navigation.navigate('Cadast')} >

       <Text style={styles.text}> Criar uma conta? </Text>


    </TouchableOpacity>

      
        </View>

    </View>

);


}


}




class Cadastro extends React.Component{
  
  
  

  constructor(props){
    super(props)
    this.state = {date:"09-02-2020"}
  }
  render() {
    return(
     <View  style={styles.containerForm}>

      <View >
          <Text > Nome completo:</Text>        
           <TextInput style={styles.inputcadS} placeholder="nome ">    </TextInput>

           </View >


           
           <View style={styles.rowteste}> 

           <View style={styles.viewCpf}>


           <Text >  CPF:</Text> 
           </View>

             
          
           <View style={styles.data }>


           <Text> Nascimento :</Text> 
           </View>


           </View>
           
           

           
          
       <View style={styles.viewrow} >
          <TextInput style={styles.inputcad } placeholder="cpf" >    </TextInput>
        
         
       <DatePicker
        style={{width: 120}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="1930-01-01"
        maxDate="2020-02-28"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
        dateIcon: {
       position: 'absolute',
        left: 0,
        
        marginLeft: 0
          },
          dateInput: {
            marginLeft: 32,
            marginTop: 15,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}} />
      </View>
      
      
      <View>
         <Text >  Formação:</Text>     
           
          
          
           <TextInput  style={styles.inputcadS} placeholder="formação">    </TextInput>
           </View>

           <View>
              <Text >  Email:</Text>     
           
           <TextInput  style={styles.inputcadS} placeholder="email">    </TextInput>
           </View>


         < View style={styles.viewrow}>

          <View style={styles.testsenhaa} >
           <Text >  Senha:</Text>     
          </View>


          <View style={styles.testesen }>
           <Text>  Repetir senha:</Text>     
           </View>
           </ View>
           
           <View style={styles.viewrow}>

           <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="senha" >    </TextInput>
           <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="confirmar senha">    </TextInput>

         
           </View>



           <TouchableOpacity style={styles.botao}>

          <Text  style={styles.botaoText}> Enviar</Text>

        </TouchableOpacity>
  </View>
 
);
              }}
           


               
              const DrawerNavigation = createDrawerNavigator(
                {
                  Home: Home,
                  About: About,
                  Contact: Contact
                },
                {
                  initialRouteName: "Home",
                  drawerBackgroundColor: "lightblue",
                
                  contentOptions: {
                    activeTintColor: "red"
                  },
                  contentComponent: DrawerMenu
                }
              );
              


  
  
const AppNavigator = createStackNavigator(

  {   DrawerNavigation,
    Log:{
      screen:Login,
      navigationOptions: {
        header: null,
      },
      
    },
    Cadast:{
       
      screen: Cadastro,
      navigationOptions: {
        header: null,
      },
      
    },

  
    
    
    }

  ,
          
  
  {
    initialRouteName: 'Log',
    unmountInactiveRoutes: true
  },
  

);



    const AppContainer = createAppContainer (AppNavigator);

    export default class App extends React.Component {

     
       
      render (){
        
        return <AppContainer />
    
      }


    } 
    
    
    