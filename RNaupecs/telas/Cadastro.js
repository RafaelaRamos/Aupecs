
import React, { useRef, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';
import api from '../service/api'
import ErrorMessage from './ErrorMessage'
import * as Yup from 'yup';

import { Formik } from 'formik'
import {

  Botton,
  TextBotton,
  InputCadastro,
  TextCadastro,
  Senha,
  InputFormatado,
  ContainerForm,
  ViewQuart,
  ViewQuint,
  ViewSext,
  ViewSet,
  Title,
  Error,
  View,
  Sucesso

} from './style'


export default function Cadastro(props) {
  const dataNascimento = useRef(null);
  const nome = useRef(null);
  const email = useRef(null);
  const formacao = useRef(null);
  const cpf = useRef(null);
  const senha = useRef(null);
  const confirmarSenha = useRef(null);
  const [SucessoMensagem, setSucessoMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [errorMessage, setErrorMessage] = useState(null)




  async function handleSubmit(values) {




    setLoading(true)

    if (values.senha !== values.confirmarSenha)
      return setErrorMessage('senhas não conrespondem')




    else {

      try {
        const professor = {
          nome: values.nome,
          email: values.email,
          senha: values.senha,
          formacao: values.formacao,
          cpf: values.cpf,
          dataNascimento: values.dataNascimento

        }


        const response = await api.post('/professor', professor)
        setLoading(true)
        if (loading === true) {
          setErrorMessage('')
          return setSucessoMessage('conta criada com sucesso')

        }
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
        })

        setLoading(false)



        props.navigation.dispatch(resetAction)


      } catch (_err) {
        setErrorMessage('Houve um problema com o cadastro, verifique os dados preenchidos!');
      }
    }
  }

  const FormSchema = Yup.object().shape({
    nome: Yup.string().required('Preenchimento obrigatório'),
    cpf: Yup.string().required('Preenchimento obrigatório'),
    formacao: Yup.string().required('Preenchimento obrigatório'),
    dataNascimento: Yup.string().required('Preenchimento obrigatório'),
    email: Yup
      .string()
      .email("Insira um email valido")
      .required('Preenchimento obrigatório'),
    senha: Yup.string()
      .required('Preenchimento obrigatório')
      .min(6, 'Sua senha deve ter no minimo 6 caracteres'),
    confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'Senhas não consrespondem')

  });
  return (
    <Formik
      initialValues={{
        nome: '',
        formacao: '',
        dataNascimento: '',
        cpf: '',
        email: '',
        confirmarSenha: '',
        senha: ''
      }}
      onSubmit={values => {
        handleSubmit(values)
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        touched,
        errors

      }) => (
          <ScrollView backgroundColor='#1E90FF'>
            <ContainerForm>
              <ViewQuart>
                <Image source={require('../assets/oficial.png')}
                  style={{ width: 150, height: 150 }} />
                <Title> CADASTRO </Title>
                {!!errorMessage && <Error>{errorMessage}</Error>}
                {!!SucessoMensagem && <Sucesso>{SucessoMensagem}</Sucesso>}
                <View >
                  <TextCadastro > Nome completo:</TextCadastro>

                  <InputCadastro placeholder="Digite seu nome"
                    ref={nome}
                    onChangeText={handleChange('nome')} values={values.nome} />
                  <ErrorMessage errorValue={touched.nome && errors.nome} />

                </View >
                < ViewSext>
                  <ViewSet >
                    <TextCadastro  > CPF:</TextCadastro>
                  </ViewSet>
                  <ViewSet >
                    <TextCadastro >Nascimento :</TextCadastro>
                  </ViewSet >
                </ ViewSext>
                < ViewSext >

                  <InputFormatado
                    type={'cpf'}
                    ref={cpf}
                    value={values.cpf}
                    onChangeText={handleChange('cpf')}
                  />
                  <InputFormatado
                    type={'datetime'}
                    options={{
                      format: 'DD/MM/YYYY'
                    }}
                    ref={dataNascimento}
                    value={values.dataNascimento}
                    onChangeText={handleChange('dataNascimento')}
                  />
                </ ViewSext>
                <ViewSext>

                  <ErrorMessage errorValue={touched.cpf && errors.cpf} />

                </ViewSext>
                <View>
                  <TextCadastro  >  Formação: </TextCadastro>
                  <InputCadastro placeholder="formação"
                    ref={formacao}
                    onChangeText={handleChange('formacao')} values={values.formacao}
                  />

                  <ErrorMessage errorValue={touched.formacao && errors.formacao} />
                </View>
                <View>
                  <TextCadastro   >  Email:</TextCadastro>
                  <InputCadastro placeholder="email" keyboardType={'email-address'}
                    ref={email}
                    onChangeText={handleChange('email')} value={values.email}
                  />
                  <ErrorMessage errorValue={touched.email && errors.email} />
                </View>

                <ViewSext>
                  <ViewSet >
                    <TextCadastro  >  Senha:</TextCadastro>
                  </ViewSet>
                  <ViewSet>
                    <TextCadastro >  Repetir senha:</TextCadastro>
                  </ViewSet>
                </  ViewSext>

                < ViewSext>
                  <Senha secureTextEntry={true} placeholder="Digite sua senha"
                    ref={senha}
                    onChangeText={handleChange('senha')} values={values.senha} />

                  <Senha secureTextEntry={true} placeholder="repita sua senha"
                    ref={confirmarSenha}
                    onChangeText={handleChange('confirmarSenha')} values={values.confirmarSenha}
                  />
                </ ViewSext>
                < ViewSext >
                  <ErrorMessage errorValue={touched.senha && errors.senha} />
                  <ErrorMessage errorValue={touched.confirmarSenha && errors.confirmarSenha} />
                </ ViewSext>
                <Botton onPress={handleSubmit}>
                  <TextBotton  >Cadastre-se</TextBotton>

                </Botton>

              </ViewQuart>

            </ContainerForm>
          </ScrollView >)}
    </Formik>

  );

}

Cadastro.navigationOptions = () => {
  return {
    header: null,
  }
}

Cadastro.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}
