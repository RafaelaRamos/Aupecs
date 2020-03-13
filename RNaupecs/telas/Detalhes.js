
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
    backgroundColor:'#ffff',
  
   flexDirection:'column',
    marginTop:70,
    margin:15,
    paddingVertical:120,
    paddingHorizontal:30,
    borderRadius:10,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#3CB371',
    color:'#000000',
},
rowview:{

 
  
  flexDirection: 'column',
  alignContent :'space-between',
        
  
},
actionButtonIcon: {
  fontSize: 20,
  height: 22,
  color: 'white',
},
textlabel:{
fontSize:18,


fontStyle:'normal',

},
textlabelt:{
    fontSize:18,
    fontWeight: 'bold',
    
    fontStyle:'normal',
    
    }

  });