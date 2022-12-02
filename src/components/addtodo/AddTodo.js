import React, {useRef, useState} from 'react';
import {View, TextInput, Text, Pressable, Alert} from 'react-native';
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

const AddTodo = ({addNewTask}) => {
  const [textLen, setTextLen] = useState('');

  //#region Yeni bir görev ekledikten sonra TextInput temizlensin...
  const epmtyTextInput = useRef();
  const cleartTextInput = () => {
    epmtyTextInput.current.clear();
  };
  //#endregion

  //#region Her bir yeni görev için benzersiz ID oluşturulsun...
  const createID = () => {
    return new Date().getTime().toString();
  };
  //#endregion

  //#region Her bir yeni görev için farklı arka plan renkleri olsun...
  function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const getDifferentBackgroundColor = () => {
    let index = randomIndex(0, 33);
    return bgColors[index];
  };
  //#endregion

  const getTodoText = todoText => {
    setTextLen(todoText);
  };
  const handleSendNewTask = (id, title, bgColor, isPressed) => {
    if (textLen.length > 0) {
      id = createID();
      title = textLen;
      bgColor = getDifferentBackgroundColor();
      isPressed = false;
      addNewTask(id, title, bgColor, isPressed);
      setTextLen('');
      cleartTextInput();
    } else {
      Alert.alert('Uyarı!', 'Önce bir görev tanımlamalısınız!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Yapılacak..."
        placeholderTextColor="rgba(178, 190, 195,.6)"
        onChangeText={getTodoText}
        ref={epmtyTextInput}
      />
      <Pressable
        style={textLen.length > 0 ? styles.button : styles.buttonOutline}
        onPress={handleSendNewTask}>
        <Text
          style={
            textLen.length > 0 ? styles.buttonText : styles.buttonTextOutline
          }>
          Kaydet
        </Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;
