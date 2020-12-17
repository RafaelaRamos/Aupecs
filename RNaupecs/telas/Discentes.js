
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../service/api';
import { getId } from '../utils';
import { SearchBar } from 'react-native-elements';
import Fab from 'react-native-fab'
import { View, Image, TouchableOpacity } from 'react-native';
import {

  TextLista,
  Lista,
  FlatList,
  ListItem,
  ContainerLista


} from '../telas/style';




const ListaItens = ({ nome, navigation, id }) => (


  <Lista onPress={() => navigation.navigate('TabScreen', { id })}>
    <ListItem>
      <TextLista> {nome} </TextLista>
    </ListItem>

  </Lista>
);




class Discentes extends React.Component {



  constructor(props) {
    super(props);
    this.state = {

      refresh: false,
      menuData: [],
      


    }
    this.data = [];
  }


  componentDidMount() {
    this.getAlunos()
  }

  

  async getAlunos() {

    var id = await getId()
    const response = await api.get('/alunos', { params: { id: id } });
    console.log(response.data)
    this.setState({
      menuData: response.data,
      refresh: false

    });
    
    
  }

  onRefresh() {
    this.setState({ refresh: true }, function () { this.getAlunos() });
  }

 


  

  static navigationOptions = ({ navigation }) => ({
    title: 'Lista de Discentes',
    headerStyle: {
      backgroundColor: '#1E90FF'
    },
    headerTintColor: 'white',
   
    headerLeft: (
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ marginLeft: 10, height: 25, width: 25 }}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>
       

      </View>
    )
  
  });





  render() {


    return (
      <ContainerLista>

        <FlatList
          data={this.state.menuData}

          renderItem={({ item }) => (
            <ListaItens
              navigation={this.props.navigation}
              nome={item.nome}
              id={item.id}
              key={item.id}

            />

          )}

          onRefresh={() => this.onRefresh()}
          refreshing={this.state.refresh}
        
        />

        <Fab buttonColor='#6495ED' iconTextComponent={<Icon name="user-plus" />} onClickAction={() => this.props.navigation.navigate('CadastrarAluno')} />


      </ContainerLista>
    );
  }
}

export default Discentes;