import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        placeholderTextColor="rgba(178, 190, 195,.6)"
        style={styles.text}
      />
    </View>
  );
};

export default SearchBar;
