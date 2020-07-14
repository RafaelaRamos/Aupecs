
       import React from 'react';
       import { View, Image,TouchableOpacity, Text,FlatList, StyleSheet } from 'react-native';       

        

              
       const menuData = [
        { id: 0, name: 'Pedro Silva',screenName: ' TabScreen' },
        { id: 1, name: 'Maria dos Santos',screenName: ' TabScreen' },
        { id: 2, name: 'Eduarda Pereira',screenName: 'TabScreen' },
        { id: 3, name: 'Jose Silva' ,screenName: 'TabScreen'},
        { id: 4, name: 'Camila Maria' ,screenName: 'TabScreen'},
        { id: 5, name: 'Rafaela Ramos' ,screenName: 'TabScreen'},
        { id: 6, name: 'Joao Luiz ' ,screenName: 'TabScreen'},
        
       
      ];

   

              
      const  ListaItens = ({ navigation, name,screenName  }) => (


        <TouchableOpacity
        style={styles.list}
        onPress={() =>
          navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
        }
>
          <View style={styles.listItem}>
          <Text style={styles.textS} >{name}</Text>
        </View>
       
      </TouchableOpacity>


      
      );
    
              class Discentes extends React.Component {
                static navigationOptions = ({ navigation }) => ({
                  title:'Lista de Discentes',
                  headerStyle: {
                    backgroundColor: '#1E90FF'
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
                  )
                });

              
                
            
                
                render() {
                 
                    return (
                     <View style={{backgroundColor: '#f3f3f3'}}>
                      <FlatList
                          data={menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                              navigation={this.props.navigation}
                              screenName={item.screenName}
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
                  paddingHorizontal: 20,
                },
              
                listItem: {
                  backgroundColor: '#1E90FF',
                  marginTop: 20,
                  padding: 30,
                },
                textS:{
                    color:"#FFF",
                    fontSize:16,
                    fontWeight:'bold'

                },
                textTitle:{
                  textAlign: "center",
                  height: 25, 
                  width: 25,
                 

              }

              });

              export default Discentes;