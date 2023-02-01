import { StyleSheet } from 'react-native';
import { normalizeHeight, normalizeWidth } from '~/configs/normalize';

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      height: 'auto',
   },
   title: {
      paddingTop: 30,
      paddingLeft: 30,
      fontSize: 50,
      fontWeight: '700',
   },
   menuCategory: {
      zIndex: 99,
      paddingLeft: 30,
      width: '100%',
      height: normalizeHeight(50),
   },
   item: {
      width: 'auto',
      height: normalizeHeight(50),
      paddingRight: 35,
      alignSelf: 'center',
      justifyContent: 'center',
   },
   text: {
      fontSize: normalizeWidth(20),
      fontWeight: '700',
   },
   textBlur: {
      color: '#9F9C9C',
      fontSize: normalizeWidth(20),
      fontWeight: '700',
   },
});

export default styles;
