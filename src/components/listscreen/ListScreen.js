import React from 'react';
import {FlatList, Text, View, Image, Pressable} from 'react-native';
import styles from './ListScreen.style';

const ListScreen = ({items, changeIspressed}) => {
  const handleCurrentTask = item => {
    changeIspressed(item);
  };

  const renderTodoItems = ({item}) =>
    item !== 'empty' ? (
      <Pressable onPress={() => handleCurrentTask(item)}>
        <View
          style={
            item.isPressed === false
              ? [styles.todoContainer, {backgroundColor: item.bgColor}]
              : styles.pressedStyle
          }>
          <Text
            style={
              item.isPressed === false ? styles.todoText : styles.pressedText
            }>
            {item.title}
          </Text>
          <View style={styles.todoCloseContainer}>
            <Image
              style={styles.closePng}
              source={
                item.isPressed === false
                  ? require('../../images/cancel.png')
                  : require('../../images/canceldark.png')
              }
            />
          </View>
        </View>
      </Pressable>
    ) : (
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>Henüz tanımlanmış bir görev yok!</Text>
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
