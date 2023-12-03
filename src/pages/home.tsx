import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Starfield from '../assets/starfield';

interface HomeScreenProps {
  // Define any props specific to HomeScreen if needed
}

const BackgroundImage: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  const navigateToGates = () => {
    navigation.navigate('Gates' as never);
  };

  const navigateToJourneyCost = () => {
    navigation.navigate('Journey calulator' as never);
  };

  const navigateToRoutes = () => {
    navigation.navigate('Routes' as never);
  };

  return (
    <View style={styles.container}>
      <Starfield />
      <View style={styles.overlay}>
        <Text style={styles.title}> Welcome to the best app in the world</Text>

        <TouchableOpacity
          onPress={navigateToGates}
          style={styles.buttonContainer}>
          <Image
            source={require('./images/gates.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>View gate information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigateToJourneyCost}
          style={styles.buttonContainer}>
          <Image
            source={require('./images/route.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Journey Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigateToRoutes}
          style={styles.buttonContainer}>
          <Image
            source={require('./images/space.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Cheapest route</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default BackgroundImage;
