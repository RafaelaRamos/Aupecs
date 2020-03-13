import React from 'react';
import {Alert, View, Modal,TouchableOpacity, Text,FlatList, StyleSheet } from 'react-native';

const menuData = [
    { id: 0, name: '1',letra:'A',screenName: ' DetalhesResultados', data:'28-02-2020' },
    { id: 1, name: '2',letra:'A',screenName: ' DetalhesResultados',data:'26-02-2020' },
    { id: 2, name: '2',letra:'F',screenName: ' DetalhesResultados',data:'15-02-2020' },
    { id: 3, name: '1',letra:'G',screenName: ' DetalhesResultados',data:'14-02-2020' },
    { id: 4, name: '1',letra:'D',screenName: ' DetalhesResultados',data:'05-02-2020' },
    
   
  ];
  
   
  const  ListaItens = ({ navigation, name,screenName,letra , data  }) => (


    <TouchableOpacity
    style={styles.list}
    onPress={() => {Alert.alert('Detalhes','Acertos: 3 \n Erros: 4 \n Tempo: 40 minutos')}}
    
>
      <View style={styles.listItem}>
        
<Text style={styles.textS} >Nivel: {name}, letra: {letra},  data: {data}</Text>
     

    </View>
   
  </TouchableOpacity>


  );
  class Resultados extends React.Component{  

    constructor(){
        super();
        this.state={

            show:false
        }

    }
     render() {  
         return( 
             
            <View  style={{flex:1, backgroundColor: '#f3f3f3'}}>
            <FlatList
                          data={menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                              navigation={this.props.navigation}
                              screenName={item.screenName}
                              name={item.name}
                              letra={item.letra}
                              data={item.data}
                              key={item.key}
                              />
                            )}
                          />

                    <Modal transparent ={true} visible ={this.state.show} >


               
                    <View style={styles.modal}>

                    </View>
                    </Modal>
</View>
                    );
                }
              }
           


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

              });

 export default Resultados;