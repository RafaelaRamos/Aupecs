import React, { useEffect } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { View, AsyncStorage, ActivityIndicator } from 'react-native'
import {getRoles} from '../utils'

export default function AuthLoadingScreen(props) {
  

  useEffect(() => {
    async function handleUserNextScreen() {
   const userToken = await AsyncStorage.getItem('@ListApp:userToken')
     
     
     if(userToken){
       let user = userToken
      user = JSON.parse(user)

        if( user.roles=='ADMIN'){
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'App' })],
          })
        
          props.navigation.dispatch(resetAction)
          }else if ( user.roles=='ALUNO')
          {
           const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Aluno' })],
            })
           
            props.navigation.dispatch(resetAction)
          
            
      }}else{
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
        })
        props.navigation.dispatch(resetAction)
       

      }
      
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null,
  };
};