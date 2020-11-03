import React, { useState, useRef } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { AsyncStorage, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import {
    ButtonIcon,TextConfig, IconButton} from './style';




export default function Configuracoes(props) {

    return (
        <View>

            <ButtonIcon   onPress={() => props.navigation.navigate('ScreenB')}> 

                < IconButton name="user-circle" color="#1E90FF"  />
                <TextConfig> Informações pessoais</TextConfig>

            </ButtonIcon>
            <ButtonIcon   onPress={() => props.navigation.navigate('Senha')}>

            < IconButton  name="key"color="#1E90FF"/>
                <TextConfig> Trocar senha</TextConfig>

            </ButtonIcon>
            <ButtonIcon>

                < IconButton name="user-times" color="#1E90FF" />
                <TextConfig>Excluir conta </TextConfig>

                </ButtonIcon>


        </View>
       
    );








}

Configuracoes.navigationOptions = () => {
    return {
        title: 'Configurações',
        headerStyle: {
            backgroundColor: '#1E90FF',

        }, headerTintColor: 'white',


    }
}


Configuracoes.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    }).isRequired,
}