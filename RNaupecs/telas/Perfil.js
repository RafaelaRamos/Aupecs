
import React  ,{ PureComponent }from 'react';
import { View, Image, Modal, TouchableOpacity, AsyncStorage, Text, StyleSheet, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fab from 'react-native-fab'
import api from '../service/api';
import {

  Botton,
  TextBotton,
  InputUpdate,
  TextCadastro,
  Title,
  InputFormatadoUP,
  TextPerfil,
  Rowview,
  Exibir,
  ModalView


} from '../telas/style';
import { Formik } from 'formik'
import * as Yup from 'yup';



class Perfil extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Informações pessoais',
    headerStyle: {
      backgroundColor: '#1E90FF',
    },
    headerTintColor: 'white',


  });
  constructor(props) {
    super(props);


    this.state = {
      nome: '',
      cpf: '',
      formacao: '',
      email: '',
      dataNascimento: '',
      show: false,
    };
  }

  componentDidMount() {
    this.getUsuario();
  }


  cancelar() {
    this.setState({ show: false })
    this.getUsuario()



  }

  async getUsuario() {

    var user = await AsyncStorage.getItem('@ListApp:userToken');
    user = JSON.parse(user)

    try {

      const response = await api.get('/professor', { params: { id: user.id } });

      this.setState({
        nome: response.data.nome,
        cpf: response.data.cpf,
        formacao: response.data.formacao,
        dataNascimento: response.data.dataNascimento,
        email: response.data.email


      });

      console.log(response.data.nome)

    }


    catch {
      console.log("erro!")
    }
  }

  handleSubmit = async (values) => {
    try {

      const professor = {
        nome: values.nome,
        formacao: values.formacao,
        cpf: values.cpf,
        dataNascimento: values.dataNascimento,
        senha: '1234',
        email: values.email
      }

      var user = await AsyncStorage.getItem('@ListApp:userToken');
      user = JSON.parse(user)

      const response = await api.put('/professor', professor, { params: { id: user.id } })
      console.log(response)
      this.setState({ show: false })
      

    } catch {

      console.log("Erro!!")
      this.setState({ show: false })
    }

  }

  render() {


    const FormSchema = Yup.object().shape({


      email: Yup
        .string()
        .email('Inserir email válido')

    });
    return (

      <View style={{ flex: 1, backgroundColor: '#f3f3f3', }}>
        <Exibir>

          <Rowview >
            <TextCadastro>Nome completo:</TextCadastro>
            <TextPerfil> {this.state.nome}</TextPerfil>
          </Rowview>

          <Rowview>
            <TextCadastro>CPF: </TextCadastro>
            <TextPerfil>{this.state.cpf}</TextPerfil>
          </Rowview>



          <Rowview>

            <TextCadastro>Formação:</TextCadastro>

            <TextPerfil >{this.state.formacao}</TextPerfil>
          </Rowview>

          <Rowview>
            <TextCadastro>Data de nascimento:</TextCadastro>
            <TextPerfil>{this.state.dataNascimento}</TextPerfil>
          </Rowview>
          <Rowview>
            <TextCadastro>Email:</TextCadastro>
            <TextPerfil>{this.state.email}</TextPerfil>
          </Rowview>
        </Exibir>
        <Fab buttonColor="#00BFFF" iconTextComponent={<Icon name="create" />} onClickAction={() => this.setState({ show: true })} />
        <Modal transparent={true} visible={this.state.show} >


          <ScrollView >

            <Formik
              initialValues={{ nome: this.state.nome, formacao: this.state.formacao, dataNascimento: this.state.dataNascimento, email: this.state.email, cpf: this.state.cpf }}
              onSubmit={values => {
                this.handleSubmit(values)
              }}>

              {({

                values,
                handleChange,
                handleSubmit,
                validationSchema = { FormSchema } }) => (

                  <ModalView>
                    <Exibir>

                      <View alignItems="center" >

                        <Title>Edite informações</Title>
                      </View>
                      <TextCadastro> Nome completo </TextCadastro>

                      <InputUpdate
                        name='nome'
                        value={values.nome}
                        onChangeText={handleChange('nome')}
                      />
                      <TextCadastro>CPF</TextCadastro>
                      < InputFormatadoUP
                        name='cpf'
                        type={'cpf'}

                        value={values.cpf}
                        onChangeText={handleChange('cpf')}



                      />

                      <TextCadastro> Formação</TextCadastro>
                      <InputUpdate value={values.formacao}
                        name='formacao'

                        onChangeText={handleChange('formacao')} />



                      <TextCadastro>Data nascimento</TextCadastro>


                      < InputFormatadoUP
                        name='data'
                        type={'datetime'}
                        options={{
                          format: 'DD/MM/YYYY'
                        }}

                        value={values.dataNascimento}
                        onChangeText={handleChange('dataNascimento')}


                      />


                      <TextCadastro> Email</TextCadastro>
                      <InputUpdate
                        name='email'
                        value={values.email}
                        onChangeText={handleChange('email')}
                      />

                      <View alignItems="center" >
                        <Botton onPress={handleSubmit}>

                          <TextBotton> Salvar</TextBotton>

                        </Botton>

                        <Botton onPress={() => this.setState({ show: false })}>

                          <TextBotton> Cancelar</TextBotton>

                        </Botton>

                      </View>

                    </Exibir>

                  </ModalView>

                )}

            </Formik>

          </ScrollView >

        </Modal>
      </View>

    );
  }
}

export default Perfil;

