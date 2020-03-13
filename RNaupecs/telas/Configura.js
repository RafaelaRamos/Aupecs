import React from 'react';
import {View,Text,Modal,StyleSheet,TouchableOpacity} from 'react-native';  
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';



 class Configura extends React.Component{  

    constructor(){
        super();
        this.state={

            show:false
        }

    }
    
    render(){  
        return(  



            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

                <Modal transparent ={true} visible ={this.state.show} >


               
            <View style={styles.modal}>
            <Text> Selecione o nivel </Text>

            <RNPickerSelect 
               onValueChange={(value) => console.log(value)}

           
            items={[
                { label: 'Nivel 1', value: '1' },
                { label: 'Nivel 2', value: '2' },
                { label: 'Nivel 3', value: '3' },
            ]}


        />
          <Text>Selecione a letra </Text>
           <RNPickerSelect style={{padding:50,}}
            onValueChange={(value) => console.log(value)}
           items={[
               { label: 'A', value: 'A' },
               { label: 'B', value: 'B' },
               { label: 'C', value: 'C' },
               { label: 'D', value: 'D' },
               { label: 'E', value: 'E' },
               { label: 'F', value: 'F' },
               { label: 'G', value: 'G' },
              
           ]}
       />
       
       
          
    

              
                <TouchableOpacity style={styles.botao} onPress={() => { this.setState({show:false})}}>
  
  <Text  style={styles.botaoText}> Enviar</Text>

</TouchableOpacity>
                </View>
              

                </Modal>

        <ActionButton buttonColor="#3CB371">
        
          <ActionButton.Item buttonColor='#3CB371' title="Nova atividade" onPress={() => { this.setState({show:true})}}>
            <Icon name="create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
         
        </ActionButton>



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

    viewNivel:{
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3CB371',
        fontSize: 16,
        fontWeight: 'bold',
       


    },

    viewLetra:{
        fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,

        borderColor: '#3CB371',
    },
    modal:{
        backgroundColor:'#ffff',
        alignItems: 'center',
       justifyContent:'center',
       flexDirection:'column',
        marginTop:275,
        margin:50, 
        padding:30,
        paddingVertical:20,
        paddingHorizontal:10,
        borderRadius:10,
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3CB371',
        color:'#000000',
    },
    
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    },
    botao: {
        width: 150,
        height: 42,
        backgroundColor: '#3CB371',
        marginTop: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'



    },
    select:
    {fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3CB371',},
  });

  export default Configura;