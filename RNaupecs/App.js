/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomComponent from  './telas/CustomComponent';
import DrawerMenu from './telas/DrawerMenu';
import Discentes from './telas/Discentes';
import Perfil from './telas/Perfil';
import Cadastro from  './telas/Cadastro';
import Login from './telas/Login';
import Resultados from './telas/Resultados';
import Configura from './telas/Configura';
import Detalhes from './telas/Detalhes';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';





enableScreens();

     

const TabScreen = createMaterialTopTabNavigator(
  {
    Informações:Detalhes,
    Atividade:Configura,
    Relatorios:Resultados
    

    
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#3CB371',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);




      
              const SomeStackNavigator = createStackNavigator({
                ScreenA: Discentes,
                ScreenB: Perfil,
                Log:Login
                
                
              });
  
              const AppStack = createDrawerNavigator({
                
                SomeStackNavigator,
               
                },
                
                {
                  contentComponent: DrawerMenu 
                }
              );
              
              

       
  
const AppNavigator = createStackNavigator(

  {App: { screen: AppStack,
    navigationOptions: {
    header: null,
  }},
    
   
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
  
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#3CB371',
        },
        headerTintColor: '#FFFFFF',
        title: 'Discente',
      },
    },
    Inicial:{
      screen :CustomComponent,
      navigationOptions: {
        header: null,
      },
    
    } ,
  },      
  
  {
    initialRouteName: 'Log',
  
  },
  

);



    const AppContainer = createAppContainer (AppNavigator);

    export default class App extends React.Component {

     
       
      render (){
        return <AppContainer/>
      }


    } 
    
    
    