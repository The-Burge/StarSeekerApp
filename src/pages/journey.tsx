import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

const JourneyCost = () => {
  const [distance, setDistance] = useState('');
  const [passengers, setPassengers] = useState('');
  const [parkingDays, setParkingDays] = useState('');
  const [JourneyResponse, setJourneyResponse] = useState(null);

  const handleApiRequest = async () => {
    try {
      const LocalEnv = require('../../.env.local.json');
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
      setJourneyResponse(data);
      setDistance('');
      setPassengers('');
      setParkingDays('');
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
        placeholder="Enter the distance"
        value={distance}
        onChangeText={text => setDistance(text)}
      />

      <Text>Number of Passengers:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Num passengers"
        value={passengers}
        onChangeText={text => setPassengers(text)}
      />

      <Text>Number of Days of Parking:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Days parking"
        value={parkingDays}
        onChangeText={text => setParkingDays(text)}
      />

      <Button color="#3b5998" title="Submit" onPress={handleApiRequest} />

      {JourneyResponse && (
        <View style={styles.JourneyResponseContainer}>
          <Text>Recommended Transport</Text>
          <Text>Name: {JourneyResponse.recommendedTransport.name}</Text>
          <Text>Capacity: {JourneyResponse.recommendedTransport.capacity}</Text>
          <Text>
            Rate per AU : {JourneyResponse.recommendedTransport.ratePerA}
          </Text>
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
  JourneyResponseContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default JourneyCost;
