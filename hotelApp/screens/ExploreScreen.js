import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HotelCard from '../components/HotelCard';

const hotels = [
  {
    id: '1',
    name: 'Luxury Resort & Spa',
    location: 'Bali, Indonesia',
    price: 299,
    rating: 4.8,
    image: 'hotel1',
  },
  {
    id: '2',
    name: 'City View Hotel',
    location: 'New York, USA',
    price: 199,
    rating: 4.5,
    image: 'hotel2',
  },
  {
    id: '3',
    name: 'Beachfront Paradise',
    location: 'Maldives',
    price: 499,
    rating: 4.9,
    image: 'hotel3',
  },
  {
    id: '4',
    name: 'Mountain Retreat',
    location: 'Swiss Alps',
    price: 179,
    rating: 4.6,
    image: 'hotel4',
  },
];

export default function ExploreScreen({ navigation }) {
  const renderHotel = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', { hotel: item })}>
      <HotelCard hotel={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Stay</Text>
      <FlatList
        data={hotels}
        renderItem={renderHotel}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});