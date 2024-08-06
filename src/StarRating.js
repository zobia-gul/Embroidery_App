import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Round to nearest half

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={24}
          color="#FFD700" // Gold color for stars
        />
      );
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(
        <Ionicons
          key={i}
          name="star-half"
          size={24}
          color="#FFD700" // Gold color for stars
        />
      );
    } else {
      stars.push(
        <Ionicons
          key={i}
          name="star-outline"
          size={24}
          color="#FFD700" // Gold color for stars
        />
      );
    }
  }

  return <View style={styles.starContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default StarRating;
