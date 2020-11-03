import * as Yup from 'yup';
import { Formik } from 'formik'
import React, { useRef, useState } from 'react';
import { View,AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';

import api from '../service/api'
import ErrorMessage from '../telas/ErrorMessage'
import {


  TextBotton,
  BottonSenha,
  InputSenha,
  Exibir,
  Error,
  Sucesso

} from './style'

export default function ConfigSenha(props) {

  const [SucessoMensagem, setSucessoMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const senhaAtual = useRef(null);
  const senha = useRef(null);
  const confirmarSenha = useRef(null);


  async function handleSubmit(values) {
    if (values.senha !==values.confirmarSenha)
    return setErrorMessage('senhas não conrespondem')
    

    
    
    else {
    try{

      var user = await AsyncStorage.getItem('@ListApp:userToken');
      user = JSON.parse(user)
        const Senha = {
        senhaAtual: values.senhaAtual,
        senha: values.senha, }
      console.log(Senha)
      const response = await api.put('/senhaAluno', Senha, { params:{id:user.id} })
      setErrorMessage('')
      return setSucessoMessage('Alteração bem sucedida')
        }
        catch{


        setErrorMessage('Senha atual invalida')
        }
      }
  
}


  const FormSchema = Yup.object().shape({
    senhaAtual: Yup.string()
      .required('Campo obrigatório'),
    senha: Yup.string()
      .required('Campo obrigatório')
      .min(6, 'Sua senha deve ter no minimo 6 caracteres'),
    confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), null],'Senhas não consrespondem')


  });

  return (
    <Formik


      initialValues={{
        senhaAtual: '',
        confirmarSenha: '',
        senha: ''
      }}
      onSubmit={values => {
        handleSubmit(values)
      }}
      validationSchema={FormSchema}   >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched

      }) => (
          <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>

            <Exibir>

              {!!errorMessage && <Error>{errorMessage}</Error>}
              {!!SucessoMensagem && <Sucesso>{SucessoMensagem}</Sucesso>}

              <InputSenha placeholder="Senha atual" secureTextEntry={true}
                ref={senhaAtual}
                onChangeText={handleChange('senhaAtual')} values={values.senhaAtual} />

              <ErrorMessage errorValue={touched.senhaAtual && errors.senhaAtual} />

              <InputSenha placeholder="Nova senha" secureTextEntry={true} ref={senha}
                onChangeText={handleChange('senha')} values={values.senha} />

              <ErrorMessage errorValue={touched.senha && errors.senha} />

              <InputSenha placeholder="Repita a nova senha" secureTextEntry={true} ref={confirmarSenha}
                onChangeText={handleChange('confirmarSenha')} values={values.confirmarSenha} />
            
              <ErrorMessage errorValue={touched.confirmarSenha && errors.confirmarSenha} />

              <BottonSenha onPress={handleSubmit}>
                <TextBotton> Salvar alterações</TextBotton>
              </BottonSenha>

            </Exibir>
          </View>

        )}
    </Formik>





  );
}

ConfigSenha.navigationOptions = () => {
  return {
    title: 'Reedifinir senha',
    headerStyle: {
      backgroundColor: '#1E90FF',

    }, headerTintColor: 'white',


  }
}

ConfigSenha.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}