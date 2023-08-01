import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import Onboardscreen from './screens/onboardscreen';
import Item from './screens/Item';
import 'react-native-url-polyfill/auto';
import Itemscreen from './screens/Itemscreen';




const Stack =createNativeStackNavigator();


export default function App() {

  return (  
    
    
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Onboardscreen"  component={Onboardscreen}/>
  <Stack.Screen  name="Home" component={Homescreen}/>
  <Stack.Screen  name="Itemscreen" component={Itemscreen}/>
  <Stack.Screen  name="Items" component={Item}/>


    </Stack.Navigator>
    
  </NavigationContainer>
  
  );
}

