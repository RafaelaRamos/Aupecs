
 import React from 'react';
 import { View, Image,TouchableOpacity, Text,StyleSheet } from 'react-native'; 
 import ActionButton from 'react-native-action-button';    
 import Icon from 'react-native-vector-icons/MaterialIcons';
class Perfil extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title:'Informações pessoais',
      headerStyle: {
        backgroundColor: '#3CB371',
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
      ),
    });
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (

        <View style={{ flex: 1,backgroundColor: '#f3f3f3', }}>
         <View style={styles.modal}> 

           <View style={styles.rowview} > 
          <Text style={styles.textlabelt}>Nome completo:</Text>
           <Text style={styles.textlabel}>Maria Santos</Text>
           </View>

          <View style={styles.rowview}>
            <Text style={styles.textlabelt}>CPF:</Text> 
          <Text style={styles.textlabel}>555.555.555-54</Text>
          </View>
          <View style={styles.rowview}>
            <Text style={styles.textlabelt}>Telefone:</Text> 
          <Text style={styles.textlabel}>(83) 5555-5554</Text>
          </View>


          <View style={styles.rowview}>

          <Text style={styles.textlabelt}>Formação:</Text>

           <Text style={styles.textlabel}>Pedagoga</Text>
           </View>

           <View style={styles.rowview}>
          <Text style={styles.textlabelt}>Data de nascimento:</Text>
           <Text style={styles.textlabel}>08-03-1989</Text>
           </View>
           <View style={styles.rowview}>
          <Text style={styles.textlabelt}>Codigo:</Text>
           <Text style={styles.textlabel}>x57a</Text>
           </View>

           <View style={styles.rowview}>
          <Text style={styles.textlabelt}>Email: </Text>
           <Text style={styles.textlabel}>maria@gmail.com</Text>
           </View>

          

          </View>
          <ActionButton buttonColor="#3CB371">
        
        <ActionButton.Item buttonColor='#00BFFF' title="Editar informações" onPress={() => { this.setState({show:true})}}>
          <Icon name="create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
       
      </ActionButton>

        </View>
      );
    }
  }

  export default Perfil;

  const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 20,
      
    },
  
    listItem: {
      backgroundColor: '#3CB371',
      marginTop: 20,
      padding: 30,
      flexDirection:'column'
    },
    textS:{
        color:"#FFF",
        fontSize:16

    },
    textTitle:{
      textAlign: "center",
      height: 25, 
      width: 25,
     

  }, modal:{
    
  
    flexDirection:'column',
    marginTop: 2,
     margin:15,
     paddingVertical:80,
     paddingHorizontal:30,
  
},
rowview:{

  backgroundColor:'#f3f3f3',
   borderBottomWidth:1,
  borderColor:'#3CB371',
  alignContent :'space-between',
  justifyContent:'space-between',

  flexDirection: 'column',
 
        
  
},
actionButtonIcon: {
  fontSize: 20,
  height: 22,
  color: 'white',
},
textlabel:{
  fontSize:18,
  
  marginTop: 10,
  fontStyle:'normal',
  paddingHorizontal:5
  
  },
  textlabelt:{
      fontSize:18,
      fontWeight: 'bold',
      
      fontStyle:'normal',
      marginTop: 10,
      paddingHorizontal:5
      }

  });