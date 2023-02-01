import { StyleSheet } from 'react-native';
import { normalizeHeight, normalizeWidth } from '~/configs/normalize';

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
      width: 100,
      height: 100,
      margin: 20,
   },
   text: {
      fontWeight: '600',
      marginBottom: 10,
   },
});

export default styles;
