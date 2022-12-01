import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  listItem: {
    color: '#fff',
    fontSize: 19,
    marginVertical: 3,
    borderRadius: 5,
    padding: 9,
  },
  emptyContainer: {
    height: Dimensions.get('window').height / 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 19,
    color: '#fff',
  },
});
