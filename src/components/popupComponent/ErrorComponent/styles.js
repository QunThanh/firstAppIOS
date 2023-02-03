import { StyleSheet } from 'react-native';
import { normalizeWidth } from '~/configs/normalize';

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
      width: normalizeWidth(100),
      height: normalizeWidth(100),
      margin: 20,
   },
   text: {
      fontWeight: '600',
      marginBottom: 10,
   },
});

export default styles;
