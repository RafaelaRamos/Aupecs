import React from 'react';
       import { View, Image,ImageBackground,TouchableOpacity, Text,FlatList, StyleSheet } from 'react-native';  
       import Icon from "react-native-vector-icons/MaterialIcons";     

        
       const menuData = [
        { id: 0, name: 'FOGUETES DE LETRAS',img: require("../assets/teste.png"),screen:"StartNivelUm" },
        { id: 1, name: 'FORMAR PALAVRAS',img: require("../assets/teste2.png"),screen:"StartNivelDois" },
        { id: 2, name: 'TECLADOS DE LETRAS',img:require("../assets/teste3.png"),screen:"StartNivelTres" },
        
        
       
      ];

   

              
      const  ListaItens = ({ navigation, name,img,screen  }) => (


        <TouchableOpacity
        style={styles.list}   onPress={() => navigation.navigate(screen)}
       
>
          <View style={styles.listItem}>
         < ImageBackground  source={img } resizeMode={'cover'} 
          style={{flex: 1}}>   
       

            <View style={styles.div}>

          <Text style={styles.textS} >{name}</Text>

          </View>
          </ImageBackground>
        </View>
       
      </TouchableOpacity>


      
      );
    
              class MenuAluno extends React.Component {


                
                static navigationOptions = ({ navigation }) => ({
                  headerTitleStyle: { alignItems: 'center',marginLeft:80 },
                  title: 'AUPECS JOGO',
                  headerStyle: {
                    backgroundColor: '#1E90FF'
                  },
                  headerTintColor: 'white',
                  headerRight:(
                    <TouchableOpacity onPress={() => navigation.navigate('ConfigAluno')}>


  
                    <Icon name= "settings"  size={28} color="#fff"  style={{ marginRight:30, height: 25, width: 25 }} />

                  
                   
                    </TouchableOpacity>

                  ),
              
                  
                });

              
                
            
                
                render() {
                 
                    return (
                     <View style={{backgroundColor: '#87CEEB',flex:1}}>
                      <FlatList
                          data={menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                              navigation={this.props.navigation}
                              img={item.img}
                              name={item.name}
                              screen={item.screen}
                              key={item.key}
                              />
                            )}
                          />
                          </View>
                    );
                }
              }
           


              const styles = StyleSheet.create({
                list: {
                  paddingHorizontal: 40,
                },
              
                listItem: {
                  backgroundColor: '#1E90FF',
                  marginTop:40,
                  flex:1,
                  borderRadius:10,
                  borderEndWidth: 4,
                  borderLeftWidth: 4,
                  borderRightWidth:4 ,
                  borderBottomWidth: 4,
                  borderColor:'#1E90FF',
                  borderTopWidth:4
                 
                },
                textS:{
                  color:'#FFF',
                    fontSize:16,
                    fontWeight:'bold',
                    

                  
                }
                              ,
                  backgroundImage:{
                  width:320,
                  height:480,
                },

                div:{

                  backgroundColor:'#1E90FF',
                  width:200,
                  height:35,
                  marginTop:160,
                  borderEndWidth: 4,
               
                  borderRightWidth:4 ,
                
                  borderColor:'#FFF',
                  borderTopWidth:4,
                  alignItems:'stretch',
                 
                  padding: 10,

                },
                textTitle:{
                  textAlign: "center",
                  height: 25, 
                  width: 25,


                 

              }

              });

              export default MenuAluno;