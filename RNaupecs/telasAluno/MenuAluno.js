import React from 'react';
       import { View, Image,ImageBackground,TouchableOpacity, Text,FlatList, StyleSheet } from 'react-native';  
       import Icon from "react-native-vector-icons/MaterialIcons";     

        
       const menuData = [
        { id: 0, name: 'Nivel 1',img: 'https://cdn.awsli.com.br/600x450/931/931187/produto/38252183/fundo-fotografico-baloes-92537c7a.jpg' },
        { id: 1, name: 'Nivel 2',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5fRFjkh-rGbLS4MXZ7aIvwyUn9EuN5jn1DDYURuYFPGrTVEtj' },
        { id: 2, name: 'Nivel 3',img: 'https://www.soescola.com/wp-content/uploads/2017/02/letras-alfabeto-ilustrado-imprimir-cartazes-640x307.png' },
        
        
       
      ];

   

              
      const  ListaItens = ({ navigation, name,img  }) => (


        <TouchableOpacity
        style={styles.list}
       
>
          <View style={styles.listItem}>
         < ImageBackground  source={{uri: img }} resizeMode={'stretch'} 
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
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>


  
                    <Icon name= "settings"  size={28} color="#fff"  style={{ marginRight:30, height: 25, width: 25 }} />

                  
                   
                    </TouchableOpacity>

                  ),
              
                  
                });

              
                
            
                
                render() {
                 
                    return (
                     <View style={{backgroundColor: '#f3f3f3'}}>
                      <FlatList
                          data={menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                              navigation={this.props.navigation}
                              img={item.img}
                              name={item.name}
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
                  paddingHorizontal: 30,
                },
              
                listItem: {
                  backgroundColor: '#1E90FF',
                  marginTop:40,
                 
                  width:350,
                  height:200,
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