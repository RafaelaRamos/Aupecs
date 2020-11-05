
import React, { PureComponent } from 'react';

import { View, StyleSheet, Form, TouchableOpacity, Image, TextInput, Modal, Alert, ScrollView, useWindowDimensions, ImageBackground } from 'react-native';
import { randOrd, getCor, getArrayLetras } from './GameLoop'
import { Container, Text, TextTitle, ViewJogo, Botton } from '../Styles'
import { array } from 'prop-types';
import api from '../../service/api';
import { getSom } from './DataSom';
import { getId } from '../../utils';
import Sound from 'react-native-sound';

const RADIUS = 20;

class NivelUm extends PureComponent {


  constructor(props) {

    super(props);
    this.state = {

      y: 450,
      letra: "B",
      fim: 1,
      limite: 2,
      erros: 0,
      sound: '',
      cor: ' ',
      initialArr: [],
      status: '',
      appSounds: ''

    };
  }

  static navigationOptions = {
    header: null
  };




  handleSubmit = async () => {
    var id = await getId()

    try {

      const relatorio = {

        idAluno: id,
        letra: this.props.navigation.state.params.letra,
        nivel: '1',
        erro: this.state.erros,
        status: 'CONCLUIDA'
      }

      console.log(relatorio)
      const response = await api.post('/relatorio', relatorio)

      console.log(response)
      this.props.navigation.navigate('Fim')

    } catch {
      console.log('Erro')


    }

  }

  somLetra = () => {

    this.state.appSounds.play()
  }
  move = (letra) => {

    if (letra == this.state.letra) {

      let interval = setInterval(() => {
        this.setState({
          y: this.state.y - 30

        });
        this.state.appSounds.play()

        if (this.state.y == 0) {
          clearInterval(interval);
          this.gameLoop()
        }
      }, 10);
    }
    else {
      this.setState({
        erros: this.state.erros + 1

      });


    }

  }




  componentDidMount() {
    let som = getSom(this.props.navigation.state.params.letra)
    let appSounds = new Sound(som, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
      }
    });

    this.setState({
      cor: getCor(),
      letra: this.props.navigation.state.params.letra,
      initialArr: this.getArray(this.state.letra),
      appSounds: appSounds
    });
  }




  gameLoop = () => {


    if (this.state.fim < 10) {
      var corUp = getCor()
      this.setState({
        y: 450,
        cor: corUp,
        fim: this.state.fim + 1,
        limite: this.state.limite + 1,
        initialArr: this.getArray()

      });
    }
    if (this.state.limite > 4) {
      this.setState({

        limite: 4

      });

    }
    if (this.state.fim >= 10) {

      this.handleSubmit()

    }
  }






  getArray = () => {
    var array = getArrayLetras(this.props.navigation.state.params.letra, this.state.limite)
    array.push({ id: array.length, letra: this.props.navigation.state.params.letra, desabilitado: false })
    return array.sort(randOrd)

  }


  render() {

    return (


      <View style={{ flex: 1 }} >
        <ImageBackground source={require("../../assets/fundo/teste.png")} resizeMode={'stretch'}
          style={{ flex: 1 }}>
          <ViewJogo>

            <TouchableOpacity>
              <TextTitle style={{ color: this.state.cor }} >{this.state.letra}</TextTitle>
            </TouchableOpacity>
          </ViewJogo>

          <View style={styles.row}>

            {this.state.initialArr.map((item) => {

              return (

                <Botton style={(item.desabilitado) ? { top: item.y } : { top: this.state.y }}
                  underlayColor={item.desabilitado ? "#ffffff00" : this.state.cor} onPress={() => { this.move(item.letra) }} >
                  <View >
                    <ImageBackground source={require('../../assets/rocket.png')}
                      style={{
                        resizeMode: 'cover',
                        height: 300,
                        width: 300,
                        justifyContent: "center"
                      }}>
                      <View style={styles.player} backgroundColor={this.state.cor} >


                        <Text>{item.letra}</Text>

                      </View>
                    </ImageBackground>
                  </View>
                </Botton>

              );
            })}

          </View>


        </ImageBackground>

      </View>




    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  player: {
    left: 130,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "center",


  }
});


export default NivelUm;