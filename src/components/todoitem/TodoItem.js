import React from 'react';
import {Text, View} from 'react-native';
import styles from './TodoItem.style';

const TodoItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Henüz bir görev tanımlamadınız!</Text>
      </View>
    </View>
  );
};

export default TodoItem;
