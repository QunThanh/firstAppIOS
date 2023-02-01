import { StyleSheet } from 'react-native';
import { normalizeHeight, normalizeWidth } from '~/configs/normalize';

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   content: {
      width: '80%',
      height: 300,
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingHorizontal: 20,
      borderRadius: 20,
      elevation: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },
   img: {
      width: 60,
      height: 60,
      margin: 10,
   },
   text: {
      marginBottom: 20,
      fontSize: 22,
      fontWeight: '700',
   },
   textSuccess: {
      color: 'green',
   },
   textError: {
      color: 'red',
   },
   button: {
      backgroundColor: '#EBE9ED',
      borderRadius: 10,
      height: 50,
   },
});

export default styles;
