

import React from 'react';
import { View,  TextInput,Image, TouchableOpacity, Text } from 'react-native';
import styles from './Style';

class  Login extends React.Component{
    render() {
  
      return (
        <View style={styles.container}>
          
          <View style={styles.viewsecund}>
        
            <Image source={require('../assets/oficial.png')}
              style={{ width: 200, height: 200 }} />
  
            <TextInput placeholder="Digite seu email" keyboardType={'email-address'} style={styles.inputLogin} />
            <TextInput placeholder="Digite sua senha" secureTextEntry={true}  style={styles.inputLogin} />
            <Text style={styles.test}> Esqueci minha senha</Text>
  
            <TouchableOpacity style={styles.botao}   onPress={() => this.props.navigation.navigate('ScreenA')}>
  
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
  export default Login;