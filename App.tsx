import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gates from './src/Gates';
import { Draw } from '@mui/icons-material';
import Stack from './src/components/stack';

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
      <Stack.Navigator>
        <Stack.Screen
          name="Star Seeker App"
          component={HomeScreen}
          options={{
            headerTitle: "Star Seeker App 🚀",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 0 }}>
                <Stack />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
