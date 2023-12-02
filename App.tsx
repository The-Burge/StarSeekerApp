import * as React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Gates from './src/pages/Gates';
import { createDrawerNavigator } from '@react-navigation/drawer';  
import Journey from './src/pages/journey';
import HomeScreen from './src/pages/home';


const Drawer = createDrawerNavigator(); 

function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Gates" component={Gates} />
      <Drawer.Screen name="Journey calulator" component={Journey} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
