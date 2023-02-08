import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   backgroundProgressBar: {
      borderRadius: 99,
      width: 300,
      height: 50,
      backgroundColor: 'black',
   },
   progressBar: {
      borderRadius: 99,
      height: 40,
      margin: 5,
      backgroundColor: 'gray',
   },
   text: {
      position: 'absolute',
      fontWeight: '800',
      color: 'gold',
      zIndex: 999,
      fontSize: 20,
   },
});

export default styles;
