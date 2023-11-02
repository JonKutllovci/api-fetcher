import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const BreedDetailScreen = ({ route }) => {
  const { breed } = route.params;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => {
        setImageUrl(response.data.message);
      })
      .catch(error => console.error(error));
  }, [breed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{breed}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default BreedDetailScreen;
