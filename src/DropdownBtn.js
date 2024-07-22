import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { black } from './Constants'; // Import black from Constants.js

const DropdownBtn = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={[styles.dropdownButtonText, { color: selectedOption === 'Gender' ? 'grey' : black }]}>
          {selectedOption}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.dropdownMenuItem}
            onPress={() => handleOptionClick('Male')}
          >
            <Text style={styles.dropdownMenuItemText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownMenuItem}
            onPress={() => handleOptionClick('Female')}
          >
            <Text style={styles.dropdownMenuItemText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownMenuItem}
            onPress={() => handleOptionClick('Prefer not to say')}
          >
            <Text style={styles.dropdownMenuItemText}>Prefer not to say</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },
  dropdownButton: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(220,220,220)', // Updated background color
    borderRadius: 30,
    alignItems: 'flex-start', // Aligns text to the left
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdownMenu: {
    width: '100%',
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  dropdownMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownMenuItemText: {
    fontSize: 16,
    color: black, // Updated text color from Constants.js
  },
});

export default DropdownBtn;
