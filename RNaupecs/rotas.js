import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerMenu from './telas/DrawerMenu';
import Discentes from './telas/Discentes';
import Perfil from './telas/Perfil';
import Cadastro from './telas/Cadastro';
import Login from './telas/Login';
import Resultados from './telas/Resultados';
import Configura from './telas/Atividade';
import Informacoes from './telas/Informacoes';
import MenuAluno from './jogo/StartJogo';
import FimDeJogo from './jogo/Fim';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AuthLoadingScreen from './telas/AuthLoadingScreen';
import CadastroAluno from './componentesAluno/CadastroAluno';
import Configuracoes from './telas/Configuracoes';
import ConfigSenha from './telas/ConfigSenha';
import SenhaAluno from './componentesAluno/SenhaAluno';
import ConfigAluno from './componentesAluno/ConfigAluno';
import NivelI from './jogo/nivelI/NivelUm';
import StartNivelI from './jogo/nivelI/StartNivelI';
import NivelII from './jogo/nivelII/NivelDois';
import StartNivelII from './jogo/nivelII/StartNivelII';
import NivelIII from './jogo/nivelIII/NivelTres';
import StartNivelIII from './jogo/nivelIII/StartNivelIII';

console.disableYellowBox = true;

const TabScreen = createMaterialTopTabNavigator(
  {

    Atividade: Configura,
    Resultados: Resultados



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
        fontSize: 14
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
  Config: Configuracoes





});

const AppStack = createDrawerNavigator({

  SomeStackNavigator,

},

  {
    contentComponent: DrawerMenu
  }
);


const AppNavigatorAluno = createStackNavigator(

  {



    Aluno: {

      screen: MenuAluno,

    },
    SenhaAluno: {

      screen: SenhaAluno
    },


    NivelI: {

      screen: NivelI
    },

    NivelII: {

      screen: NivelII
    },

    NivelIII: {

      screen: NivelIII
    },
    StartNivelUm: {


      screen: StartNivelI
    },
    StartNivelDois: {


      screen: StartNivelII
    },
    ConfigAluno: {

      screen: ConfigAluno

    },
    StartNivelTres: {


      screen: StartNivelIII
    }
    ,

    Fim: {
      screen: FimDeJogo


    },
    MenuPrincipal: {


      screen: MenuAluno
    }
  },

  {
    initialRouteName: 'MenuPrincipal',

  });
const AppAluno = createAppContainer(AppNavigatorAluno);



const AppNavigator = createStackNavigator(

  {
    App: {
      screen: AppStack,
      navigationOptions: {
        header: null,
      }
    },


    Informações:
      { screen: Informacoes },


    CadastrarAluno: {
      screen: CadastroAluno

    },
    Senha: {

      screen: ConfigSenha
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
const AppContainer = createAppContainer(AppNavigator);


const AuthStack = createStackNavigator(
  {
    SignIn: Login,
    App: AppContainer,
    Aluno: AppAluno,
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
    App: AppContainer,
    Aluno: AppAluno
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer;