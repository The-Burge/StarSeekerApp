import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const JourneyCost = () => {
  const [distance, setDistance] = useState('');
  const [passengers, setPassengers] = useState('');
  const [parkingDays, setParkingDays] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiRequest = async () => {
    try {
      const LocalEnv = require('../../.env.local.json')
      const apiKey = LocalEnv.STARSEEKER_API_KEY;
      const journeyUrl = `https://hstc-api.testing.keyholding.com/transport/${distance}?passengers=${passengers}&parking=${parkingDays}`;
      const response = await fetch(journeyUrl, {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Journey Calculator</Text>

      <Text>Distance</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={(text) => setDistance(text)}
      />

      <Text>Number of Passengers:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={passengers}
        onChangeText={(text) => setPassengers(text)}
      />

      <Text>Number of Days of Parking:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={parkingDays}
        onChangeText={(text) => setParkingDays(text)}
      />

      <Button title="Submit" onPress={handleApiRequest} />

      {apiResponse && (
        <View style={styles.apiResponseContainer}>
          <Text>API Response:</Text>
          <Text>{JSON.stringify(apiResponse)}</Text>
        </View>
      )}
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
  },
  apiResponseContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default JourneyCost;
