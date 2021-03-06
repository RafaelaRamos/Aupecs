import React, { PureComponent } from 'react';

import { View, StyleSheet, FlatList, Form, TouchableOpacity, Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';
import ListGrade from '../MenuJogo';
import { createRows } from "../GameLoop"
import api from '../../service/api';
import { getId } from '../../utils';




class StartNivelIII extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      data: []


    }
  }
  static navigationOptions = {
    header: null
  };


  componentDidMount() {
    this.getAtividades()
  }



  async getAtividades() {

    var id = await getId()
    let nivel = '3'
    const response = await api.get('/atividades', { params: { id: id, nivel: nivel } });

    this.setState({
      data: response.data,

    });

  }

  render() {
    const columns = 3;

    return (
      <View style={{ flex: 1, backgroundColor: '#87CEEB' }} >
     <FlatList
          data={createRows(this.state.data, columns)}
          keyExtractor={item => item.id}
          numColumns={columns}
          renderItem={({ item }) => (
          <ListGrade data={item} fase={"NivelIII"} navigation={this.props.navigation} /> )}/>

      </View>

    );

  }
}



export default StartNivelIII;