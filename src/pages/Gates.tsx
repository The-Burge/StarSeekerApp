import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  // ActivityIndicator,
  StatusBar,
  RefreshControl,
  Image,
} from 'react-native';

interface Gate {
  uuid: string;
  code: string;
  createdAt: string;
  links: string;
  name: string;
  updatedAt: string;
}

const Gates = () => {
  const [data, setData] = useState<Gate[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const LocalEnv = require('../../.env.local.json');
  const apiKey = LocalEnv.STARSEEKER_API_KEY;

  const fetchData = useCallback(() => {
    const apiUrl = 'https://hstc-api.testing.keyholding.com/gates';

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
        setLoading(false);
        setData(responseJson);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, [apiKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
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
      {loading 
      // && (
      //   // <Image
      //   //   source={require('./images/RocketLoading.gif')}
      //   //   style={styles.loadingImage}
      //   // />
      // )
      }
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
  loadingImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default Gates;
