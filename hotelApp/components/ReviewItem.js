import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReviewItem({ review }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.user}>{review.user}</Text>
        <Text style={styles.rating}>{review.rating} ★</Text>
      </View>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    color: '#FF9529',
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});