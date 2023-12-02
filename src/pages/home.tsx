import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  const navigateToGates = () => {
    navigation.navigate('Gates' as never); // Replace 'Gates' with the actual name of your screen
  };

  const navigateToJourneyCost = () => {
    navigation.navigate('JourneyCost' as never); // Replace 'JourneyCost' with the actual name of your screen
  };

  const navigateToRoutes = () => {
    navigation.navigate('Routes' as never); // Replace 'Routes' with the actual name of your screen
  };

  return (
    <View>
      <Text>Welcome to the best app in the world</Text>
      <Button title="View gate information" onPress={navigateToGates} />
      <Button title="Journey Calculator" onPress={navigateToJourneyCost} />
      <Button title="Cheapest route" onPress={navigateToRoutes} />
    </View>
  );
}

export default HomeScreen;
