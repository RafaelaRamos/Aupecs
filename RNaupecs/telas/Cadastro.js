
import React from 'react';
import { View, TextInput,Image, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from '../Style';


class Cadastro extends React.Component{

    constructor(props){
      super(props)
      this.state = {date:"09-02-2020"}
    }
    render() {
      return(
       <View  style={styles.containerForm}>

         <View style={styles.containerCadastro} >

          <Image source={require('../assets/oficial.png')}
              style={{ width: 150, height: 150}} />
                  <Text style={styles.TitleLogin}> CADASTRO </Text>  
               
            

              <View style={styles.containerfm} > 
        <View >
            <Text  style={styles.testetitle}> Nome completo:</Text>        
             <TextInput style={styles.inputcadS} placeholder="nome ">    </TextInput>
  
             </View >
  
  
             
             <View style={styles.rowteste}> 
  
             <View style={styles.viewCpf}>
  
  
             <Text  style={styles.testetitle} >  CPF:</Text> 
             </View>
  
               
            
             <View style={styles.data }>
  
  
             <Text  style={styles.testetitle}> Nascimento :</Text> 
             </View>
  
  
             </View>
             
             
  
             
            
         <View style={styles.viewrow} >
            <TextInput style={styles.inputcpf } placeholder="cpf" >    </TextInput>
          
           
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
           <Text  style={styles.testetitle} >  Formação:</Text>     
             
            
            
             <TextInput  style={styles.inputcadS} placeholder="formação">    </TextInput>
             </View>
  
             <View>
                <Text  style={styles.testetitle} >  Email:</Text>     
             
             <TextInput  style={styles.inputcadS} placeholder="email">    </TextInput>
             </View>
  
  
           < View style={styles.viewrow}>
  
            <View style={styles.testsenhaa} >
             <Text  style={styles.testetitle} >  Senha:</Text>     
            </View>
  
  
            <View style={styles.testesen }>
             <Text  style={styles.testetitle}>  Repetir senha:</Text>     
             </View>
             </ View>
             
             <View style={styles.viewrow}>
  
             <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="senha" >    </TextInput>
             <TextInput style={styles.inputsenha} secureTextEntry={true} placeholder="confirmar senha">    </TextInput>
  
           
             </View>
  
  
  
             <TouchableOpacity style={styles.botao}>
  
            <Text  style={styles.botaoText}>Cadastre-se</Text>
  
          </TouchableOpacity>
          </View>
          </View>
         
    </View>
   
  );

                }}

export default Cadastro;
             
  