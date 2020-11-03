import React, { useState, useRef } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { AsyncStorage, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteUser } from '../utils'

import PropTypes from 'prop-types';
import {
    ButtonIcon,TextConfig, IconButton} from './style';


import api from '../service/api'
import * as Yup from 'yup';
import ErrorMessage from '../telas/ErrorMessage'

import { Formik } from 'formik';




export default function ConfigAluno(props) {

    return (
        <View>

            <ButtonIcon   onPress={() => props.navigation.navigate('SenhaAluno')}> 

                < IconButton name="user-circle" color="#1E90FF"  />
                <TextConfig> Trocar Senha</TextConfig>

            </ButtonIcon>
            
            <ButtonIcon
            onPress={() => (
                deleteUser().then(() => {
                  props.navigation.navigate('AuthLoading')
                })
              )} 
            >

                < IconButton name="user-times" color="#1E90FF" />
                <TextConfig>Sair </TextConfig>

                </ButtonIcon>


        </View>
       
    );








}

ConfigAluno.navigationOptions = () => {
    return {
        title: 'Configurações',
        headerStyle: {
            backgroundColor: '#1E90FF',

        }, headerTintColor: 'white',


    }
}


ConfigAluno.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    }).isRequired,
}