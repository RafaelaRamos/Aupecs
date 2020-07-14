
import React from 'react';
import { View,  TextInput, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './Style';


class Cadastro extends React.Component{

    constructor(props){
      super(props)
      this.state = {date:"09-02-2020"}
    }
    render() {
      return(
       <View  style={styles.containerForm}>
  
        <View >
            <Text > Nome completo:</Text>        
             <TextInput style={styles.inputcadS} placeholder="nome ">    </TextInput>
  
             </View >
  
  
             
             <View style={styles.rowteste}> 
  
             <View style={styles.viewCpf}>
  
  
             <Text >  CPF:</Text> 
             </View>
  
               
            
             <View style={styles.data }>
  
  
             <Text> Nascimento :</Text> 
             </View>
  
  
             </View>
             
             
  
             
            
         <View style={styles.viewrow} >
            <TextInput style={styles.inputcad } placeholder="cpf" >    </TextInput>
          
           
         <DatePicker
          style={{width: 120}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="1930-01-01"
          maxDate="2020-02-28"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
          dateIcon: {
         position: 'absolute',
          left: 0,
          
          marginLeft: 0
            },
            dateInput: {
              marginLeft: 32,
              marginTop: 15,
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}} />
        </View>
        
        
        <View>
           <Text >  Formação:</Text>     
             
            
            
             <TextInput  style={styles.inputcadS} placeholder="formação">    </TextInput>
             </View>
  
             <View>
                <Text >  Email:</Text>     
             
             <TextInput  style={styles.inputcadS} placeholder="email">    </TextInput>
             </View>
  
  
           < View style={styles.viewrow}>
  
            <View style={styles.testsenhaa} >
             <Text >  Senha:</Text>     
            </View>
  
  
            <View style={styles.testesen }>
             <Text>  Repetir senha:</Text>     
             </View>
             </ View>
             
             <View style={styles.viewrow}>
  
             <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="senha" >    </TextInput>
             <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="confirmar senha">    </TextInput>
  
           
             </View>
  
  
  
             <TouchableOpacity style={styles.botao}>
  
            <Text  style={styles.botaoText}> Enviar</Text>
  
          </TouchableOpacity>
    </View>
   
  );

                }}

                export default Cadastro;
             
  