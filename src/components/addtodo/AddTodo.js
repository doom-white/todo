import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './AddTodo.style';

const bgColors = [
  '#2980b9',
  '#e74c3c',
  '#d35400',
  '#16a085',
  '#ff7675',
  '#6c5ce7',
  '#6ab04c',
  '#130f40',
  '#22a6b3',
  '#eb4d4b',
  '#487eb0',
  '#e84118',
  '#8c7ae6',
  '#e1b12c',
  '#4cd137',
  '#40739e',
  '#353b48',
  '#747d8c',
  '#833471',
  '#9980FA',
  '#009432',
  '#EA2027',
  '#574b90',
  '#f78fb3',
  '#ED4C67',
  '#546de5',
  '#f19066',
  '#6F1E51',
  '#3c40c6',
  '#ff3838',
  '#32ff7e',
  '#c56cf0',
  '#c44569',
  '#05c46b',
];

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Yapılacak..."
        placeholderTextColor="rgba(178, 190, 195,.6)"
      />
      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonTextOutline}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
