import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, Alert} from 'react-native';
import SearchBar from './src/components/searchbar';
import AddTodo from './src/components/addtodo';
import ListScreen from './src/components/listscreen';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskListDB, setTaskListDB] = useState([]);

  useEffect(() => {
    Alert.alert('Uyarı', 'Henüz tamamlanmadı,eksiklikleri var!!!');
  }, []);

  //#region Ekrana sadece tamamlanmamış görevler gelsin...
  useEffect(() => {
    setTaskListDB(todoList.filter(todo => todo.isPressed === false));
  }, [todoList]);
  //#endregion

  //#region Yeni görev ekleme...
  const addNewTask = (id, title, bgColor, isPressed) => {
    setTodoList([...todoList, {id, title, bgColor, isPressed}]);
  };
  //#endregion

  // Bu kısım arızalı....???
  const changeIspressed = item => {
    const filteredTaskList = todoList.filter(todo => {
      if (todo.id === item.id) {
        todo.isPressed = true;
      }
      return todo.isPressed;
    });
    setTodoList(filteredTaskList);
    console.log(filteredTaskList);
  };

  //#region Görev arama işlemi...
  const searchTasks = title => {
    const filteredList = todoList.filter(todo => {
      const searchedText = title.toLowerCase();
      const currentText = todo.title.toLowerCase();
      return currentText.indexOf(searchedText) > -1;
    });
    setTaskListDB(filteredList);
  };
  //#endregion

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.image}
            source={require('./src/images/list.png')}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.header}>Yapılacaklar Listesi</Text>
            <Text style={styles.counter}>{taskListDB.length}</Text>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar searchTasks={searchTasks} />
        </View>
      </View>

      <View style={styles.listContainer}>
        {/* FlatList'e gider...  */}
        <ListScreen items={taskListDB} changeIspressed={changeIspressed} />
      </View>

      <View style={styles.footerContainer}>
        <AddTodo addNewTask={addNewTask} />
      </View>
    </SafeAreaView>
  );
};

//#region  App sayfası sitilleri...
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(44, 44, 84,1.0)',
    flex: 1,
  },
  mainHeaderContainer: {
    backgroundColor: 'rgba(207, 106, 135,1.0)',
    alignItems: 'center',
    marginHorizontal: 7,
    marginVertical: 7,
    borderRadius: 5,
    flex: 1,
    zIndex: 9,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  searchBarContainer: {
    width: '100%',
    borderRadius: 5,
  },
  listContainer: {
    backgroundColor: 'rgba(207, 106, 135,.2)',
    marginHorizontal: 7,
    marginVertical: 7,
    borderRadius: 5,
    flex: 3,
  },
  footerContainer: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  image: {
    width: 48,
    height: 48,
  },

  header: {
    color: 'rgba(44, 44, 84,1.0)',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
  },
  counter: {
    color: 'rgba(44, 44, 84,1.0)',
    fontSize: 45,
    fontWeight: 'bold',
  },
});
//#endregion

export default App;
