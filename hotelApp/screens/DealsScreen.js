import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HotelCard from '../components/HotelCard';

const deals = [
  {
    id: '1',
    name: 'Beachfront Paradise',
    location: 'Maldives',
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    image: 'deal1',
    discount: '20% OFF',
  },
  {
    id: '2',
    name: 'Mountain Retreat',
    location: 'Swiss Alps',
    price: 149,
    originalPrice: 179,
    rating: 4.6,
    image: 'deal2',
    discount: '15% OFF',
  },
  {
    id: '3',
    name: 'City View Special',
    location: 'New York, USA',
    price: 169,
    originalPrice: 199,
    rating: 4.5,
    image: 'deal3',
    discount: '15% OFF',
  },
];

export default function DealsScreen({ navigation }) {
  const renderDeal = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', { hotel: item })}>
      <HotelCard hotel={item} showDiscount={true} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special Deals</Text>
      <Text style={styles.subtitle}>Limited time offers just for you</Text>
      
      <FlatList
        data={deals}
        renderItem={renderDeal}
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
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});