import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import styles from './ListScreen.style';

const ListScreen = ({items}) => {
  const renderTodoItems = ({item}) =>
    item !== 'empty' ? (
      <View style={[styles.todoContainer, {backgroundColor: item.bgColor}]}>
        <Text style={styles.todoText}>{item.title}</Text>
        <View style={styles.todoCloseContainer}>
          <Image
            style={styles.closePng}
            source={require('../../images/cancel.png')}
          />
        </View>
      </View>
    ) : (
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>Hiç bir tanımlanmış görev yok!</Text>
      </View>
    );

  const renderKeys = item => (item !== 'empty' ? item.id : 0);

  return (
    <FlatList
      keyExtractor={renderKeys}
      style={styles.container}
      data={items.length > 0 ? items : ['empty']}
      renderItem={renderTodoItems}
    />
  );
};

export default ListScreen;
