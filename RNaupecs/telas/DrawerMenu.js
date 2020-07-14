import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const menuData = [
  { icon:"school",
  name: "Discentes", screenName: "ScreenA", key: 1 },
  { icon: "person", name: "Informações pessoais", screenName: "ScreenB", key: 2 },
  
  {
    icon: "settings" ,
    name: "Configurações",
    screenName: "Log",
    key: 3
  },
  {
    icon: "cancel",
    name: "Sair",
    screenName: "Log",
    key: 4
  },
];

class DrawerMenu extends React.Component {
   
  render() {
    return (
      <View style={styles.container}>


  <View style={styles.ContainerImg}>
    <Image
      style={styles.imageTopRowDraw}
      source={require('../assets/oficial.png')}
    />
  </View>
        
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
    );
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    <Icon name={icon} size={25} color="#fff" style={{ margin: 15 }} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    paddingTop: 70,
   
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 16,
    margin: 15,
    fontWeight:'bold'
  },
  menuItem: {
    flexDirection: "row"
  },
  ContainerImg:{
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center'

  }
  ,
  menuItemText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
    color: '#fff',
  }, 
  
  imageTopRowDraw: {
    height: 150,
    width: 160,
  
    
  },
});

export default DrawerMenu;