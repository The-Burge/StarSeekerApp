import * as React from 'react';
import {Text, View, Button} from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>Welcome the best app in the world</Text>
      <Button title="View gate information" />
      <Button title="Journey Calculator" />
      <Button title="Cheapest route" />
    </View>
  );
}

export default HomeScreen;
