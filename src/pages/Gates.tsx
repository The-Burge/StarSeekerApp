import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  RefreshControl,
} from 'react-native';

const Gates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const LocalEnv = require('../../.env.local.json');
  const apiKey = LocalEnv.STARSEEKER_API_KEY;

  const fetchData = useCallback(() => {
    const apiUrl = 'https://hstc-api.testing.keyholding.com/gates';

    // Start loading
    setLoading(true);

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }
        return response.json();
      })
      .then(responseJson => {
        // Stop loading when data is received
        setLoading(false);
        setData(responseJson);
      })
      .catch(error => {
        console.error('Error:', error);
        // Stop loading on error
        setLoading(false);
      })
      .finally(() => {
        // Stop refreshing
        setRefreshing(false);
      });
  }, [apiKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
    // Start refreshing
    setRefreshing(true);
    // Fetch data again
    fetchData();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Gate Name: {item.name}</Text>
            <Text style={styles.itemText}>Gate Code: {item.code}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      {loading && <ActivityIndicator size="large" color="#3b5998" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Gates;
