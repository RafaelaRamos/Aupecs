
import React from 'react';
import { View, Text, StyleSheet, Form, TouchableOpacity, TextInput, Modal, Alert, ScrollView } from 'react-native';
import api from '../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import { Formik } from 'formik'


import { StackActions, NavigationActions } from 'react-navigation'


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


class Informacoes extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      filiacao: '',
      objetivos: '',
      dataNascimento: '',
      show: false,




    };
  }

  componentDidMount() {
    this.getUsuario();
  }


  async getUsuario() {
    id = this.props.navigation.state.params.idteste

    try {

      const response = await api.get('/aluno', { params: { id: id } });

      this.setState({
        nome: response.data.nome,
        objetivos: response.data.objetivos,
        filiacao: response.data.filiacao,
        dataNascimento: response.data.dataNascimento,

      });





    }


    catch {
      console.log("erro!")
    }
  }




  openAlert() {

    Alert.alert(
      'Deseja mesmo remover esse aluno?',
      'Após confirmação a ação não poderá ser desfeita',

      [
        { text: 'Sim', onPress: () => { this.deletarAluno() } },
        { text: 'Não', onPress: () => console.log('No button clicked'), style: 'cancel' },
      ],
      {
        cancelable: true
      }
    )
  }


  handleSubmit = async (values) => {
    try {

      const aluno = {

        nome: values.nome,
        filiacao: values.filiacao,
        objetivos: values.objetivos,
        dataNascimento: values.dataNascimento,

      }
      id = this.props.navigation.state.params.idteste

      const response = await api.put('/aluno', aluno, { params: { id: id } })
      console.log(response)
      this.setState({ show: false })

    }


    catch {
      console.log('erro!!!'
      )
      this.cancelar()

    }

  }


  async deletarAluno() {
    try {
      id = this.props.navigation.state.params.idteste

      const response = await api.delete('/aluno', { params: { id: id } })
    }

    catch {
      console.log('erro!!!')
    }

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'App' })],
    })


    this.props.navigation.dispatch(resetAction)
  }






  static navigationOptions = ({ navigation }) => ({
    title: 'Informações do discente',
    headerStyle: {
      backgroundColor: '#1E90FF',

    }, headerTintColor: 'white',

  });




  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <Exibir>

          < Rowview >
            <TextCadastro>Nome do discente:</TextCadastro>
            <TextPerfil>{this.state.nome}</TextPerfil>
          </ Rowview>

          <Rowview>
            <TextCadastro>Responsável:</TextCadastro>
            <TextPerfil>{this.state.filiacao}</TextPerfil>
          </Rowview>


          <Rowview>

            <TextCadastro>Data de Nascimento:</TextCadastro>

            <TextPerfil>{this.state.dataNascimento}</TextPerfil>

          </Rowview>


          <Rowview>

            <TextCadastro>Objetivos :</TextCadastro>

            <TextPerfil>{this.state.objetivos}</TextPerfil>
          </Rowview>





        </Exibir>

        <ActionButton buttonColor="#1E90FF">
          <ActionButton.Item buttonColor='red' borderColor='#f3f3f3' borderBottomWidth='0.2' title="Remover Aluno" onPress={() => { this.openAlert() }}>
            <Icon name="user-times" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#00BFFF' title="Editar informações" onPress={() => this.setState({ show: true })}>
            <Icon name="edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>


        <Modal transparent={true} visible={this.state.show} >

          <ModalView>

            <Formik
              initialValues={{ nome: this.state.nome, filiacao: this.state.filiacao, dataNascimento: this.state.dataNascimento, objetivos: this.state.objetivos }}
              onSubmit={values => {
                this.handleSubmit(values)
              }}>

              {({

                values,
                handleChange,
                handleSubmit,

              }) => (
                  <ScrollView >

                    <Exibir>

                      <View alignItems="center" >
                        <Title>Edite informações</Title>
                      </View>

                      <TextCadastro> Nome </TextCadastro>

                      <InputUpdate
                        name='nome'
                        value={values.nome}
                        onChangeText={handleChange('nome')}

                      />
                      <TextCadastro> Filiacao</TextCadastro>
                      <InputUpdate value={values.filiacao}
                        name='filiacao'
                        onChangeText={handleChange('filiacao')} />
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
                      <TextCadastro> Objetivos</TextCadastro>
                      <InputUpdate
                        name='objetivos'
                        value={values.objetivos}
                        onChangeText={handleChange('objetivos')}
                      />

                      <View alignItems="center" >
                        <Botton onPress={handleSubmit}>

                          <TextBotton> Editar</TextBotton>

                        </Botton>

                        <Botton onPress={() => this.setState({ show: false })}>

                          <TextBotton> Cancelar</TextBotton>

                        </Botton>
                      </View >

                    </Exibir>
                  </ScrollView >)}


            </Formik>

          </ModalView>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default Informacoes;

