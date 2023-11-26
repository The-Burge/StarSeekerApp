import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, StatusBar } from 'react-native';

const gates = () => {
  const [data, setData] = useState([]);
  const LocalEnv = require('../../.env.local.json')
  const apiKey = LocalEnv.STARSEEKER_API_KEY;
  useEffect(() => {
    const apiUrl = 'https://hstc-api.testing.keyholding.com/gates';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }
        return response.json();
      })
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
            }, [apiKey]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Gate Name: {item.name}</Text>
            <Text style={styles.itemText}>Gate Code: {item.code}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10, 
    backgroundColor: '#3b5998', 
    color: '#fff',
    margin: 10, 
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    color: 'white',
  },
});

export default gates;

