
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './Style';
class CustomComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.containerDrew}>
          <View style={styles.containertopRowD}>
            <Image
              style={styles.imageTopRowDraw}
              source={require('../assets/tea.jpg')}
            />
          </View>
          
          <View style={styles.containerBottomDraw}>

        
            <TouchableOpacity  style={styles.containerBottomItemDraw}
              onPress={() => navigate('ScreenA')}>
              <View style={styles.buttonDraw}>
                <Text  style={styles.TxtBottomDraw}>Discentes</Text>
              </View>
            </TouchableOpacity>
           

            <TouchableOpacity style={styles.containerBottomItemDraw}
              onPress={() => navigate('ScreenB')} >
              <View style={styles.buttonDraw}>
                <Text style={styles.TxtBottomDraw} >Informações pessoais</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity  style={styles.containerBottomItemDraw}
            onPress={() => this.props.navigation.navigate('Log')}>
              <View style={styles.buttonDraw}>
                <Text  style={styles.TxtBottomDraw}>Configurações</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.containerBottomItemDraw}
              onPress={() => navigate('ScreenB')}>
              <View style={styles.buttonDraw}>
                <Text style={styles.TxtBottomDraw} >Sair</Text>
              </View>
            </TouchableOpacity>
  
          </View>
        </View>
      );
    }
  }
  export default CustomComponent;