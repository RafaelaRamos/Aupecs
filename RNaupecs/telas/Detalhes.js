
 import React from 'react';
 import { View,Text,StyleSheet } from 'react-native';     

 



 
class Detalhes extends React.Component{  
    render(){  
        return(  
            <View  style={{ flex: 1,backgroundColor: '#f3f3f3' }}>  
                <View style={styles.modal}> 

<View style={styles.rowview} > 
<Text style={styles.textlabelt}>Nome do discente:</Text>
<Text style={styles.textlabel}>Jose Silva</Text>
</View>

<View style={styles.rowview}>
 <Text style={styles.textlabelt}>Responsável:</Text> 
<Text style={styles.textlabel}>Maria Silva</Text>
</View>


<View style={styles.rowview}>

<Text style={styles.textlabelt}>Data de Nascimento:</Text>

<Text style={styles.textlabel}>01-10-2015</Text>

</View>
<View style={styles.rowview}>

<Text style={styles.textlabelt}>Nivel escolar:</Text>

<Text style={styles.textlabel}>pré I</Text>
</View>
<View style={styles.rowview}>

<Text style={styles.textlabelt}>Telefone do Responsável:</Text>

<Text style={styles.textlabel}>(83)9999-9999</Text>
</View>
<View style={styles.rowview}>

<Text style={styles.textlabelt}>Objetivos :</Text>

<Text style={styles.textlabel}>Desenvolver oralidade e comunicação </Text>
</View>





</View>

</View>    
        )  
    }  
}  

export default Detalhes;

const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 20,
      
    },
  
    listItem: {
      backgroundColor: '#3CB371',
      marginTop: 10,
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
  paddingHorizontal:5,
  paddingVertical: 5
    
    }

  });