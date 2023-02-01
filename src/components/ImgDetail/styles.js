import { StyleSheet } from 'react-native';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';
import { normalizeWidth, normalizeHeight } from '~/configs/normalize.js';

const styles = StyleSheet.create({
   wrapper: {
      width: normalizeWidth(150),
      height: normalizeWidth(300),
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 10,
      shadowColor: stylesGlobal.color.black,
      shadowOffset: {
         width: 0,
         height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
   },
   icon: {
      position: 'absolute',
      zIndex: 99,
      top: 10,
      right: 10,
      width: 20,
      height: 20,
   },
   img: {
      borderRadius: 10,
      width: '100%',
      height: normalizeWidth(300),
   },
});
export default styles;
