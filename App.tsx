import * as React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Gates from './src/assets/Gates';
import { createDrawerNavigator } from '@react-navigation/drawer';  
import Journey from './src/pages/journey';
import Home from './src/pages/home';

const Drawer = createDrawerNavigator(); 

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Gates />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Journey calulator" component={Journey} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
