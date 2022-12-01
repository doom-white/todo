import React from 'react';
import {FlatList} from 'react-native';
import styles from './ListScreen.style';
import TodoItem from '../todoitem';

const ListScreen = () => {
  return (
    <FlatList style={styles.container}>
      <TodoItem />
    </FlatList>
  );
};

export default ListScreen;
