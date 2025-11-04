import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ReviewItem from '../components/ReviewItem';

const reviews = [
  { id: '1', user: 'John Doe', rating: 5, comment: 'Amazing stay! Beautiful views.' },
  { id: '2', user: 'Jane Smith', rating: 4, comment: 'Great service and comfortable rooms.' },
];

export default function HotelDetailsScreen({ route, navigation }) {
  const { hotel } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text>Hotel Image</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.location}>{hotel.location}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{hotel.rating} ★</Text>
          <Text style={styles.price}>${hotel.price}/night</Text>
        </View>
        
        <Text style={styles.description}>
          This beautiful hotel offers stunning views, comfortable rooms, and excellent service. 
          Perfect for both business and leisure travelers.
        </Text>
        
        <View style={styles.amenities}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <Text>• Free WiFi</Text>
          <Text>• Swimming Pool</Text>
          <Text>• Spa</Text>
          <Text>• Restaurant</Text>
          <Text>• Fitness Center</Text>
        </View>
        
        <View style={styles.reviews}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </View>
        
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { hotel })}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rating: {
    fontSize: 18,
    color: '#FF9529',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  amenities: {
    marginBottom: 20,
  },
  reviews: {
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});