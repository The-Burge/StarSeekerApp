import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const apiKey = '94962B9A-966C-43FC-8E1A-145DEAA5970C';
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
          throw new Error('Network response was not ok');
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
    <View>
      <Text >Gate Results:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Gate Name: {item.name}</Text>
            <Text>Gate Code: {item.code}</Text>
            {/* Add more properties here as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default YourComponent;
