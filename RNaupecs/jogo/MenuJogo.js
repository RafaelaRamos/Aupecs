
import React, { useState, useRef } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { View, StyleSheet, FlatList, Text, Form, TouchableOpacity, Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';


import PropTypes from 'prop-types'




export default function ListaGrade({ data, navigation, fase }) {
   let letra = data.letra;
  if (data.empty) {
    return <View style={[styles.item, styles.itemEmpty]} />;
  }
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(fase, { letra })} >
    <Text style={styles.text}>{data.letra}</Text>
    </TouchableOpacity>

  );





}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#1E90FF",
    flexBasis: 0,
    flexGrow: 1,
    margin: 2,
    padding: 10
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    color: "#f3f3f3",
    fontWeight: 'bold',
    fontSize: 60
  }
});
ListaGrade.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}