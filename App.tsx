import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gates from './src/Gates';
import Menu from './src/components/menu'

const HamburgerMenu = () => {
  return (
    <Icon.Button
      name="menu"
      backgroundColor="#3b5998"
      onPress={() => alert('Hamburger menu pressed!')}
    >
    </Icon.Button>
  );
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Gates />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Star Seeker App 🚀"
          component={HomeScreen}
          options={{
            headerTitle: "Star Seeker App 🚀",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 0 }}
              >
                <Menu />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
