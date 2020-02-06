/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './Style'


export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        
        <View style={styles.viewsecund}>
          <Image source={require('../RNaupecs/assets/tea.jpg')}
            style={{ width: 150, height: 150 }} />

          <TextInput placeholder="Digite seu email" keyboardType={'email-address'} style={styles.input} />


          <TextInput placeholder="Digite sua senha" secureTextEntry={true} style={styles.input} />
       
          <Text style={styles.test}> Esqueci minha senha</Text>

          <TouchableOpacity style={styles.botao} onPress={() => { this.clicou() }}  >
            <Text style={styles.botaoText}> Login</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.viewterc}>
      
        
          <Text style={styles.text}> Criar uma conta?</Text>
        </View>
      </View>




    );



  }

}


