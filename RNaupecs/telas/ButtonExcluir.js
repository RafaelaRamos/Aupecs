
import React, { useState, useRef } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { View, StyleSheet, FlatList, Text, Form, TouchableOpacity, Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../service/api';

export default function ButtonExcluir({ url, id }) {

  return (
    <TouchableOpacity onPress={() => { openAlert(url, id) }}>
      <View style={styles.excluir}>


        <Icon name="times" style={styles.actionButtonIcon} />

      </View>

    </TouchableOpacity>

  )

}
function openAlert(url, id) {

  Alert.alert(
    'Deseja remover esse item?',
    'Após confirmação a ação não poderá ser desfeita',

    [
      { text: 'Sim', onPress: () => { deletar(url, id) } },
      { text: 'Não', onPress: () => console.log('No button clicked'), style: 'cancel' },
    ],
    {
      cancelable: true
    }
  )
}
async function deletar(url, id) {
  try {


    const response = await api.delete(url, { params: { id: id } })
  }


  catch {
    console.log('erro!!!')
  }
}






const styles = StyleSheet.create({

  excluir: {
    flexDirection: 'row-reverse',


  }, actionButtonIcon: {
    fontSize: 20,

    color: '#1E90FF',
  },


});