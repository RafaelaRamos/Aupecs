import { AsyncStorage} from 'react-native'
import { NavigationActions } from 'react-navigation'

export async function getUser() {
  try {
    return await AsyncStorage.getItem('@ListApp:userToken');
  } catch (e) {
    throw e;
  }
}

export async function getId() {
 var user =  await AsyncStorage.getItem('@ListApp:userToken');
 user = JSON.parse(user)

   return user.id
  }
  export async function getRoles() {
    var user =  await AsyncStorage.getItem('@ListApp:userToken');
    user = JSON.parse(user)
   
      return user.roles
     }

export async function storeUser(userToken) {
  try {
    return await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(userToken));
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem('@ListApp:userToken');

  } catch (e) {
    throw e;
  }
}


let navigator;

export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}