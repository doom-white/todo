import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(207, 106, 135,1.0)',
    padding: 11,
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 7,
    paddingLeft: 11,
    backgroundColor: 'rgba(44, 44, 84,.7)',
    color: '#fff',
    borderBottomWidth: 5,
    borderBottomColor: 'rgba(44, 44, 84,1.0)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'rgba(44, 44, 84,1.0)',
    borderWidth: 3,
    borderColor: 'rgba(44, 44, 84,1.0)',
    padding: 11,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(207, 106, 135,1.0)',
    fontSize: 19,
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderWidth: 3,
    borderColor: 'rgba(44, 44, 84,1.0)',
    padding: 11,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextOutline: {
    color: 'rgba(44, 44, 84,1.0)',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
