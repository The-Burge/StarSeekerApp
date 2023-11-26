import * as React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gates from './src/Gates';
import { createDrawerNavigator } from '@react-navigation/drawer';  

const Drawer = createDrawerNavigator(); 
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Gates />
    </View>
  );
}

function Journey() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Journey Calculator</Text>
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
