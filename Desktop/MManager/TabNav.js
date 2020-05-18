import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';import List from './Components/ListMeeting';
import Add from './Components/AddMeeting';
import Test from './Components/Test';







const Tab = createMaterialBottomTabNavigator();
export default class Nav extends React.Component {
  render() {
    return (
      
      <Tab.Navigator
      activeColor= "#00cc00"
      inactiveColor= "#fff"
      barStyle= {{ backgroundColor: '#009387' }}
    >
          
          <Tab.Screen  name="List Meetings" component={List} />
          <Tab.Screen name="Add Meeting" component={Add} />


        </Tab.Navigator>
      
    
  )
}
}


