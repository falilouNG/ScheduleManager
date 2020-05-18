import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View,} from "react-native";
import Nav from './TabNav';
import SplashScreen from './Components/splashscreen';
import SignInScreen from './Components/SignInScreen';



const Stack = createStackNavigator();




export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <StatusBar></StatusBar>
        <Stack.Navigator  initialRouteName="Loading"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#009387', 
            },
            headerTintColor: '#fff',
            
          }}>
          <Stack.Screen name=" " component={SplashScreen} />
          <Stack.Screen name="SIGN IN" component={SignInScreen} />
          <Stack.Screen name="Maréu App"  component={Nav} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
}




