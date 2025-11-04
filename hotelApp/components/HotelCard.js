import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HotelCard({ hotel, showDiscount = false }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text>Hotel Image</Text>
        {showDiscount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{hotel.discount}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.details}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.location}>{hotel.location}</Text>
        
        <View style={styles.footer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{hotel.rating} ★</Text>
          </View>
          
          <View style={styles.priceContainer}>
            {hotel.originalPrice && (
              <Text style={styles.originalPrice}>${hotel.originalPrice}</Text>
            )}
            <Text style={styles.price}>${hotel.price}</Text>
            <Text style={styles.night}>/night</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagePlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: '#FF9529',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  night: {
    fontSize: 12,
    color: '#666',
  },
});