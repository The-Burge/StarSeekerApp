import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Journey = () => {
  const [distance, setPassengerCount] = useState('');
  const [passengerCount, setBagCount] = useState('');
  const [parkingDays, setParkingDays] = useState('');

  return (
    <View style={styles.container}>
      <Text>Distance</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={(text) => setPassengerCount(text)}
      />

      <Text>Number of Passengers:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={passengerCount}
        onChangeText={(text) => setBagCount(text)}
      />

      <Text>Number of Days of Parking:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={parkingDays}
        onChangeText={(text) => setParkingDays(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
  },
});

export default Journey;
