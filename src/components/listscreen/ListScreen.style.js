import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    borderRadius: 5,
  },

  todoContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  todoText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  todoCloseContainer: {
    width: 21,
    height: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 11,
  },
  closePng: {
    width: 19,
    height: 19,
  },
  emptyTextContainer: {
    height: Dimensions.get('window').height / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  emptyText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  pressedStyle: {
    backgroundColor: '#636e72',
    textDecorationLine: 'line-through',
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressedText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2d3436',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    textDecorationLine: 'line-through',
  },
});
