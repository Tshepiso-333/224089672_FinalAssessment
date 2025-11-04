import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function BookingScreen({ route, navigation }) {
  const { hotel } = route.params;
  const [checkInDate, setCheckInDate] = useState('2024-01-15');
  const [checkOutDate, setCheckOutDate] = useState('2024-01-20');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleBooking = () => {
    Alert.alert(
      'Booking Confirmed',
      `Your booking at ${hotel.name} has been confirmed!`,
      [{ text: 'OK', onPress: () => navigation.navigate('Main') }]
    );
  };

  const totalNights = 5; // This would be calculated from dates
  const totalPrice = hotel.price * totalNights * rooms;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Complete Your Booking</Text>
      
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelLocation}>{hotel.location}</Text>
        <Text style={styles.hotelPrice}>${hotel.price}/night</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dates</Text>
        <View style={styles.dateContainer}>
          <View style={styles.dateField}>
            <Text style={styles.dateLabel}>Check-in</Text>
            <Text style={styles.dateValue}>{checkInDate}</Text>
          </View>
          <View style={styles.dateField}>
            <Text style={styles.dateLabel}>Check-out</Text>
            <Text style={styles.dateValue}>{checkOutDate}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Guests & Rooms</Text>
        <View style={styles.guestsContainer}>
          <View style={styles.counter}>
            <Text>Guests: {guests}</Text>
          </View>
          <View style={styles.counter}>
            <Text>Rooms: {rooms}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Price Summary</Text>
        <View style={styles.priceRow}>
          <Text>${hotel.price} x {totalNights} nights x {rooms} rooms</Text>
          <Text>${hotel.price * totalNights * rooms}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Service fee</Text>
          <Text>$30</Text>
        </View>
        <View style={[styles.priceRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${totalPrice + 30}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  hotelInfo: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hotelLocation: {
    color: '#666',
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateField: {
    flex: 1,
    marginRight: 10,
  },
  dateLabel: {
    color: '#666',
    marginBottom: 5,
  },
  dateValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  guestsContainer: {
    flexDirection: 'row',
  },
  counter: {
    flex: 1,
    marginRight: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});