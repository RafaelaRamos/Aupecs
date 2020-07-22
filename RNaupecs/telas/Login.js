
  import React, { useState } from 'react'
  import { StackActions, NavigationActions } from 'react-navigation'
  import { AsyncStorage } from 'react-native'
  
  import PropTypes from 'prop-types'
  
  import api from '../service/api'
  
  import {
    Container ,
    InputLogin,
    Botton,
    TextBotton,
    Error,
    ViewTerc,
    ViewSecund,
    Form,
    Text,
    BntConta,
  Image } from './style'
  
  export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
  
    async function saveUser(user) {
      await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
    }
  
    async function signIn() {
      if (email.length === 0) return
  
      setLoading(true)
  
      try {
  
        const credentials = {
          email: email,
          password: password
        }
  
        const response = await api.post('/auth/signin', credentials)
  
        const user = response.data
  
        await saveUser(user)
  
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'App' })],
        })
  
        setLoading(false)
  
        props.navigation.dispatch(resetAction)
      } catch (err) {
        console.log(err)
  
        setLoading(false)
        setErrorMessage('Usuário não existe')
      }
    }
  
    return (
      <Container >
      <ViewSecund>
  
        <Image source={require('../assets/oficial.png')}
           />
  
         {!!errorMessage && <Error>{errorMessage}</Error>}

       
          <InputLogin placeholder="Digite seu email" keyboardType={'email-address'} value={email}
            onChangeText={email => setEmail(email)} />
          <InputLogin placeholder="Digite sua senha" secureTextEntry={true} value={password}
            onChangeText={password => setPassword(password)} />
  
          <Text> Esqueci minha senha</Text>
  
          <Botton onPress={signIn}>
  
            <TextBotton > Entrar</TextBotton>
  
          </Botton>
       
  
  
      </ViewSecund>
  
      <ViewTerc>
  
        <BntConta onPress={() => this.props.navigation.navigate('Cadast')} >
  
          <Text> Criar uma conta? </Text>
  
  
        </BntConta>
  
      </ViewTerc>
  
    </Container>
  
    )
  }
  
  Login.navigationOptions = () => {
    return {
      header: null,
    }
  }
  
  Login.propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }
  