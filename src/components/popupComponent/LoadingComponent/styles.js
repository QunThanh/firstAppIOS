import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   square: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
      margin: 50,
   },
   text: {
      fontWeight: '600',
   },
});

export default styles;
