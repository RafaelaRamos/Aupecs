import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerMenu from './telas/DrawerMenu';
import Discentes from './telas/Discentes';
import Perfil from './telas/Perfil';
import Cadastro from  './telas/Cadastro';
import Login from './telas/Login';
import Resultados from './telas/Resultados';
import Configura from './telas/Configura';
import Detalhes from './telas/Detalhes';
import MenuAluno from './telasAluno/MenuAluno';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import AuthLoadingScreen from './telas/AuthLoadingScreen';



console.disableYellowBox = true;

const TabScreen = createMaterialTopTabNavigator(
  {
    
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
        backgroundColor: '#1E90FF',
       
        
      },
      
      labelStyle: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize:14
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
                  
                 
                  Informações:
                  {screen:Detalhes},
                  
                  Aluno:{
              
                    screen: MenuAluno,
                   
                  },
                
                  TabScreen: {
                    screen: TabScreen,
                    navigationOptions: {
                      headerStyle: {
                        backgroundColor: '#1E90FF',
                      },
                      headerTintColor: '#FFFFFF',
                      title: 'Discente',
                    },
                  },
                  
                },      
                
                {
                  initialRouteName: 'App',
                
                });
                const AppContainer = createAppContainer (AppNavigator);


                const AuthStack = createStackNavigator(
                    {
                      SignIn: Login,
                      App:AppContainer,
                      Cadast: Cadastro
                    },
                    {
                      initialRouteName: 'SignIn',
                      headerMode: 'none',
                      header: null,
                    },
                  );

                  const RootStack = createSwitchNavigator(
                    {
                      AuthLoading: AuthLoadingScreen,
                      Auth: AuthStack,
                      App: AppContainer
                     
                    },
                    {
                      initialRouteName: 'AuthLoading',
                    },
                  );
                  
                  const RootStackContainer = createAppContainer(RootStack);
             
                export default RootStackContainer;