import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Gates from './src/pages/Gates';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Journey from './src/pages/journey';
import HomeScreen from './src/pages/home';
import Routes from './src/pages/routes';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Gates" component={Gates} />
        <Drawer.Screen name="Journey calulator" component={Journey} />
        <Drawer.Screen name="Routes" component={Routes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
