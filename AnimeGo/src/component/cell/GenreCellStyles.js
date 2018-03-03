import { StyleSheet } from 'react-native';
import { SecondaryColour } from '../../value';

export const styles = StyleSheet.create({
  viewStyle: {
    margin: 4, 
    padding: 4,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: SecondaryColour
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})