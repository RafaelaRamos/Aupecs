
  import React, { useState,useRef } from 'react'
  import { StackActions, NavigationActions } from 'react-navigation'
  import { AsyncStorage } from 'react-native'
  
  import PropTypes from 'prop-types'
  
  import api from '../service/api'
  import * as Yup from 'yup';
  import ErrorMessage from './ErrorMessage'

import { Formik } from 'formik'
  
  import {
    Container ,
    InputLogin,
    Botton,
    TextBotton,
    Error,
    ViewTerc,
    ViewSecund,
    Text,
    BntConta,
  Image } from './style'
  
  export default function Login(props) {
    const email = useRef(null);
    const password  = useRef(null);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)






  
    async function saveUser(user) {
      await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
    }
   
  
    async function handleSubmit(values) {
   
  
      setLoading(true)
      
  try 
      
      
      {

      const credentials = {
        email: values.email,
        password: values.password
      }
  
      const response = await api.post('/auth/signin', credentials)
        
      
      const user = response.data
  
      await saveUser(user)
      console.log(user)
      if(user.roles=='ADMIN'){
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'App' })],
      })
      setLoading(false)
      props.navigation.dispatch(resetAction)
 
      }else
      {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Aluno' })],
        })
        setLoading(false)
        props.navigation.dispatch(resetAction)
      
        }
       
    
    
    }
      catch(err){
        setLoading(false)
        setErrorMessage('Usuário ou senha incorretos')

       
        
        
      }

     
    }
    const FormSchema = Yup.object().shape({
      email: Yup
      .string().required('Dados invalidos'),
        
        
    }); 
  
    return (
      <Formik
      initialValues={{
       
       email:'',
       password:'',
      
      }}
      onSubmit={values => {
        handleSubmit(values)
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched
       
      }) => (
      <Container >
      <ViewSecund>
  
        <Image source={require('../assets/oficial.png')}
           />
  
         {errorMessage && <Error>{errorMessage}</Error>}

       
          <InputLogin placeholder="Digite seu email ou nome de usuário"  

         ref={email}
          onChangeText={handleChange('email')} value={values.email}
          />
           <ErrorMessage errorValue={touched.email && errors.email} />
          <InputLogin placeholder="Digite sua senha" secureTextEntry={true} ref={password}
          iconColor="#2C384A"
          onChangeText={handleChange('password')} value={values.password}
        
          />
          
          <Text> Esqueci minha senha</Text>
  
          <Botton onPress={handleSubmit}>
  
            <TextBotton > Entrar</TextBotton>
  
          </Botton>
        </ViewSecund>
  
      <ViewTerc>

        <BntConta onPress={() =>  props.navigation.navigate('Cadast')} >
        <Text> Criar uma conta? </Text>
         </BntConta>
      </ViewTerc>
   </Container>)}
    </Formik>
  
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
  