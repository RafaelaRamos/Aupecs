import React ,{useRef,useState} from 'react';
import {Image,AsyncStorage,ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';
import api from '../service/api';
import ErrorMessage from '../telas/ErrorMessage';
import * as Yup from 'yup';

import { Formik } from 'formik'


import {

  Botton,
  TextBotton,
  InputCadastro,
  TextCadastro,
  Senha,
  ContainerForm,
  ViewQuart,
  InputCpf,
  
  ViewSext,
  ViewSet,
  Title,
  Error,
  View,
  InputFormatado,
  Sucesso,
 

} from '../telas/style';



export default function CadastroAluno (props) {

    const dataNascimento =useRef(null);
    const nome = useRef(null);
    const email = useRef(null);
    const objetivos =useRef(null);
    const filiacao = useRef(null);
    const senha =useRef(null);
    const confirmarSenha= useRef(null);
    const [SucessoMensagem , setSucessoMessage]= useState(null)
    const [loading, setLoading] = useState(false)
    
    const [errorMessage, setErrorMessage] = useState(null)
    const[idProfessor,setIdProfessor]=useState('');


  
    async function handleSubmit(values){
     

      setLoading(true)
      
      if (values.senha !==values.confirmarSenha)
      return setErrorMessage('senhas não conrespondem')
      
  
      
      
      else {
        
        
        try {
          var user =  await AsyncStorage.getItem('@ListApp:userToken');
        user = JSON.parse(user)
      
     
          const aluno = {

            nome:values.nome,
            filiacao:values.filiacao,
            objetivos:values.objetivos,
            email: values.email,
            senha: values.senha,
            idProfessor:user.id,
            dataNascimento:values.dataNascimento
  
          }
          const response = await api.post('/aluno',aluno)
        
       
        const resetAction = StackActions.reset({
          index:0,
          actions: [NavigationActions.navigate({ routeName: 'App' })],
        })
  
        setLoading(false)
  
        props.navigation.dispatch(resetAction)
       
         
        } catch (_err) {
          setErrorMessage('Houve um problema com o cadastro, verifique os dados preenchidos!' );
        }
      }
    }

    const FormSchema = Yup.object().shape({
      nome: Yup.string().required('Campo obrigatório'),
      filiacao: Yup.string().required('Campo obrigatório'),
      objetivos: Yup.string().required('Campo obrigatório').max(250, 'Excedido o limite de 250 caracteres '),
      dataNascimento: Yup.string().required('Campo obrigatório'),
      email: Yup
      .string()
      .trim().matches (/^[a-zA-Z]+[0-9]*$/g, 'Só é permitido letras e números')  .required('Insira um nome de usuário válido')  ,
        senha: Yup.string()
        .required('Campo obrigatório')
        .min(6, 'Sua senha deve ter no minimo 6 caracteres'),
        confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), null],'Senhas não consrespondem')

    }); 
      return (
        <Formik
        initialValues={{
         nome:'',
         objetivos:'',
         dataNascimento:'',
         filiacao:'',
         email:'',
         confirmarSenha:'',
         senha:''
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          handleSubmit(values)
        }}
       >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched
         
        }) => (
          <ScrollView backgroundColor='#1E90FF'>
        <ContainerForm>
          <ViewQuart >
            <Image source={require('../assets/oficial.png')}
              style={{ width: 150, height: 150 }} />
            <Title> CADASTRO ALUNO</Title>
            {!!errorMessage && <Error>{errorMessage}</Error>}
            {!!SucessoMensagem && <Sucesso>{SucessoMensagem}</Sucesso>}
            <View >
              <TextCadastro > Nome completo:</TextCadastro>
              
              <InputCadastro placeholder="Nome do Aluno" 
              ref={nome}
              onChangeText={handleChange('nome')} values={values.nome}
             
              
              
              /> 
             <ErrorMessage errorValue={touched.nome && errors.nome} />  
   
            </View >
            < ViewSext>
              
                 <ViewSet >

                <TextCadastro  > Filiação:</TextCadastro>
                </ViewSet >
            
              
              <ViewSet >
                <TextCadastro > Nascimento :</TextCadastro>
                </ViewSet >
            </ ViewSext>
            < ViewSext >
              <InputCpf placeholder="filiacao"
              ref={filiacao}
              onChangeText={handleChange('filiacao')} values={values.filiacao}
             
               />   
                
             <InputFormatado
                name='dataNascimento'
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                placeholder="24/08/2020"
                value={values.dataNascimento}
                onChangeText={handleChange('dataNascimento')}
              
              />
 
              
            </ ViewSext>
            <ViewSext>
          
            <ErrorMessage errorValue={touched.dataNascimento && errors.dataNascimento} />
            
             </ViewSext>
               
            <View>
              <TextCadastro  >  Objetivos:</TextCadastro>
              <InputCadastro placeholder="Objetivos" 
             ref={objetivos}
             onChangeText={handleChange('objetivos')} values={values.objetivos}
               /> 
               <ErrorMessage errorValue={touched.objetivos && errors.objetivos} />
            </View>
            <View>
              <TextCadastro   >  Nome de usuário:</TextCadastro>
              <InputCadastro placeholder="nome de usuário" keyboardType={'email-address'}
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
            onChangeText={handleChange('senha')} values={values.senha}
           

            />   
            
  
              <Senha  secureTextEntry={true}  placeholder="repita sua senha" 
             ref={confirmarSenha}
             onChangeText={handleChange('confirmarSenha')} values={values.confirmarSenha}
             
             /> 
              
             
            </ ViewSext>
            < ViewSext >
            <ErrorMessage errorValue={touched.senha && errors.senha} />
            <ErrorMessage errorValue={touched.confirmarSenha && errors.confirmarSenha} />
          </ ViewSext>
  
            <Botton onPress={ handleSubmit}>
              <TextBotton  >Cadastrar</TextBotton>
  
            </Botton>
  
          </ViewQuart>
  
        </ContainerForm>
        </ScrollView>)}


        </Formik>
  
      );
  
    }
  
  CadastroAluno.navigationOptions = () => {
    return {
      title:'Cadastrar Aluno',
      headerStyle: {
        backgroundColor: '#1E90FF',
  
      },  headerTintColor: 'white',
  
    
    }
  }
  
  
  CadastroAluno.propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }
  
